const express = require('express')
const clients_router = require('./clients')

const router = express.Router()

// registering child routers
router.use('/', clients_router)
module.exports = router
