const express = require('express')
const routes = express.Router()

const ProfileController = require('./controllers/ProfileController')
const FreelanceController = require('./controllers/FreelanceController')

routes.get('/', FreelanceController.index)
routes.get('/job', FreelanceController.create)
routes.post('/job', FreelanceController.save)
routes.get('/job/:id', FreelanceController.show)
routes.post('/job/:id', FreelanceController.update)
routes.post('/job/delete/:id', FreelanceController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

module.exports = routes
