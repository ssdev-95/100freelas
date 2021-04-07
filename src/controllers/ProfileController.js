const Profile = require('../models/Profile')

module.exports = {
    async index(_req, res) {
        const profile = await Profile.get()
        return res.render('profile', { profile })
    },

    async update (req, res) {
        const weeksPerYear = 52

        const weeksPerMonth = (weeksPerYear-req.body["vacation-per-year"])/12

        const weeklyHours = req.body["hours-per-day"] * req.body["days-per-week"]

        const monthlyHours = weeksPerMonth * weeklyHours

        const valueHour = req.body["monthly-budget"] / monthlyHours
        
        const profile = await Profile.get()
        
        const updatedProfile = {
            ...profile,
            monthlyBudget: req.body["monthly-budget"],
            daysPerWeek: req.body["days-per-week"],
            hoursPerDay: req.body["hours-per-day"],
            vacationPerYear: req.body["vacation-per-year"],
            valuePerHour: valueHour
        }

        await Profile.update(updatedProfile)

        return res.redirect('/profile')
    }
}
