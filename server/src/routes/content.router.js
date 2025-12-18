const ContentController = require('../controllers/content.controller')
const express = require('express')

const contentRouter = express.Router();

contentRouter.get('/content', ContentController.getAllContent)
contentRouter.delete('/content/:id', ContentController.deleteCard)
contentRouter.post('/content/', ContentController.createCard)
module.exports = contentRouter;

