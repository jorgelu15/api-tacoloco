import { Application, Request, Response } from "express";
import { Routes } from "./routes";

export class MainRoutes extends Routes {
    static readonly MAIN_ROUTE = "";

    constructor(private app: Application) {
        super(MainRoutes.MAIN_ROUTE);
        this.app.get(this.route, this.defaultRoute);
    }

    private defaultRoute(req: Request, res: Response) {
        res.status(200).send({message: "OK"});
    }
}