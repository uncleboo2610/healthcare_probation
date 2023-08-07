import { httpClient } from "../../../../core/http";
import { apiEndpoints } from "../../../../shared/config/api.config";

class PrescriptionService {
    getPrescriptions() {
        return httpClient.get(apiEndpoints.Prescription.getPrescription);
    }

    getPrescriptionById(data: any) {
        return httpClient.get(
            apiEndpoints.Prescription.getPrescriptionById,
            data,
        );
    }

    getPrescriptionDetails(id: any) {
        return httpClient.get(
            apiEndpoints.Prescription.getPrescriptionDetail,
            id
        );
    }

    createPrescription(data: any) {
        return httpClient.post(
            apiEndpoints.Prescription.createPrescription,
        );
    }

    createPrescriptionDetail(data: any) {
        return httpClient.post(
            apiEndpoints.Prescription.createPrescriptionDetail,
            data,
        );
    }
}

export const prescriptionService = new PrescriptionService();