import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  tituloAntiguo:string = 'Empleados Antiguos';
  tituloNuevo:string = 'Empleados nuevos';
  empleadosAntiguos:IEmpleado[]=[
    {
      nombres:'luisito',
      apellidos:'comunica',
      direccion:'ciudad de mexico',
      sueldo: 4000
    },
    {
      nombres:'vegueta',
      apellidos:'777',
      direccion:'barcelona',
      sueldo: 6000
    },
    {
      nombres:'auron',
      apellidos:'play',
      direccion:'españa',
      sueldo: 5000
    },
    {
      nombres:'ibai',
      apellidos:'llanos',
      direccion:'madrid',
      sueldo: 10000
    },
    {
      nombres:'mariana',
      apellidos:'perez',
      direccion:'mexico',
      sueldo: 7500
    }
  ];
 
  empleadosNuevos:IEmpleado[]=[
    {
      nombres:'fernan',
      apellidos:'floo',
      direccion:'el salvador',
      sueldo: 5000
    }
  ]
}
