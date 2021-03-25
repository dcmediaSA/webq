const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ response: '👍 SERVER IS UP AND RUNNING' }).status(200);
});

module.exports = router;
