import { httpClient } from "../../../core/http";
import { apiEndpoints } from "../../../shared/config/api.config";

class DrugService {
    getDrug() {
        return httpClient.get(apiEndpoints.Drug.GetDrug);
    }
    createDrug(data: any) {
        return httpClient.post(apiEndpoints.Drug.AddDrug, data);
    }
}

export const drugService = new DrugService();