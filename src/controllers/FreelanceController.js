const Freelas = require('../models/Freelas')
const Profile = require('../models/Profile')
const FreelaUtils = require('../utils/FreelaUtils')

module.exports = {
    save: (req, res) => {
        const jobs = Freelas.get()
        const lastId = jobs[jobs.length-1]?.id || 0

        jobs.push({
            id: lastId+1,
            name: req.body.name,
            dailyHours: req.body["daily-hours"],
            totalHours: req.body["total-hours"],
            createdAt: Date.now(),
        })
        return res.redirect('/')
    },
    create: (_req, res) => {
        return res.render('job')
    },
    show: (req, res) => {
        const jobId = req.params.id
        const jobs = Freelas.get()

        const job = jobs.find(job=>Number(job.id) === Number(jobId))

        if(!job) {
            return res.send('Job not found')
        }

        const profile = Profile.get()

        job.budget = FreelaUtils.calculateBudget(job, profile.valuePerHour)

        return res.render('job-edit', { job })
    },
    update: (req, res) => {
        const jobId = req.params.id

        const jobs = Freelas.get()

        const job = jobs.find(job => Number(job.id) === Number(jobId))

        if(!job) {
            return res.send('Job not found')
        }

        const updatedJob = {
            ...job,
            name: req.body['name'],
            totalHours: req.body['total-hours'],
            dailyHours: req.body['daily-hours']
        }
        
        const updatedFreelas = jobs.map(job=>{
            if(Number(job.id)=== Number(jobId)) {
                job=updatedJob
            }

            return job
        })

        Freelas.update(updatedFreelas)

        return res.redirect('/job/'+updatedJob.id)
    },
    delete: (req, res) => {
        const jobId = req.params.id
         
        Freelas.delete(jobId)

        return res.redirect('/')
    
    }
}
