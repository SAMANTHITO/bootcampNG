import { Component } from '@angular/core';
import { IClientes } from '../interfaces/clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  //aqui ya se esta inyectando el servicio
  constructor(){}

}
