const fs = require('fs')
// access from global mock db file
const fields = require(global.mock_db)

// adding methods to call
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

// updating the db content in create function
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

// generating random id from uuid
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