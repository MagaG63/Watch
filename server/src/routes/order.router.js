const OrderController = require('../controllers/order.controller')
const express = require('express')

const orderRouter = express.Router();

orderRouter.get('', OrderController.getAllContent)

module.exports = orderRouter;
