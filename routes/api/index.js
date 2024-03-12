const express = require('express')
const field_router = require('./field')

const router = express.Router()

// registering child routers
router.use('/field', field_router)
module.exports = router;