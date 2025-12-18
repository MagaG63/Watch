const ContentService = require ('../serivces/content.services')

class ContentController {

    static async getAllContent (req, res) {
        const content = await ContentService.getAll();
        
        if (!content) {
            res.sendStatus(404).message('Не могу найти контент')
        }
        
        res.json(content)
    }

    static async createCard(req, res) {
     const data = req.body

     const card = await ContentService.create({...data, userId: 1})

         res.status(201).json(card)
    }

    static async deleteCard(req, res){
        const { id } = req.params

    await   ContentService.delete(id);
    res.sendStatus(204)
    }

}

module.exports = ContentController;