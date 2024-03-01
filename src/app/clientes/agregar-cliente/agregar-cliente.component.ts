import { Component, EventEmitter, Output } from '@angular/core';
import { IClientes } from '../interfaces/clientes';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {
  nuevo:IClientes={
    nombre:'',
    credito:0
  };

  @Output()
  onNuevoCliente:EventEmitter<IClientes> = new EventEmitter();

  agregar(){
    //console.log(this.nuevo);
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    if(this.nuevo.credito === null){
      return;
    }

    this.onNuevoCliente.emit(this.nuevo);
    //this.clientes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      credito:0
    }
  }
}
