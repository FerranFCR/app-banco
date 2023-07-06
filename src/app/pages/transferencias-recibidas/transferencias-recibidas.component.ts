import { Component } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias-ejemplos';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css']
})
export class TransferenciasRecibidasComponent {
  cliente: any = null;
  transferencias: any[] = [];
 
  constructor(private clienteService: ClienteService, private transferenciaService: TransferenciaService) {
  }
 ngOnInit() {
  this.cliente = this.clienteService.leerSesion();
  this.cargarTransferencias()
}

cargarTransferencias(){
  const Benficiario = this.cliente
  this.transferenciaService.obtenerTransferenciasRecibidas(Benficiario.id).subscribe(
    (transferenciasCargadas: any) => {
      console.log({ transferenciasCargadas });
      this.transferencias = transferenciasCargadas;
    }
  );
}
}

