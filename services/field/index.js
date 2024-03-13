const fs = require('fs')
// access global mock db file
const fields = require(global.mock_db)

// write service method implementations
const field_service = {
    getAll() {
        return fields
    },
    getById(id) {
        return fields.find(g => g.id == id)
    },
    create(req, res) {
        let new_id = genRandId(4)
                
        const field = req.body

        const new_field = {
            id: new_id,
            field: field
        }

        fields.push(new_field)
        
        writeToFile(fields)
        
        return new_field
    },
    update(id, updateData){
        const fieldIndex = fields.findIndex(u => u.id == id)

        if (fieldIndex === -1) {
            return null
        }

        fields[fieldIndex].field = { ...fields[fieldIndex].field, ...updateData }

        writeToFile(fields)

        return fields[fieldIndex]
    },
    delete(id) {
        const index = fields.findIndex(d => d.id == id)
        fields.splice(index, 1)    
        writeToFile(fields)
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = field_service