const { Content } = require ('../../db/models')

class ContentService {
    
    static getAll () {
        return Content.findAll()
    }
}

module.exports = ContentService;