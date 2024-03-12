const clients_controller = {
    index: async (req, res) =>{
        res.render('layout');
    },
    add: async (req, res) =>{
        res.render('layout/update_add');
    },
    update: async (req, res) =>{
        res.render('layout/update_add');
    }
};
  
module.exports = clients_controller;
