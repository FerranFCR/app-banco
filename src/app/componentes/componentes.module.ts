import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaTransferenciasComponent } from './tabla-transferencias/tabla-transferencias.component';
import { RouterModule } from '@angular/router';



@NgModule({
  //componentes que pertenecen al modulo
  declarations: [
    TablaTransferenciasComponent
  ],
  //cosas que ncesitamos en este modilo
  imports: [
    CommonModule,
    RouterModule,
  ],
  //cosas declaradas en el modulo que se pueden usar fuera
  exports: [
    TablaTransferenciasComponent
  ]
})
export class ComponentesModule { }
