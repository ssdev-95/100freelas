let data = [
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
    },
    {
        id: 3,
        name: 'Freedelicias',
        dailyHours: 6,
        totalHours: 90,
        createdAt: Date.now(),
        budget: 4500
    },
]

module.exports = {
    get() {
        return data
    },
    update(newJob){
        data = newJob
    },
    delete(id) {
        data = data.filter(job=>Number(job.id)!==Number(id))
    }
}
