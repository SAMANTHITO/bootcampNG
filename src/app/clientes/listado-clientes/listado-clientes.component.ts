import { Component, Input } from '@angular/core';
import { IClientes } from '../interfaces/clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {
  
  //@Input()
  //clientes:IClientes[]=[];

  constructor(private clienteService:ClientesService){}

  get clientes(): IClientes[]{
    return this.clienteService.clientes;
  }
}
