export default function getProject(app){
    app.get('/mystifolie', (req, res) => {
        res.send("You are on the Mystifolie project !");
    });
}


