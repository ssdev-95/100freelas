import { database } from './config'

export const FreelaController = {
    createJob(job: any) {
        database.firestore()
            .collection('freelas')
            .add({
                name: job.name,
                daily_hours: job.daily_hours,
                total_hours: job.total_hours,
                created_at: job.created_at
            })
    },
    getJobs() {
        let jobs = []
        database.firestore()
            .collection('freelas')
            .onSnapshot(snapshot => {
                snapshot
                    .docs
                    .map(doc => {
                        jobs.push({
                            id: doc.id,
                            name: doc.data().name,
                            daily_hours: doc.data().daily_hours,
                            total_hours: doc.data().total_hours,
                            created_at: doc.data().created_at
                        })
                  }
                )
            })
        return jobs
    },
    updateJob(job: any, id: string) {
        database.firestore()
            .collection('freelas')
            .doc(id)
            .update({
                name: job.job_name,
                daily_hours: job.daily_hours,
                total_hours: job.total_hours
            })
    },
    deleteJob(id: string) {
        database.firestore()
            .collection('freelas')
            .doc(id)
            .delete()
    }
}
