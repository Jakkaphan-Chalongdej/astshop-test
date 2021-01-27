

module.exports = function(server) {
 
    const product = require('../controller/product.controller');
 
    // Create a new Book
    server.post('/api/product/create', product.create);
 
    // Retrieve all Books
    server.get('/api/product', product.findAll);
 
    // Retrieve a single Book by Id
    server.get('/api/product/:productId', product.findById);
	 
    // Update a Book with Id
    server.put('/api/product/:productId', product.update);
 
    // Delete a Book with Id
    server.delete('/api/product/:productId', product.delete);
}