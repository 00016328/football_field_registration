const express = require('express');
const { validationResult } = require('express-validator');
const { addFieldValidation, deleteFieldValidation, updateFieldValidation } = require('../../../validators/field');

const router = express.Router();
const field_controller = require('../../../controllers/api/field');

// proccess of defining API routes
router.get('/', (req, res)=>{
    field_controller.getAll(req, res);
});

router.post('/', addFieldValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    field_controller.create(req, res)
})

router.put('/:id', updateFieldValidation(), (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  field_controller.update(req, res)
})

router.delete('/:id', deleteFieldValidation(), (req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  field_controller.delete(req, res)
})

module.exports = router;