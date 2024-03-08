export default function getProject(app){
    app.get('/', (req, res) => {
        res.send("You are on the Mystifolie project !");
    });
}
