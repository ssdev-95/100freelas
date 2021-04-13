export const Utils = {
    getRemainingDays: (totalHours, dailyHours, createdAt) => {
        const remainingDays = (totalHours/dailyHours).toFixed()
    
        const createdDate = new Date(createdAt)
    
        const dueDay = createdDate.getDate() + Number(remainingDays)
    
        const dueDateMs = createdDate.setDate(dueDay)
    
        const timeDiffMs = dueDateMs - Date.now()
    
        const dayInMs = 1000*60*60*24
    
        const dayDiff = Math.floor(timeDiffMs/dayInMs)
    
        return dayDiff
    },

    calculateBudget: (totalHours, valueHour) => {
        return valueHour * totalHours
    }
}
