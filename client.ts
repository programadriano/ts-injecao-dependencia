import { injectable, inject } from "tsyringe";
import { SuperService } from "./superService";

@injectable()
export class Client {
    constructor(@inject("SuperService") private service: SuperService) { }

    getAll() {
        return this.service.getAll();
    }
}