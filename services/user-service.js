const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt"));

const users = require('./mongo-service').get('users');

const service = {
  users, 

  findByUserName(username) {
    return users.findOne({ username }, '-password');
  },

  findById(id) {
    return users.findById(id, '-password');
  },

  findAll() {
    return users.find({}, '-password');
  },

  create(username, password) {
    return bcrypt.hashAsync(password, 10).then((hash) => {
      return users.insert({
        username: username,
        password: hash
      });
    });
  },

  authenticate(username, password) {
    return users.findOne({ username }).then((result) => {
      if (result) {
        return bcrypt.compareAsync(password, result.password)
          .then((isValid) => {
            if (isValid) {
              delete result.password;
              return result;
            }
            return null;
          });
      } 
      else {
        console.log(`User ${username} not found`, username);
        return null;
      }
    });
  }
};


module.exports = service;