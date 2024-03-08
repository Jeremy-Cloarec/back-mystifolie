import {data} from '../../json/activities'

export default function findAllActivitie(app) {
    app.get('/mystifolie/activites', (req, res) => {
        res.json(data);
        console.log(data); 
    });
}