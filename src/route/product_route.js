

module.exports = function(app) {
 
    const product = require('../controller/product.controller');
 
    // Create a new Book
    app.post('/api/product/create', product.create);
 
    // Retrieve all Books
    app.get('/api/product', product.findAll);
 
    // Retrieve a single Book by Id
    app.get('/api/product/:productId', product.findById);
	 
    // Update a Book with Id
    app.put('/api/product/:productId', product.update);
 
    // Delete a Book with Id
    app.delete('/api/product/:productId', product.delete);
}