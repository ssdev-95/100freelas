const Freelas = require('../models/Freelas')
const Profile = require('../models/Profile')
const FreelaUtils = require('../utils/FreelaUtils')

module.exports = {
    async save(req, res) {

        await Freelas.create({
            name: req.body.name,
            dailyHours: req.body["daily-hours"],
            totalHours: req.body["total-hours"],
            createdAt: Date.now(),
        })

        return res.redirect('/')
    },
    create(_req, res){ 
        return res.render('job')
    },
    async show(req, res) {
        const jobId = req.params.id
        const jobs = await Freelas.get()

        const job = jobs.find(job=>Number(job.id) === Number(jobId))

        if(!job) {
            return res.send('Job not found')
        }

        const profile = await  Profile.get()

        job.budget = FreelaUtils.calculateBudget(job.totalHours, profile.valuePerHour)

        return res.render('job-edit', { job })
    },
    async update(req, res) {
        const jobId = req.params.id

        const updatedJob = {
            name: req.body['name'],
            totalHours: req.body['total-hours'],
            dailyHours: req.body['daily-hours']
        }

        await Freelas.update(updatedJob, jobId)

        return res.redirect(`/job/${jobId}`)
    },
    async delete(req, res) {
        const jobId = req.params.id
         
        await Freelas.delete(jobId)

        return res.redirect('/')
    
    }
}
