export const Utils = {
    getRemainingDays: (job) => {
        const remainingDays = (job.totalHours/job.dailyHours).toFixed()
    
        const createdDate = new Date(job.createdAt)
    
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
