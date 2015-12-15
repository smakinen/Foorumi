FoorumApp.controller('TopicsListController', function($scope, $location, Api){
  
    Api.getTopics().success(function(topics) {
      $scope.topics = topics;
  });
  
  $scope.addTopic = function() {
    var name = $scope.newTopic.name;
    var description = $scope.newTopic.description;
    
    var topic = {name: name, description: description};      
    Api.addTopic(topic).success(function(){
        $location.path('/topics');
    });
    
  };
  
});
