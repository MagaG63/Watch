const OrderService = require("../serivces/order.service");

class OrderController {

    static async getAllContent (req, res) {
        const content = await OrderService.getAll();
        
        if (!content) {
            res.sendStatus(404).message('Не могу найти контент')
        }
        
        res.json(content)
    }
}

module.exports = OrderController