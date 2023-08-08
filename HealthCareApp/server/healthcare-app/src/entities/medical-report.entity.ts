import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Patient } from "./patient.entity";
import { Staff } from "./staff.entity";

@Entity('medical_report')
export class MedicalReport {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    reExaminationDate: Date;

    @Column()
    diagnostic: string;

    @ManyToOne(() => Patient, (patient) => patient.medicalReport)
    patient: Patient;

    @ManyToOne(() => Staff, (staff) => staff.medicalReport)
    staff: Staff;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}