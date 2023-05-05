const tasks = [];
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const buttonAdd = document.getElementById('btnadd');
const title = document.querySelector('h2');
const p = document.querySelector('p');
const buttonClean = document.getElementById('btnclean');

// функция для обновления списка задач
let updateTaskList = () => {
  //присваиваем переменную для задачи, введенной в инпут
  let task = taskInput.value;
  //добавляем задачу в массив
	tasks.push(task);
  tasks.forEach(function (task) {
    
  })
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
  updateTaskList();
});



