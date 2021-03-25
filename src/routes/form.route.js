const express = require('express'),
       
        formController = require('../controllers/form.controller'),
        formRouter = express.Router();

/**
 * Аll routes start with '/form'
 **/

// Send contact form
formRouter.post('/', formController.create);

module.exports = formRouter;
