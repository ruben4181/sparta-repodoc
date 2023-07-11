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
    name: 'Contrato y/o carta de intención',
    filename: 'contrato',
    vigencia: true,
  },
  {
    position: 2,
    name: 'Informe de supervisión',
    filename: 'informe_supervision',
    vigencia: true,
  },
  {
    position: 3,
    name: 'Acta de evaluación y seguimiento (ajuste de NT modalidades PP y PGP)',
    filename: 'acta_evaluacion',
    vigencia: true,
  },
  {
    position: 4,
    name: 'Oficios de notificación (requerimiento, terminación)',
    filename: 'oficios_notificacion',
    vigencia: true,
  },
  {
    position: 5,
    name: 'Cotización',
    filename: 'cotizacion',
    vigencia: true,
  },
  {
    position: 6,
    name: 'Anexos del contrato',
    filename: 'anexos',
    vigencia: true,
  },
];

@Component({
  selector: 'app-soporcontratos',
  templateUrl: './soporcontratos.component.html',
  styleUrls: ['./soporcontratos.component.scss'],
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
export class SoporcontratosComponent {
  displayedColumns: string[] = ['position', 'name', 'files'];
  dataSource = ELEMENT_DATA;
}
