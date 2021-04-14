import { database } from './config'

interface ProfileData {
    id: string,
    name: string;
    daily_hours: number;
    weekly_days: number;
    annual_vacations: number;
    monthly_budget: number;
    avatar: string;
}

export const ProfileController = {
    getProfile() {
        database.firestore()
            .collection('profile')
            .onSnapshot(snapshot => {
                snapshot
                    .docs
                    .forEach(doc => {
                        localStorage.setItem('profile', JSON.stringify({
                            avatar: doc.data().avatar,
                            weekly_days: doc.data().days_per_week,
                            daily_hours: doc.data().hours_per_day,
                            monthly_budget: doc.data().monthly_budget,
                            annual_vacations: doc.data().vacations_per_year,
                            name: doc.data().name,
                            id: doc.id
                        }))
                    })
            })
    },
    update(profile: any, id: string) {
        database.firestore()
            .collection('profile')
            .doc(id)
            .update({
                name: profile.profile_name,
                hours_per_days: profile.daily_hours,
                days_per_week: profile.days_per_week,
                vacations_per_year: profile.vacations_per_year,
                monthly_budget: profile.monthly_budget,
                avatar: profile.profile_avatar
            })
    }
}
