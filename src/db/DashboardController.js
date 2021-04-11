const Profile = require("../models/Profile");
const Freelas = require("../models/Freelas");
const FreelaUtils = require('../utils/FreelaUtils')

module.exports = {
  async index (_req, res) {
    const jobs = await Freelas.get();

    const profile = await Profile.get();

    const statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length
    }
      
    let freeHours = await Profile.get().hoursPerDay

    const updatedJobs = jobs.map((job) => {
      const remaining = FreelaUtils.getRemainingDays(job);

      const status = remaining <= 0 ? "done" : "progress";

      statusCount[status]+=1

      status==='progress'&&(freeHours-=job.dailyHours)

      return {
        ...job,
        remaining,
        status,
        budget: FreelaUtils.calculateBudget(job.totalHours, profile.valuePerHour),
      };
    });

    return res.render("index", { jobs: updatedJobs, profile, statusCount, freeHours });
  }
}