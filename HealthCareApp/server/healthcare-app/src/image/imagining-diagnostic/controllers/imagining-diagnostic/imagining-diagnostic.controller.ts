import { Body, Controller, Get, Post } from '@nestjs/common';
import { ImaginingDiagnosticService } from '../../services/imagining-diagnostic/imagining-diagnostic.service';
import { ImaginingDiagnosticByIdDto, ImaginingDiagnosticDto } from '../../dtos/ImaginingDiagnostic';

@Controller('imagining-diagnostic')
export class ImaginingDiagnosticController {
    
    constructor(
        private imaginingDiagnosticService: ImaginingDiagnosticService
    ) {}

    @Get('get-imagining-diagnostic-images')
    getImaginingDiagnostic() {
        return this.imaginingDiagnosticService.getImaginingDiagnostic();
    }

    @Get('get-imagining-diagnostic-images-by-id')
    getImaginingDiagnosticByParaclinicalReportId(
        @Body() imaginingDiagnosticByIdDto: ImaginingDiagnosticByIdDto
    ) {
        return this.imaginingDiagnosticService.getImaginingDiagnosticByParaclinicalReportId(imaginingDiagnosticByIdDto.paraclinicalReportId);
    }

    @Post('create-imagining-diagnostic-image')
    createImaginingDiagnostic(
        @Body() imaginingDiagnosticDto: ImaginingDiagnosticDto
    ) {
        return this.imaginingDiagnosticService.createImaginingDiagnostic(imaginingDiagnosticDto.paraclinicalReportId, imaginingDiagnosticDto.imageUrl);
    }
}