// import specific service class
const field_service = require('../../../services/field/')

// mention the service's needed actions (methods)
const field_controller = {
    getAll(req, res) {
        res.json(field_service.getAll())
    }
}

module.exports = field_controller
