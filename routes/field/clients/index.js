const express = require('express');
const router = express.Router();
const clients_controller = require('../../../controllers/clients');

router.get('/', clients_controller.index);
router.get('/add', clients_controller.add);
router.get('/update', clients_controller.update);

module.exports = router;
