const Activity = require('../../db/sequelize')

export default function findAllActivitie(app) {
    app.get('/mystifolie/activites', async (req, res) => {
        try {
            console.log(Activity);
            const activities = await Activity.findAll();
            console.log(activities.every(activity => activity instanceof Activity)); // true
            console.log("All activities:", JSON.stringify(activities, null, 2));
            res.json(activities); // Envoyez les activités en tant que réponse JSON
        } catch (error) {
            console.error("Error fetching activities:", error);
            res.status(500).json({ error: "An error occurred while fetching activities" });
        }
    });
}
