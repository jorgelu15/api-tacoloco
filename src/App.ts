import express, { Application } from "express";
import { Routes } from "./shared/routes/routes";
import { MainRoutes } from "./shared/routes/main.routes";
import { InvetarioRoutes } from "./features/Inventario/inventario.routes";

export class App {
    private app: Application;
    private port: number;

    private routes: Routes[];

    constructor(port: number, middlewares?: any[]) {
        console.log("port")
        this.app = express();
        this.port = port;
        this.middlewares(middlewares);


        this.routes = [
            new MainRoutes(this.app)
        ]
        new InvetarioRoutes(this.app)

    }

    private middlewares(middlewares?: any[]) {
        this.app.use(express.json());
        middlewares?.forEach((middleware: any) => {
            this.app.use(middleware);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("------------------------------------------");
            console.log(`Server listening on: http://locahost:${this.port}`);
            console.log("------------------------------------------");
        })
    }
}