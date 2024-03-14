// importing service classes
const field_service = require('../../services/field')

// controllers of clients from the website
const clients_controller = {
    index: async (req, res) =>{
        res.render('layout');
    },
    add: async (req, res) =>{
        res.render('layout/update_add', { mode: 'Add' });
    },
    update: async (req, res) =>{
        const eventData = await field_service.getById(req.params.id);
        res.render('layout/update_add', { mode: 'Update', eventData: eventData });
    }
};
  
module.exports = clients_controller;