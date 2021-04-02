let data = {
    name: 'Salomao (xSallus)',
    avatar: 'https://github.com/xSallus.png',
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
