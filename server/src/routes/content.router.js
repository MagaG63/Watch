const ContentController = require('../controllers/content.controller')
const express = require('express')

const contentRouter = express.Router();

contentRouter.get('/content', ContentController.getAllContent)

module.exports = contentRouter;

