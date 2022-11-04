require('dotenv-flow').config();
const {PORT, NODE_ENV} = process.env;

const express = require('express');
const homeRouter = require('./routers/home.router');
const productRouter = require('./routers/product.router');


const app = express();

// Ajout d'un middleware « application-level »
app.use((req, res, next) => {
    const now = new Date();
    const url = req.url;
    console.log(`${now.toLocaleString()} : ${url}`);

    next();
});


// Routing
app.use(homeRouter);
app.use(productRouter);


// Ajout d'un middleware « Error »
app.use((err, req, res, next) => {

    console.error(err);

    // Si le header a été envoyé, on laisse Express le gérer
    if(res.headerSent) {
        return next(err);
    }

    // Erreur en mode development
    if(NODE_ENV === "development") {
        let content = "<h1> Error !!!</h1>"
        content += err;

        return res.status(500).send(content);
    }

    // Erreur
    return res.status(500).send('<h1>Une erreur s\'est produite !</h1>');
})

app.listen(PORT, () => {
    console.log(`Server up on ${PORT} in ${NODE_ENV} mode`);
});