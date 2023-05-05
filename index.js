const tasks = [];
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
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
  checkBox.classList.add('checkBox');
  listElement.append(checkBox);

  //удалаем параграф нет задач
  textNoTasks.remove();

  //очищаем форму
  form.reset();

  //делаем активной кнопку очистки списка задач
  buttonClean.removeAttribute('disabled');
}

//ивентлистенер на сабмит формы
form.addEventListener('submit', (event) => {
	event.preventDefault();
  updateTaskList();
});


//создаем функцию для очистка списка задач
let cleanTaskList = () => {
  //очищаем массив
  tasks.length = 0;

  //очищаем список задач
  listArea.innerHTML = '';

  //делаем неактивной кнопку очистки списка задач
  buttonClean.setAttribute('disabled', true);

  //показываем параграф нет задач
  listArea.append(textNoTasks);
}

//ивентлистенер на кнопку очистки списка задач
buttonClean.addEventListener('click', cleanTaskList);




