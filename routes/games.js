const express = require('express');

const router = express.Router();

const gameService = require('../services/game-service');

/* GET users listing. */
router.get('/', (req, res, next) => {
  gameService.findAll(req.query)
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
