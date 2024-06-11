import { Request, Response } from 'express';
export declare const ActivityController: {
    getAll: (req: Request, res: Response) => Promise<void>;
    get: (req: Request, res: Response) => Promise<void>;
    post: (req: Request, res: Response) => Promise<void>;
    put: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
};
