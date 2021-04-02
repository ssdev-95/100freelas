const Utils = require('../utils/FreelaUtils')
const Freelas = require('../models/Freelas')
const Profile = require('../models/Profile')

module.exports = {
    index(_req, res) {
        const freelas = Freelas.get()
        const profile = Profile.get()
        const updatedJobs = freelas.map(job => {
            const remaining = Utils.getRemainingDays(job)
            const status = remaining <= 0 ? 'done' : 'progress'
    
            return {
                ...job,
                remaining,
                status,
                budget: Utils.calculateBudget(job,profile.valuePerHour)
            }
        })
    
        return res.render('index', {jobs: updatedJobs})
    },
    save(req, res) {
        const freelas = Freelas.get()
        const lastId = freelas[freelas.length-1]?.id || 0

        freelas.push({
            id: lastId+1,
            name: req.body.name,
            dailyHours: req.body["daily-hours"],
            totalHours: req.body["total-hours"],
            createdAt: Date.now(),
        })
        return res.redirect('/')
    },
    create(_req, res) {
        return res.render('job')
    },
    show(req, res) {
        const jobId = req.params.id
        const freelas = Freelas.get()
        const profile = Profile.get()

        const jobb = freelas.find(job=>{
            if(Number(job.id)===Number(jobId)) {
                return job
            }
        })

        console.log(jobb)

        if(!jobb) {
            return res.send('Job not found')
        }

        jobb.budget = Utils.calculateBudget(jobb, profile.valuePerHour)

        return res.render('job-edit', { job: jobb })
    },
    update(req, res) {
        const jobId = req.params.id
        const freelas = Freelas.get()
        const jobb = freelas.find(job=>Number(job.id)===Number(jobId))

        if(!jobb) {
            return res.send('Job not found')
        }

        const updatedJob = {
            ...jobb,
            name: req.body.name,
            totalHours: req.body['total-hours'],
            dailyHours: req.body['daily-hours']
        }

        //substituir Freelancer.data por Freelancer.update() depois
        const updatedFreela = freelas.map(job=>{
            if(Number(job.id)=== Number(jobId)) {
                job=updatedJob
            }

            return job
        })

        Freelas.update(updatedFreela)

        return res.redirect('/job/'+jobId)
    },
    delete(req, res) {
        const jobId = req.params.id
         
        Freelas.delete(jobId)

        return res.redirect('/')
    
    }
}
