import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { MedicalReport } from './entities/medical-report.entity';
import { PatientsModule } from './patients/patients.module';
import { MedicalReportModule } from './medical-report/medical-report.module';
import { DepartmentModule } from './department/department.module';
import { ReceivingCardModule } from './receiving-card/receiving-card.module';
import { StaffModule } from './staff/staff.module';
import { Staff } from './entities/staff.entity';
import { GatewayModule } from './gateway/gateway.module';
import { TypeServiceModule } from './type-service/type-service.module';
import { StaffTicket } from './entities/staff-ticket.entity';
import { ParaclinicalModule } from './paraclinical/paraclinical.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'test12345',
      database: 'healthcare',
      entities: [Staff, Patient, MedicalReport],
      synchronize: true,
      autoLoadEntities: true,
      options: {
        encrypt: true,
      },
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
      },
  }), PatientsModule, MedicalReportModule, StaffModule, DepartmentModule, ReceivingCardModule, StaffModule, GatewayModule, TypeServiceModule, StaffTicket, ParaclinicalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
