const productController = require('../controllers/product.controller');


const productRouter = require('express').Router();

// Ajout d'un middleware « router-level »
productRouter.use((req, res, next) => {
    console.log(`Utilisation du router product !`);

    next();
});

// Définition des routes
productRouter.get('/product', productController.index);
productRouter.get('/product/:id', productController.detail);

module.exports = productRouter;