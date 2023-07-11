import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

export interface PeriodicElement {
  name: string;
  position: number;
  filename: string;
  vigencia: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hoja de Vida',
    filename: 'hv',
    vigencia: true,
  },
  {
    position: 2,
    name: 'Certificado de Existencia y Representación Legal',
    filename: 'existencia_repre_legal',
    vigencia: true,
  },
  {
    position: 3,
    name: 'Acuerdo/Ordenanza',
    filename: 'acuerdo_ordenanza',
    vigencia: true,
  },
  {
    position: 4,
    name: 'Acto Administrativo',
    filename: 'acto_administrativo',
    vigencia: true,
  },
  {
    position: 5,
    name: 'Acta de Posesión del Representante Legal',
    filename: 'acta_posesion',
    vigencia: true,
  },
  {
    position: 6,
    name: 'Copia de SOAT vigente',
    filename: 'soat',
    vigencia: true,
  },
  {
    position: 7,
    name: 'Tarjeta de Propiedad',
    filename: 'tarjeta_propiedad',
    vigencia: true,
  },
  {
    position: 8,
    name: 'Revisión técnico – mecánica vigente',
    filename: 'tecnico_mecanica',
    vigencia: true,
  },
  {
    position: 0,
    name: 'Póliza de Responsabilidad Civil contractual y Extracontractual de cada Vehículo',
    filename: 'poliza_vehiculo',
    vigencia: true,
  },
];

@Component({
  selector: 'app-req-especificos',
  templateUrl: './req-especificos.component.html',
  styleUrls: ['./req-especificos.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
})
export class ReqEspecificosComponent {
  displayedColumns: string[] = ['position', 'name', 'files', 'vigencias'];
  dataSource = ELEMENT_DATA;
}
