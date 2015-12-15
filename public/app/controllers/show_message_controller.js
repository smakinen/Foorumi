FoorumApp.controller('ShowMessageController', function($scope, $routeParams, Api){
  var messageId = $routeParams.id;
  
  Api.getMessage(messageId).success(function(message){
     $scope.message = message; 
  });
  
  $scope.addReply = function() {
    var replyMessage = {content: $scope.replyContent};
    Api.addReply(replyMessage, messageId).success(function(reply){
        $scope.message.Replies.push(reply);
    });
  };
  
});
