import { Component } from '@angular/core';
import {transferenciasEnviadas} from 'src/app/datos/transferencias-ejemplos';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent {

  cliente: any = null;
  transferencias: any[] = [];
 
  constructor(private clienteService: ClienteService, private transferenciaService: TransferenciaService) {
  }
  
  
  ngOnInit() {
    this.cliente = this.clienteService.leerSesion();
    this.cargarTransferencias()
  }
  
  cargarTransferencias() {
    const Ordenante = this.cliente
    this.transferenciaService.obtenerTransferenciasEnviadas(Ordenante.id).subscribe(
      (transferenciasCargadas: any) => {
        console.log({ transferenciasCargadas });
        this.transferencias = transferenciasCargadas;
      }
    );
  }
}
