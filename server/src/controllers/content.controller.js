const ContentService = require ('../serivces/content.services')

class ContentController {

    static async getAllContent (req, res) {
        const content = await ContentService.getAll();
        
        if (!content) {
            res.sendStatus(404).message('Не могу найти контент')
        }
        
        res.status(200).json(content)
    }
}

module.exports = ContentController;