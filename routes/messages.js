var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /messages

// GET /messages/:id
router.get('/:id', function (req, res, next) {
    // Hae viesti tällä id:llä ja siihen liittyvät vastaukset tässä (Vinkki: findOne ja sopiva include)
    var messageId = parseInt(req.params.id);

    Models.Message.findOne(
            {
                where: {id: messageId},
                include: {model: Models.Reply,
                    include: {model: Models.User}
                }
            }).then(function (message) {
        res.json(message);
    });

    //res.send(200);
});

// POST /messages/:id/reply
router.post('/:id/reply', authentication, function (req, res, next) {
    // Lisää tällä id:llä varustettuun viestiin...
    var messageId = parseInt(req.params.id);
    // ...tämä vastaus (Vinkki: lisää ensin replyToAdd-objektiin kenttä MessageId, jonka arvo on messageId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
    var replyToAdd = req.body;
    replyToAdd.MessageId = messageId;
    replyToAdd.UserId = req.session.userId;

    Models.Reply.create(replyToAdd).then(function (reply) {
        res.json(reply);
    })
});

module.exports = router;
