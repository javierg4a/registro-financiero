"use strict";
// src/finanzas.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const tasks = []; // Lista de Ingresos
const tasks1 = []; // Lista de Gastos
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
                }
                else {
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
                }
                else {
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
                console.log('Upss opcion no valida. Intentelo nuevamente :) ');
        }
    }
};
startApp();
