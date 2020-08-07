const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

const responseHandler = require('../../response');

const authenticate = require('../../authenticate');


/**
 * GET request to /users
 */
router.get('/', async (req, res, next) => {
  const users = await userController.getAllUsers()
    .then((users) => {
      res.status(200);
      const response = responseHandler.singleResponse(users, 200);
      console.log(response);
      res.json(response)
    })
    .catch((error) => {
      next(error);
    })

});

/* POST user  /users */
router.post('/', authenticate.verifyUser, async (req, res, next) => {
  const user = {
    name: req.body.name,
    password: req.body.password
  }
  await userController.createUser(user)
    .then((user) => {
      res.status(201);
      const response = responseHandler.singleResponse(user, 201);
      console.log(response);
      res.json(response);
    })
    .catch((error) => {
      next(error);
    })

});

module.exports = router;
