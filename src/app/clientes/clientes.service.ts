import { Injectable } from '@angular/core';
import { IClientes } from './interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private _clientes:IClientes[]=[]
  get clientes():IClientes[]{
    return this._clientes;
  }

  agregarCliente(cliente:IClientes){
    this._clientes.push(cliente);
    //almacenamiento de forma local y no se borre cuando se da refresh
    localStorage.setItem('cliente',JSON.stringify(this._clientes));
  }

  constructor() { 
    console.log('servicio inicializado');
    //leer el almacenamiento local
    this._clientes = JSON.parse(localStorage.getItem('cliente')!) || [];
  }
}
