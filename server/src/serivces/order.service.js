const { Order } = require ('../../db/models')

class OrderService {
    
    static getAll () {
        return Order.findAll()
    }
}

module.exports = OrderService