var authentication = function(req, res, next){
    
    if(!req.session.userId || req.session.userId === null) {
        res.send(403);
    } else {
        next();
    }
    
    // Tarkista, että käyttäjä on kirjautunut tässä
};

module.exports = authentication;
