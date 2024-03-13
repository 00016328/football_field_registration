// import specific service class
const field_service = require('../../../services/field/')

// mention the service's needed actions (methods)
const field_controller = {
    getAll(req, res) {
        res.json(field_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            field_service.create(req, res)
        )
    },
    delete(req, res) {
        const field = field_service.getById(req.params.id)
        
        if (field) {
            field_service.delete(req.params.id)
            res.status(204).send('Registered field deleted successfully')
        } else {
            res.status(404).send('Registered field not found')
        }
    }
}

module.exports = field_controller