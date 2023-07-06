import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent {
  cliente: any = null;
  ordenante: any = null;
  feedback: any = null;
  nuevaTransferencia: any = {
    clienteOrdenante: {
      id: null
    },
    clienteBeneficiario: {
       id: null
    },
    importe: 0,
    concepto: "",
  }
  

  constructor(private clienteService: ClienteService, private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.ordenante = this.clienteService.leerSesion();
    this.cliente = this.clienteService.leerSesion();
  }

  Beneficiario: number | null = null;
  Importe: number = 0;
  Concepto: string = "";

  enviarTransferencia() {
    if(!this.ordenante){
      return;
    }
    this.nuevaTransferencia.clienteOrdenante.id = this.ordenante.id;
    this.transferenciaService.crearTransferencia(this.nuevaTransferencia).subscribe(trasnferenciaGuardada => {
      this.feedback="Transferencia enviada";
      console.log({trasnferenciaGuardada})
    },
    (error)=>this.feedback ="Error al enviar la transferencia"
    
    )
  }
}
