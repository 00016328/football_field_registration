const express = require('express');

const router = express.Router();
const field_controller = require('../../../controllers/api/field');

// Define API routes
router.get('/', (req, res)=>{
    field_controller.getAll(req, res);
});

module.exports = router;
