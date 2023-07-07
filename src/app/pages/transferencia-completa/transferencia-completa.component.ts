import { Component, Input, OnInit} from '@angular/core';
import { transferenciasEnviadas, transferenciasRecibidas } from 'src/app/datos/transferencias-ejemplos';
import { ActivatedRoute, Params } from '@angular/router';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';


@Component({
  selector: 'app-transferencia-completa',
  templateUrl: './transferencia-completa.component.html',
  styleUrls: ['./transferencia-completa.component.css']
})
export class TransferenciaCompletaComponent  implements OnInit
 {
  @Input() transferencias: any = transferenciasEnviadas || transferenciasRecibidas;

  //transferenciaId: string | undefined;
  transferencia: any = null; // Asume que el tipo de la transferencia es "any" por simplicidad

  constructor(private transferenciaService: TransferenciaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const trasferenciaIdString = this.route.snapshot.paramMap.get('id');
    let transferenciaId;
    if(trasferenciaIdString){
      transferenciaId = parseInt(trasferenciaIdString);
      console.log({transferenciaId});
      this.transferenciaService.obtenerTransferenciaPorId(transferenciaId)
      .subscribe((transferencia)=>{
        console.log({transferencia})
        this.transferencia = transferencia;
      })
    }
   }
}

