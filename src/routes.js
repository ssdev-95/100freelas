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
            const weeksPerYear = 52

            const weeksPerMonth = (weeksPerYear-req.body["vacation-per-year"])/12

            const weeklyHours = req.body["hours-per-day"] * req.body["days-per-week"]

            const monthlyHours = weeksPerMonth * weeklyHours

            const valueHour = req.body["monthly-budget"] / monthlyHours

            Profile.data = {
                ...Profile.data,
                monthlyBudget: req.body["monthly-budget"],
                daysPerWeek: req.body["days-per-week"],
                hoursPerDay: req.body["hours-per-day"],
                vacationPerYear: req.body["vacation-per-year"],
                valuePerHour: valueHour
            }

            return res.redirect('/profile')
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
            createdAt: Date.now(),
            budget: 4500
        },
        {
            id: 2,
            name: 'OneTwo Project',
            dailyHours: 3,
            totalHours: 47,
            createdAt: Date.now(),
            budget: 4500
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
                    budget: Freelancer.services.calculateBudget(job,Profile.data.valuePerHour)
                }
            })
        
            return res.render(views + 'index', {jobs: updatedJobs})
        },
        save(req, res) {
            const lastId = Freelancer.data[Freelancer.data.length-1]?.id || 0

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
        },

        show(req, res) {
            const jobId = req.params.id

            const jobb = Freelancer.data.find(job=>Number(job.id)===Number(jobId))

            if(!jobb) {
                return res.send('Job not found')
            }

            jobb.budget = Freelancer.services.calculateBudget(jobb,Profile.data.valuePerHour)

            return res.render(views + 'job-edit', { job: jobb })
        },

        update(req, res) {
            const jobId = req.params.id

            const jobb = Freelancer.data.find(job=>Number(job.id)===Number(jobId))

            if(!jobb) {
                return res.send('Job not found')
            }

            const updatedJob = {
                ...jobb,
                name: req.body.name,
                totalHours: req.body['total-hours'],
                dailyHours: req.body['daily-hours']
            }

            Freelancer.data = Freelancer.data.map(job=>{
                if(Number(job.id)=== Number(jobId)) {
                    job=updatedJob
                }

                return job
            })

            return res.redirect('/job/'+jobId)
        },

        delete(req, res) {
            const jobId = req.params.id

            //filter
            Freelancer.data = Freelancer.data.filter(job=>Number(job.id)!==Number(jobId))

            return res.redirect('/')
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
        },

        calculateBudget(job, valueHour) {
            return valueHour * job.totalHours
        }
    }
}

routes.get('/', Freelancer.controllers.index)
routes.get('/job', Freelancer.controllers.create)
routes.post('/job', Freelancer.controllers.save)
routes.get('/job/:id', Freelancer.controllers.show)
routes.post('/job/:id', Freelancer.controllers.update)
routes.post('/job/delete/:id', Freelancer.controllers.delete)
routes.get('/profile', Profile.controllers.index)
routes.post('/profile', Profile.controllers.update)

module.exports = routes
