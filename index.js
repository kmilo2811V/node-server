const fs = require('fs');
const path = require('path');

const tasks = [];

function addTask(task) {
  tasks.push(task);
}

function deleteTask(index) {
  tasks.splice(index, 1);
}

function completeTask(index) {
  tasks[index].completed = true;
}

function listTasks() {
  console.log('Lista de tareas:');
  for (const task of tasks) {
    console.log(`- ${task.description}`);
  }
}

function chooseAction() {
  console.log('¿Qué quieres hacer?');
  console.log('1. Añadir una tarea');
  console.log('2. Eliminar una tarea');
  console.log('3. Completar una tarea');
  console.log('4. Listar las tareas');
  console.log('5. Salir');

  const choice = Number(readline.question('Elige una opción: '));

  switch (choice) {
    case 1:
      addTask(readline.question('Introduce la descripción de la tarea: '));
      break;
    case 2:
      deleteTask(Number(readline.question('Introduce el índice de la tarea que quieres eliminar: ')));
      break;
    case 3:
      completeTask(Number(readline.question('Introduce el índice de la tarea que quieres completar: ')));
      break;
    case 4:
      listTasks();
      break;
    case 5:
      process.exit();
      break;
    default:
      console.log('Opción no válida');
  }
}

chooseAction();
