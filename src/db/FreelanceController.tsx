import { database } from './config'
//import { ProfileController } from './ProfileController'
import { Utils } from '../utils/FreelaUtils'

interface JobDataExtended {
    id: string;
    name: string;
    daily_hours: number;
    total_hours: number;
    budget: number;
    created_at: number;
}

interface JobData {
    name: string;
    daily_hours: number;
    total_hours: number;
    budget: number;
    created_at: number;
}

export const FreelaController = {
    createJob(job: JobData) {
        database
            .collection('jos')
            .add({
                name: job.name,
                daily_hours: job.daily_hours,
                total_hours: job.total_hours,
                created_at: job.created_at
            })
    },
    getJobs() {
        // console.log(ProfileController.get())
        // const {monthly_budget, daily_hours, weekly_days} = ProfileController.get()
        // const hourvalue = monthly_budget / (daily_hours * weekly_days)
        let jobs = []
        database
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
    updateJob(job: JobDataExtended) {
        database
            .collection('jobs')
            .doc(job.id)
            .update({
                name: job.name,
                daily_hours: job.daily_hours,
                total_hours: job.total_hours
            })
    },
    deleteJob(id: string) {
        database
            .collection('jobs')
            .doc(id)
            .delete()
    }
}
