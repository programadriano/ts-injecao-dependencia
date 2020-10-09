import { NewsRepository } from "./repository/newsRepository";
import { SuperService } from "./SuperService";
export class TestService implements SuperService {
    async getAll() {
        return NewsRepository.find({});
    }

}