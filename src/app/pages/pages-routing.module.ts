import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { TransferenciaCompletaComponent } from './transferencia-completa/transferencia-completa.component';
import { loginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'transferencias-recibidas',
    component: TransferenciasRecibidasComponent,
  },
  {
    path: 'transferencias-enviadas',
    component: TransferenciasEnviadasComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'nueva-transferencia',
    component: NuevaTransferenciaComponent,
    canActivate: [loginGuard]
  },
  {
    path:'mi-cuenta',
    component: MiCuentaComponent,
    canActivate: [loginGuard]
  },
  // {
  //   path:"transferencia-completa",
  //   component: TransferenciaCompletaComponent,
  //   canActivate: [loginGuard]
  // },
  {
    path:"transferencia-completa/:id",
    component: TransferenciaCompletaComponent,
    canActivate: [loginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
