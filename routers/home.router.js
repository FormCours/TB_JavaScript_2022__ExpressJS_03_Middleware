const homeController = require('../controllers/home.controller');


const homeRouter = require('express').Router();

homeRouter.get('/', homeController.index);
homeRouter.get('/contact', homeController.contact);
homeRouter.get('/boum', homeController.boum);

module.exports = homeRouter;