const express = require('express');
const router = express.Router();
const loginController = require('../controller/login');
const authenticate = require('../../authenticate');

const { singleResponse, errorResponse } = require('../../response');

/**
 * POST request to /login
 */
router.post('/', async (req, res, next) => {
    await loginController.login(req.body, next)
        .then((user) => {
            console.log(user);
            if (!user) {
                res.status(400);
                const response = errorResponse('Incorrect credentials', 400);
                console.log(response);
                res.json(response)
            } else {
                const token = authenticate.getToken({_id: user._id});
                res.status(200);
                responseBody = {success: true, token}
                const response = singleResponse(responseBody, 200);
                console.log(response);
                res.json(response)
            }
        })
        .catch((error) => {
            next(error);
        })

});


module.exports = router;
