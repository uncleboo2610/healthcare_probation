import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'src/entities/department.entity';
import { Patient } from 'src/entities/patient.entity';
import { StaffTicket } from 'src/entities/staff-ticket.entity';
import { Staff } from 'src/entities/staff.entity';
import { StaffParams, StaffTicketParams } from 'src/staff/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class StaffService {

    constructor(
        @InjectRepository(Staff) private staffRepository: Repository<Staff>,
        @InjectRepository(Department) private departmentRepository: Repository<Department>,
        @InjectRepository(StaffTicket) private staffTicketRepository: Repository<StaffTicket>,
        @InjectRepository(Patient) private patientRepository: Repository<Patient>
    ) {}

    getStaffs() {
        return this.staffRepository.find({ relations: ['department'] });
    }

    getStaffTickets() {
        return this.staffTicketRepository.find();
    }

    async createStaff(staffDetails: StaffParams, departmentId: number) {
        const department = await this.departmentRepository.findOneBy({ id: departmentId });

        if(!department) {
            throw new BadRequestException('This department does not exist !!!');
        };

        const newStaff = this.staffRepository.create({
            ...staffDetails,
            department,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return this.staffRepository.save(newStaff);
    }

    async createStaffTicket(staffTicketParams: StaffTicketParams, patientId: string) {
        const patient = await this.patientRepository.findOneBy({ id: patientId });
        const newStaffTicket = this.staffTicketRepository.create({
            ...staffTicketParams,
            patient,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        return this.staffTicketRepository.save(newStaffTicket);
    }

    async updateStaff(
        id: string,
        staffDetails: StaffParams,
        departmentId: number
    ) {
        const department = await this.departmentRepository.findOneBy({ id: departmentId });

        return this.staffRepository.update({ id }, { ...staffDetails, updatedAt: new Date() });
    }

    deleteStaff(id: string) {
        return this.staffRepository.delete({ id });
    }
}
