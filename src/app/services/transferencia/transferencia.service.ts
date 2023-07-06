import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }

  urlApi: string = "http://localhost:8080/transferencia";

  //traer todas las transferencia
  obtenerTransferencias() {
    return this.http.get(this.urlApi)
  }
  //traer una trasferencia por id
  obtenerTransferenciaPorId(id: number) {
    const url = `${this.urlApi}/${id}`
    return this.http.get(url)
}

  obtenerTransferenciasEnviadas(idOrdenante: number) {
    return this.http.get(this.urlApi + "/Ordenante/" + idOrdenante)
  }
  obtenerTransferenciasRecibidas(idBeneficiario: number) {
    return this.http.get(this.urlApi + "/Beneficiario/" + idBeneficiario)
  }
  //guardar transferencia
  crearTransferencia(transferencia: any) {
    return this.http.post(this.urlApi, transferencia)
  }
  //borrar una transferencia por id

 
}
