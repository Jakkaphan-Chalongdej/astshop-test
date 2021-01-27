

module.exports = function(server) {
 
    const product = require('../controller/product.status.controller');
 
    // Create a new Book
    server.post('/api/productstatus/create', product.create);
 
    // Retrieve all Books
    server.get('/api/productstatus', product.findAll);
 
    // Retrieve a single Book by Id
    server.get('/api/productstatus/:productstatusId', product.findById);
	 
    // Update a Book with Id
    server.put('/api/productstatus/:productstatusId', product.update);
 
    // Delete a Book with Id
    server.delete('/api/productstatus/:productstatusId', product.delete);
}