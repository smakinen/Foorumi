var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /topics

// GET /topics
router.get('/', function (req, res, next) {

    Models.Topic.findAll().then(function (topics) {
        res.json(topics);
    });
});

// GET /topics/:id
router.get('/:id', function (req, res, next) {

    var topicId = parseInt(req.params.id);

    Models.Topic.findOne({
            where: {id: topicId}, 
            include: {model: Models.Message}}
            ).then(function (topic) {
        res.json(topic);
    });
});

// POST /topics
router.post('/', function (req, res, next) {
    // Lisää tämä aihealue
    var topicToAdd = req.body;

    Models.Topic.create(topicToAdd).then(function (topic) {
        res.json(topic);
    });

    // Palauta vastauksena lisätty aihealue
});

router.get('/foo', function (req, res, next) {
    res.send('Hello');
});

// POST /topics/:id/message
router.post('/:id/message', function (req, res, next) {
    // Lisää tällä id:llä varustettuun aihealueeseen...
    var topicId = parseInt(req.params.id);
    // ...tämä viesti (Vinkki: lisää ensin messageToAdd-objektiin kenttä TopicId, jonka arvo on topicId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
    var messageToAdd = req.body;
    messageToAdd.TopicId = topicId;

    Models.Message.create(messageToAdd).then(function (message) {
        res.json(message);
    });

});

module.exports = router;
