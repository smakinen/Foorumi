FoorumApp.service('Api', function($http){
  // Aihealueiden Api-funktiot
  this.getTopics = function(){
      // Hae kaikki aihealueet toteuttamasi Api:n polusta /topics
      return $http.get('/topics');      
  };
  this.getTopic = function(id){
    // Hae annetulla id:llä varastettu aihealue toteuttamasi Api:n polusta /topics/:id
      return $http.get('/topics/'+id);
  };
  this.addTopic = function(topic){
    // Lisää annettu aihealue lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /topics
    return $http.post('/topics', topic);    
  };

  // Viestien Api-funktiot
  this.getMessage = function(id){
    return $http.get('/messages/'+id);
      // Hae annetulla id:llä varustettu viesti toteuttamasi Api:n polusta /messages/:id
  };
  this.addMessage = function(message, topicId){
    return $http.post('/topics/'+topicId+'/message', message);// Lisää annettu viesti lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /topics/:topicId/message
  };

  // Vastausten Api-funktiot
  this.addReply = function(reply, messageId){
      return $http.post('/messages/'+messageId+'/reply', reply);
      // Lisää annettu vastaus lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /messages/:messageId/reply
  };

  // Käyttäjän Api-funktiot
  this.login = function(user){
    return $http.post('/users/authenticate', user); // Tarkista käyttäjän kirjautuminen lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users/authenticate
  };
  this.register = function(user){
    return $http.post('/users', user);// Lisää annettu käyttäjä lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users
  };
  this.getUserLoggedIn = function(){
      var response = $http.get('/users/logged-in');
      return response;
      //return $http.get('/users/logged-in');// Hae kirjautunut käyttäjä toteuttamasi Api:n polusta /users/logged-in
  };
  this.logout = function(){
    return $http.get('/users/logout');
  };
});
