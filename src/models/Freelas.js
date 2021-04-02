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
    }
]

module.exports = {
    get: () => {
        return data
    },
    update: freela => {
        data = data.map(lance=>{
            lance.id===freela.id&&(lance=freela)
        })
    },
    delete: id => {
        const newData = data.filter(freela=>freela.id===id)
        data = newData
    }
}
