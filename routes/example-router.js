var constants = require('../utils/constants');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(204);
});

router.get('/status', (req, res) => {
    res.status(200).send({
        message: 'Hello from the other side'
    });
});

module.exports = router;
