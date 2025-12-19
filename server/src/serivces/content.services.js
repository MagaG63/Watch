
const { Content } = require ('../../db/models')

class ContentService {
    
    static getAll () {
        return Content.findAll()
    }


  static create(data){
   return Content.create(data)
  }

    static delete(id){
        return Content.destroy({where: { id }})
    }

}

module.exports = ContentService;