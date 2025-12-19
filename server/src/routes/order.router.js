// const express = require('express');
// const OrderController = require('../controllers/order.controller');
// const verifyMuiter = require('../middlewares/verifyMuiter');

// const orderRouter = express.Router();

// orderRouter.post(
//   '/orders',
//   verifyMuiter,              // или verifyMuiter(), если это фабрика
//   OrderController.createOrder
// );

// module.exports = orderRouter;
// routes/order.router.js
const express = require('express');
const OrderController = require('../controllers/order.controller');
const multer = require('multer');
const path = require('path');

const orderRouter = express.Router();

// ✅ Multer прямо в роутере (простой способ)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // папка для файлов
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

orderRouter.post(
  '/orders',
  upload.array('files', 10),  // 'files' = имя из FormData
  OrderController.createOrder
);

module.exports = orderRouter;
