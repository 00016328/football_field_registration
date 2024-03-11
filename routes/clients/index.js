const express = require('express');
const router = express.Router();
const clients_controller = require('../../controllers/clients');

router.get('/', clients_controller.index);

module.exports = router;
