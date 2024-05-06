import  { Request, Response } from 'express'
export default function getProject(app){
    app.get('/', (req: Request, res: Response) => {
        res.send  ("You are on the Mystifolie project !");
    });
}


