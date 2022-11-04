const products = [
    { id: 1, name: 'Table', price: 199.95 },
    { id: 2, name: 'Chaise', price: 59.95 },
    { id: 3, name: 'Saliere', price: 9.95 },
]

const productController = {

    index: (req, res) => {
        const content = '<h1>Liste des produits</h1>'
            + '<ul>'
            + products.map(p => '<li>' + p.name + '</li>').join('');
            + '</ul>';
        
        res.send(content);
    },

    detail: (req, res) => {
        const {id} = req.params;

        const product = products.find(p => p.id === parseInt(id));
²
        // if(!products.some(p => p.id === id)) {
        if(!product) {
            return res.status(404).send('<h1>Produit non trouvé</h1>');
        }

        const content = '<h1>Detail du produit</h1>'
            + '<p>Nom : ' + product.name + '</p>'
            + '<p>Price : ' + product.price.toLocaleString('fr-be', {style: 'currency', currency: 'EUR'}) + '</p>'

        res.send(content);
    },
}

module.exports = productController;