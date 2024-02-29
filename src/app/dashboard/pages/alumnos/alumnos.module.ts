import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoDetalleComponent } from './pages/alumno-detalle/alumno-detalle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AlumnosComponent,
    AbmAlumnosComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    PipesModule,
    DirectivesModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlumnosComponent
      },
      {
        path: ':id',
        component: AlumnoDetalleComponent,
      },
    ]),
  ],
  exports: [
    AlumnosComponent
  ]
})
export class AlumnosModule { }
