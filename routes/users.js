const express = require('express');

const router = express.Router();

const userService = require('../services/user-service');

/* GET users listing. */
router.get('/', (req, res, next) => {
  userService.findAll()
    .then(result => res.json(result))
    .catch(next);
});

/* GET users listing. */
router.get('/:username', (req, res, next) => {
  userService.findByUserName(req.params.username)
    .then(result => res.json(result))
    .catch(next);
});

/* GET users listing. */
router.post('/', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  userService.create(username, password)
    .then((what) => {
      delete what.password;
      res.json(what);
    })
    .catch(next);
});

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  userService.authenticate(username, password)
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
