/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { cuentaNomina } from './Cuentas/CuentaNomina.js';
import { Gerente } from './Empleados/Gerente.js';
import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez' , '12345613');
const gerente = new Gerente('Pedro Rivas', '23242');
const director = new Director('Elena Moreno', '963258');

console.log(empleado);
console.log(gerente);
console.log(director);