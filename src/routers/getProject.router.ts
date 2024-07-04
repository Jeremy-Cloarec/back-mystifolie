import  { Request, Response } from 'express'
export default function getProject(app){
    app.get('/', (req: Request, res: Response) => {
        res.send  ("Welcome, you are on the Mystifolie project !");
    });
}


