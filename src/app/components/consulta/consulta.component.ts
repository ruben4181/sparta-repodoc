import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

export interface PeriodicElement {
  position: number;
  name: string;
  fase: string;
  aplicacion: string;
  requisito: string;
  fecha_vencimiento: string;
  estado_documento: string;
  acciones: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Registro Único Tributario (RUT)',
    fase: 'precontractual',
    aplicacion: 'Prestador',
    requisito: 'Generales',
    fecha_vencimiento: '2023-08-05',
    estado_documento: 'PRONTO A VENCER',
    acciones: 'true',
  },
  {
    position: 2,
    name: 'Hoja de vida',
    fase: 'precontractual',
    aplicacion: 'Prestador',
    requisito: 'Especiales',
    fecha_vencimiento: '2023-06-05',
    estado_documento: 'VENCIDO',
    acciones: 'true',
  },
  {
    position: 3,
    name: 'Acto Administrativo',
    fase: 'precontractual',
    aplicacion: 'Prestador',
    requisito: 'Especiales',
    fecha_vencimiento: '2023-12-30',
    estado_documento: 'VIGENTE',
    acciones: 'true',
  },
];

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
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
export class ConsultaComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'fase',
    'aplicacion',
    'requisito',
    'fecha_vencimiento',
    'estado_documento',
    'acciones',
  ];
  dataSource = ELEMENT_DATA;
}
