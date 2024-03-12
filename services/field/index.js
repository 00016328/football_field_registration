const fs = require('fs')
// access global mock db file
const fields = require(global.mock_db)

// write service method implementations
const field_service = {
    getAll() {
        return fields
    }
}

module.exports = field_service
