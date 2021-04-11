const Database = require('../db/config')

module.exports = {
    async get(){
        const db = await Database()

        const data = await db.get('SELECT * FROM profile')

        db.close()

        return {
            name: data.name,
            avatar: data.avatar,
            monthlyBudget: data.monthly_budget,
            daysPerWeek: data.days_per_week,
            hoursPerDay: data.hours_per_day,
            vacationPerYear: data.vacation_per_year,
            valuePerHour: data.value_hour
        }
    },
    async update(profile) {
        const db = await Database()

        db.run(`UPDATE profile SET
            name  = '${profile.name}',
            avatar = '${profile.avatar}',
            monthly_budget = ${profile.monthlyBudget},
            days_per_week = ${profile.daysPerWeek},
            hours_per_day = ${profile.hoursPerDay},
            vacation_per_year = ${profile.vacationPerYear},
            value_hour = ${profile.valuePerHour}
        `)

        await db.close()
    }
}
