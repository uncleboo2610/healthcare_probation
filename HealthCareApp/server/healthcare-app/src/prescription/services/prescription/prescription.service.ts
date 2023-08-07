import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalReport } from 'src/entities/medical-report.entity';
import { Patient } from 'src/entities/patient.entity';
import { PrescriptionDetail } from 'src/entities/prescription-detail.entity';
import { Prescription } from 'src/entities/prescription.entity';
import { PrescriptionDetailParams } from 'src/prescription/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PrescriptionService {

    constructor(
        @InjectRepository(Prescription) private prescriptionRepository: Repository<Prescription>,
        @InjectRepository(PrescriptionDetail) private prescriptionDetailRepository: Repository<PrescriptionDetail>,
        @InjectRepository(Patient) private patientRepository: Repository<Patient>,
        @InjectRepository(MedicalReport) private medicalReportRepository: Repository<MedicalReport>,
    ) {}

    getPrescriptions() {
        return this.prescriptionRepository.find({ relations: ['prescriptionDetail.drug', 'patient'] });
    }

    getPrescriptionById(id: number) {
        return this.prescriptionRepository.findOne({ 
            where: {id: id},
            relations: ['prescriptionDetail.drug', 'patient']
        });
    }

    getPrescriptionDetails() {
        return this.prescriptionDetailRepository.find({ relations: ['drug', 'prescription'] });
    }

    async createPrescription(
        patientId: string,
        medicalReportId: string
    ) {
        const patient = await this.patientRepository.findOneBy({ id: patientId });
        const medicalReport = await this.medicalReportRepository.findOneBy({ id: medicalReportId });

        if (!patient || !medicalReport) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        };

        const newPrescription = this.prescriptionRepository.create({
            medicalReport,
            patient,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        return this.prescriptionRepository.save(newPrescription);
    }

    async createPrescriptionDetail(prescriptionDetailData: PrescriptionDetailParams, prescriptionId: number, drugId: number) {
        const prescription = await this.prescriptionRepository.findOneBy({ id: prescriptionId });
        const drug = await this.prescriptionRepository.findOneBy({ id: drugId })
            const newPrescriptionDetail = this.prescriptionDetailRepository.create({
                ...prescriptionDetailData,
                prescription,
                drug,
            });
        return this.prescriptionDetailRepository.save(newPrescriptionDetail);
    }
}
