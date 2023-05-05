const tasks = [];
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const buttonAdd = document.getElementById('btnadd');
const listArea = document.getElementById('listarea');
const textNoTasks = document.getElementById('notasks');
const buttonClean = document.getElementById('btnclean');

// функция для обновления списка задач
let updateTaskList = () => {
  //присваиваем переменную для задачи, введенной в инпут
  let task = taskInput.value;
  //добавляем задачу в массив
	tasks.push(task);

  //объявляем переменную для последней в массиве задачи 
  let lastTask = tasks.slice(-1);

  //создаем див для элемента списка задач
  let listElement = document.createElement('div');
  listArea.append(listElement);
  listElement.classList.add('listElement');

  //создаем параграф с текстом задачи
  const taskText = document.createElement('p');
  taskText.classList.add('tasktext');
  taskText.textContent = lastTask;
  listElement.append(taskText);

  //создаем чекбокс
  const checkBox = document.createElement('input');
  checkBox.type = "checkbox";
  listElement.append(checkBox);

  //удалаем параграф нет задач
  textNoTasks.remove();

  //очищаем форму
  form.reset();
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
  updateTaskList();
});



