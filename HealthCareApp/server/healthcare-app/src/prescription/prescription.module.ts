import { Module } from '@nestjs/common';
import { PrescriptionController } from './controllers/prescription/prescription.controller';
import { PrescriptionService } from './services/prescription/prescription.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prescription } from 'src/entities/prescription.entity';
import { PrescriptionDetail } from 'src/entities/prescription-detail.entity';
import { Drug } from 'src/entities/drug.entity';
import { Patient } from 'src/entities/patient.entity';
import { MedicalReport } from 'src/entities/medical-report.entity';
import { TypePrescription } from 'src/entities/type-prescription.entity';
import { PharmaceuticalWarehouse } from 'src/entities/pharmaceutical-warehouse.entity';
import { PharmaceuticalWarehouseService } from 'src/pharmaceutical-warehouse/services/pharmaceutical-warehouse/pharmaceutical-warehouse.service';
import { DrugService } from 'src/drug/services/drug/drug.service';
import { TypeDrug } from 'src/entities/type-drug.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Prescription, 
    PrescriptionDetail, 
    Drug, 
    Patient, 
    MedicalReport, 
    TypePrescription, 
    PharmaceuticalWarehouse, 
    TypeDrug
  ])],
  controllers: [PrescriptionController],
  providers: [PrescriptionService, PharmaceuticalWarehouseService, DrugService]
})
export class PrescriptionModule {}
