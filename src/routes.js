const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

const Profile = {
    data: {
        name: 'Salomao',
        avatar: 'https://avatars.githubusercontent.com/u/58428963?v=4',
        monthlyBudget: 2650.99,
        daysPerWeek: 5,
        hoursPerDay: 6,
        vacationPerYear: 12,
        valuePerHour: 75
    },

    controllers: {
        index(_req, res){
            return res.render(views + 'profile', { profile: Profile.data })
        },

        update(req, res) {
            
        }
    }
}

const Freelancer = {
    data: [
        {
            id: 1,
            name: 'Gula-Guloso',
            dailyHours: 2,
            totalHours: 2,
            createdAt: Date.now()
        },
        {
            id: 2,
            name: 'OneTwo Project',
            dailyHours: 3,
            totalHours: 47,
            createdAt: Date.now()
        }
    ],

    controllers: {
        index(_req, res) {
            const updatedJobs = Freelancer.data.map(job => {
                const remaining = Freelancer.services.getRemainingDays(job)
                const status = remaining <= 0 ? 'done' : 'progress'
        
                return {
                    ...job,
                    remaining,
                    status,
                    budget: Profile.data.valuePerHour * job.totalHours
                }
            })
        
            return res.render(views + 'index', {jobs: updatedJobs})
        },
        save(req, res) {
            const lastId = Freelancer.data[Freelancer.data.length-1]?.id || 1

            Freelancer.data.push({
                id: lastId+1,
                name: req.body.name,
                dailyHours: req.body["daily-hours"],
                totalHours: req.body["total-hours"],
                createdAt: Date.now(),
            })
            return res.redirect('/')
        },
        create(_req, res) {
            return res.render(views + 'job')
        }
    },

    services: {
        getRemainingDays: job => {
            const remainingDays = (job.totalHours/job.dailyHours).toFixed()
        
            const createdDate = new Date(job.createdAt)
        
            const dueDay = createdDate.getDate() + Number(remainingDays)
        
            const dueDateMs = createdDate.setDate(dueDay)
        
            const timeDiffMs = dueDateMs - Date.now()
        
            const dayInMs = 1000*60*60*24
        
            const dayDiff = Math.floor(timeDiffMs/dayInMs)
        
            return dayDiff
        }
    }
}

routes.get('/', Freelancer.controllers.index)

routes.get('/job', Freelancer.controllers.create)

routes.post('/job', Freelancer.controllers.save)

routes.get('/job/edit', (_req, res)=>res.render(views + 'job-edit'))

routes.get('/profile', Profile.controllers.index)
routes.post('/profile', Profile.controllers.update)

module.exports = routes
