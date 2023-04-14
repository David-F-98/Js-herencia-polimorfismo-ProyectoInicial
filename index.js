/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Gerente } from './Empleados/Gerente.js';
import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './Sistemaautenticacion.js';



//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez' , '12345613', 100000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente = new Gerente('Pedro Rivas', '23242', 12000);
gerente.asignarClave('0000');
console.log(SistemaAutenticacion.login(gerente,'0000'));

//const director = new Director('Elena Moreno', '963258', 15000);

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente,'1111'));
