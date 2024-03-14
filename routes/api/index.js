const express = require('express')
const field_router = require('./field')

const router = express.Router()

// proccess of child routers' registation
router.use('/field', field_router)
module.exports = router;