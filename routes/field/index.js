const express = require('express')
const clients_router = require('./clients')

const router = express.Router()

// proccess of child routers' registration
router.use('/', clients_router)
module.exports = router