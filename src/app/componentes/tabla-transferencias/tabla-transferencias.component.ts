import { Component, Input } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-tabla-transferencias',
  templateUrl: './tabla-transferencias.component.html',
  styleUrls: ['./tabla-transferencias.component.css']
})
export class TablaTransferenciasComponent {

  cliente: any = null;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = this.clienteService.leerSesion();
  }
  @Input() transferencias: any[] = [];
  
}

