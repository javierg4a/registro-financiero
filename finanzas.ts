// src/finanzas.ts

import * as readlineSync from 'readline-sync';

const tasks: string[] = []; // Lista de Ingresos
const tasks1: string[] = []; // Lista de Gastos

const showMenu = () => {
  console.log('\n1. Agregar Ingresos');
  console.log('2. Lista de Ingresos');
  console.log('3. Agregar Gastos');
  console.log('4. Lista de Gastos');
  console.log('5. Salir');
};

const startApp = () => {
  console.log('Registro de Ingresos y Gastos mensuales');

  while (true) {
    showMenu();

    const choice = readlineSync.question('Ingrese el numero de la accion que desea registrar: ');

    switch (choice) {
      case '1':
        const task = readlineSync.question('Ingrese nuevo Ingreso: ');
        tasks.push(task);
        console.log('Ingreso agregado Correctamente.');
        break;

      case '2':
        if (tasks.length === 0) {
          console.log('No hay Ingresos en la lista.');
        } else {
          console.log('Lista de Ingresos:');
          tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
          });
        }
        break;

      case '3':
        const task1 = readlineSync.question('Ingrese nuevo Gasto: ');
        tasks1.push(task1);
        console.log('Gasto agregado Correctamente.');
        break;
  
      case '4':
        if (tasks1.length === 0) {
          console.log('No hay Gastos en la lista.');
        } else {
          console.log('Lista de Gastos:');
          tasks1.forEach((task1, index) => {
            console.log(`${index + 1}. ${task1}`);
          });
        }
        break;

      case '5':
        console.log('Gracias por usar El gestor de Registro de Ingresos y Gastos mensuales, una manera organizada de llevar control de tus finanzas. Espero verte pronto');
        process.exit(0);

      default:
        console.log('Upss opción no valida. Inténtelo nuevamente :) ');
    }
  }
};

startApp();
