import { Component } from '@angular/core';
import { IClientes } from '../interfaces/clientes';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  clientes:IClientes[]=[
    {
      nombre:'Alfonso',
    credito:2566
    },
    {
      nombre:'josue',
    credito:1578
    }
  ]

  agregarNuevoCliente(cliente:IClientes){
    this.clientes.push(cliente);
  }
}
