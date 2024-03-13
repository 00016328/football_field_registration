const { body, param } = require('express-validator');
const field_service = require('../../services/field')

const addFieldValidation = () => {
  return [
    body('registName')
      .notEmpty().withMessage('Register name should not be empty')
      .isLength({ min: 4, max: 255 }).withMessage('Event name should be between 8 and 255 characters long'),
    body('contactPhone')
      .notEmpty().withMessage('Contact phone should not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it should be +998xxxxxxxxx'),
    body('playersNumber')
      .notEmpty().withMessage('The players number should not be empty')
      .isFloat({ min: 0, max: 50 }).withMessage('Number of players cannot be less than 1 or more than 50'),
    body('durationTime')
      .notEmpty().withMessage('Duration time should not be empty')
      .matches(/^(0[0-4]:[3-5]\d|05:00)$/).withMessage('Invalid duration time format. Please use "HH:mm" format'),
    body('datetime')
      .notEmpty().withMessage('Event date time should not be empty')
      .matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format'),    
  ];
};

const deleteFieldValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await field_service.getById(id);
      if (!exists) {
        throw new Error('Registered field not found');
      }
    })
  ];
};

const updateFieldValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await field_service.getById(id);
      if (!exists) {
        throw new Error('Registered field not found');
      }
    }),
    body('registName')
      .notEmpty().withMessage('Register name should not be empty')
      .isLength({ min: 4, max: 50 }).withMessage('Event name should be between 4 and 50 characters long'),
    body('contactPhone')
      .notEmpty().withMessage('Contact phone should not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it should be +998xxxxxxxxx'),
    body('playersNumber')
      .notEmpty().withMessage('The players number should not be empty')
      .isFloat({ min: 0, max: 50 }).withMessage('Number of players cannot be less than 1 or more than 50'),
    body('durationTime')
      .notEmpty().withMessage('Duration time should not be empty')
      .matches(/^(0[0-4]:[3-5]\d|05:00)$/).withMessage('Invalid duration time format. Please use "HH:mm" format'),
    body('datetime')
      .notEmpty().withMessage('Event date time should not be empty')
      .matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)
        .withMessage('Invalid date and time format. Please use "YYY-MM-DD HH:mm" format'),
  ];
};


module.exports = {
    addFieldValidation,
    updateFieldValidation,
    deleteFieldValidation
};
