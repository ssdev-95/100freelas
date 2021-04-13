import { database } from './config'

interface ProfileData {
    id: string,
    name: string;
    daily_hours: number;
    weekly_days: number;
    annual_vacations: number;
    monthly_budget: number;
}

export const ProfileController = {
    getProfile() {
        let profile

        database
            .collection('profile')
            .onSnapshot(snapshot => {
                snapshot
                    .docs
                    .map(doc => {
                        profile = {
                            weekly_days: doc.data().days_per_week,
                            daily_hours: doc.data().hours_per_day,
                            monthly_budget: doc.data().monthly_budget,
                            annual_vacations: doc.data().vacations_per_year,
                            name: doc.data().name,
                            id: doc.id
                        }
                    })
                console.log(profile)
            })
        
            console.log(profile)

        return profile
    },
    update(profile: ProfileData) {
        database
            .collection('profile')
            .doc(profile.id)
            .update({
                name: profile.name,
                hours_per_days: profile.daily_hours,
                days_per_week: profile.weekly_days,
                vacations_per_year: profile.annual_vacations,
                monthly_budget: profile.monthly_budget
            })
    }
}
