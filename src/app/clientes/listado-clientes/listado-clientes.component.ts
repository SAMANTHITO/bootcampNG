import { Component, Input } from '@angular/core';
import { IClientes } from '../interfaces/clientes';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {
  @Input()
  clientes:IClientes[]=[];
}
