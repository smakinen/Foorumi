FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    var topicId = $routeParams.id;
    Api.getTopic(topicId).success(function (topic) {
        $scope.topic = topic;
    });

    $scope.addMessage = function() {
        var message = { title: $scope.newMessageTitle, 
                        content: $scope.newMessageContent};
        Api.addMessage(message, topicId).success(function (message) {
            var createMsgId = message.id;
            $location.path('/messages/' + createMsgId)
        });
    };
});
