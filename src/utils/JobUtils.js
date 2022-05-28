module.exports = {
    remainingDays(job) {
        // calculo de dias restantes
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    
        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay)
    
        const timeDiffInMs = dueDateInMs - Date.now()
        // transformar milisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24     // transformando 1000 milisegundos em segundos -> minutos -> horas
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)
    
        // restam x dias
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}