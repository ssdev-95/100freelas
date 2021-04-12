import { database } from '../db/config'

interface ProfileData {
    id: string,
    name: string;
    daily_hours: number;
    weekly_days: number;
    annual_vacations: number;
    monthly_budget: number;
}

export const ProfileController = {
    get() {
        let profile
        database
            .collection('profile')
            .onSnapshot(snap => {
                profile = {
                    id: snap.docs[0].id,
                    name: snap.docs[0].data().name,
                    daily_hours: snap.docs[0].data().hours_per_day,
                    weekly_days: snap.docs[0].data().days_per_week,
                    annual_vacations: snap.docs[0].data().vacations_per_year,
                    monthly_budget: snap.docs[0].data().monthly_budget
                }
                console.log(profile)
            })
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
