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

const jobs = [
    {
        id: 1,
        name: 'Gula-Guloso',
        dailyHours: 2,
        totalHours: 40,
        createdAt: Date.now()
    },
    {
        id: 2,
        name: 'OneTwo Project',
        dailyHours: 3,
        totalHours: 47,
        createdAt: Date.now()
    }
]

routes.get('/', (req, res)=>res.render(views + 'index', {jobs}))
routes.get('/job', (req, res)=>res.render(views + 'job'))
routes.post('/job', (req, res)=>{
    const lastId = jobs[jobs.length-1]?.id || 1

    jobs.push({
        id: lastId+1,
        name: req.body.name,
        dailyHours: req.body["daily-hours"],
        totalHours: req.body["total-hours"],
        createdAt: Date.now(),
    })

    return res.redirect('/')
})
routes.get('/job/edit', (req, res)=>res.render(views + 'job-edit'))
routes.get('/profile', (req, res)=>res.render(views + 'profile', { profile }))

module.exports = routes
