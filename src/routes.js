const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

const profile = {
    name: 'Salomao',
    avatar: 'https://avatars.githubusercontent.com/u/58428963?v=4',
    monthlyBudget: 2650.99,
    daysPerWeek: 5,
    hoursPerDay: 6,
    vacationPerYear: 12
}
routes.get('/', (req, res)=>res.render(views + 'index'))
routes.get('/job', (req, res)=>res.render(views + 'job'))
routes.get('/job/edit', (req, res)=>res.render(views + 'job-edit'))
routes.get('/profile', (req, res)=>res.render(views + 'profile', { profile }))

module.exports = routes
