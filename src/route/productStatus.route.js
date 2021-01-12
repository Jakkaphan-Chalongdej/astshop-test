

module.exports = function(app) {
 
    const product = require('../controller/product.status.controller');
 
    // Create a new Book
    app.post('/api/productstatus/create', product.create);
 
    // Retrieve all Books
    app.get('/api/productstatus', product.findAll);
 
    // Retrieve a single Book by Id
    app.get('/api/productstatus/:productstatusId', product.findById);
	 
    // Update a Book with Id
    app.put('/api/productstatus/:productstatusId', product.update);
 
    // Delete a Book with Id
    app.delete('/api/productstatus/:productstatusId', product.delete);
}