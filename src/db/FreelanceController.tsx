import { database } from '../db/config'
import { ProfileController } from './ProfileController'
import { Utils } from '../utils/FreelaUtils'

interface JobDataExtended {
    id: string;
    name: string;
    daily_hours: number;
    total_hours: number;
    budget: number;
}

interface JobData {
    name: string;
    daily_hours: number;
    total_hours: number;
    budget: number;
}

export const FreelaController = {
    createJob(job: JobData) {
        database
            .collection('jos')
            .add({
                name: job.name,
                daily_hours: job.daily_hours,
                total_hours: job.total_hours
            })
    },
    getJobs() {
        const profile = ProfileController.get()
        console.log(profile)
        const hourvalue = profile.monthly_budget / (profile.daily_hours * profile.weekly_days)
        let jobs: JobDataExtended[]
        database
            .collection('jobs')
            .onSnapshot(snap => {
                snap
                    .docs
                    .map(doc => jobs.push({
                        id: doc.id,
                        name: doc.data().name,
                        daily_hours: doc.data().daily_hours,
                        total_hours: doc.data().total_hours,
                        budget: Utils.calculateBudget(doc.data().total_hours, hourvalue)
                    })
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
