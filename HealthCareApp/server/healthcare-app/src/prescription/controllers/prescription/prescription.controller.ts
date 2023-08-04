import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrescriptionDetailDto, PrescriptionDto } from 'src/prescription/dtos/Prescription.dto';
import { PrescriptionService } from 'src/prescription/services/prescription/prescription.service';

@Controller('prescription')
export class PrescriptionController {

    constructor(
        private prescriptionService: PrescriptionService
    ) {}

    @Get('get-prescriptions')
    getPrescriptions() {
        return this.prescriptionService.getPrescriptions();
    }

    @Get('get-prescriptions-by-id')
    getPrescriptionById(
        @Body() id: number
    ) {
        return this.prescriptionService.getPrescriptionById(id);
    }

    @Get('get-prescription-details')
    getPrescriptionDetails() {
        return this.prescriptionService.getPrescriptionDetails();
    }

    @Post('create-prescription')
    createPrescription(
        @Body() prescriptionDto: PrescriptionDto
    ) {
        return this.prescriptionService.createPrescription(prescriptionDto);
    }

    @Post('create-prescription-detail')
    createPrescriptionDetail(
        @Body() prescriptionDetailDto: PrescriptionDetailDto
    ) {
        return this.prescriptionService.createPrescriptionDetail(prescriptionDetailDto, prescriptionDetailDto.prescriptionId, prescriptionDetailDto.drugId);
    }
}
