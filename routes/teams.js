const express = require('express');

const router = express.Router();

const teamService = require('../services/team-service');

/* GET users listing. */
router.get('/', (req, res, next) => {
  teamService.findAll()
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
