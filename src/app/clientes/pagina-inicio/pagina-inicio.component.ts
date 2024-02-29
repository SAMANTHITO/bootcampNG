import { Component } from '@angular/core';
import { IClientes } from '../interfaces/clientes';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  nuevo:IClientes={
    nombre:'',
    credito:0
  };
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
  agregar(){
    //console.log(this.nuevo);
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    if(this.nuevo.credito === null){
      return;
    }
    this.clientes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      credito:0
    }
  }
}
