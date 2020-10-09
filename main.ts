import "reflect-metadata";
import { Client } from "./Client";
import { TestService } from "./TestService";
import { container } from "tsyringe";
import * as express from "express";
import database from "./db";

container.register("SuperService", {
    useClass: TestService
});

class Main {
    public app: express.Application;
    private _db: database = new database();


    constructor() {
        this.app = express();
        this._db.createConnection();
        this.routers();
    }

    routers() {
        const client = container.resolve(Client);

        this.app.route("/").get(async (req, res) => {
            console.log(client.getAll());

            res.send(await client.getAll());
        });
    }
}

export default new Main();