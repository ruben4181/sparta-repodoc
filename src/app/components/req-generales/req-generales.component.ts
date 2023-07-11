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
    name: 'Registro Único Tributario (RUT)',
    filename: 'rut',
    vigencia: true,
  },
  {
    position: 2,
    name: 'Documento de Identidad del Representante Legal',
    filename: 'docrepresentantelegal',
    vigencia: true,
  },
  {
    position: 3,
    name: 'Modelo de prestacion de servicios de salud',
    filename: 'preservsalud',
    vigencia: true,
  },
  {
    position: 4,
    name: 'Habilitación Vigente',
    filename: 'habilitacion',
    vigencia: true,
  },
  {
    position: 5,
    name: 'Capacidad Instalada Disponible',
    filename: 'capacidadinstalada',
    vigencia: true,
  },
  {
    position: 6,
    name: 'Oferta de servicios y tecnologías en salud(portafilio de servicios)',
    filename: 'portafiolioservicios',
    vigencia: true,
  },
  {
    position: 7,
    name: 'Contratos, convenios y/o alianzas estratégicas',
    filename: 'contratos',
    vigencia: true,
  },
  { position: 8, name: 'Formato SARLAFT', filename: 'sarlaft', vigencia: true },
];

@Component({
  selector: 'app-req-generales',
  templateUrl: './req-generales.component.html',
  styleUrls: ['./req-generales.component.scss'],
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
export class ReqGeneralesComponent {
  displayedColumns: string[] = ['position', 'name', 'files', 'vigencias'];
  dataSource = ELEMENT_DATA;
}
