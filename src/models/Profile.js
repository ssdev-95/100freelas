let data = {
    name: 'Salomao',
    avatar: 'https://avatars.githubusercontent.com/u/58428963?v=4',
    monthlyBudget: 2650.99,
    daysPerWeek: 5,
    hoursPerDay: 6,
    vacationPerYear: 12,
    valuePerHour: 75
}

module.exports = {
    get: () => {
        return data
    },
    update: (profile) => {
        data = profile
    }
}
