import { data } from '../../json/activities'

export default function findActivitie(app) {
    app.get('/mystifolie/activities/:id', (req, res) => {
        const { id } = req.params;
        const user = data.find(user => user.user_id === id);

        if (user) {
            res.json(user);
            console.log(user);
        } 
    });
}
