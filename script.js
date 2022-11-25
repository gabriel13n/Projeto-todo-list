const btn = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const deleteTask = document.getElementById('apaga-tudo');
const removeTaskfinished = document.getElementById('remover-finalizados');
const saveBtn = document.getElementById('salvar-tarefas');
const cima = document.getElementById('mover-cima');
const baixo = document.getElementById('mover-baixo');

function addTasks() {
  btn.addEventListener('click', function () {
    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    ol.appendChild(newTask);
    input.value = '';
  });
}

function changeBackgroundColorTask() {
  ol.addEventListener('click', function (e) {
    const tasks = document.querySelectorAll('li');
    for (task of tasks) {
      task.style.backgroundColor = 'white';
    }
    const itemClick = e.target;
    itemClick.style.backgroundColor = '#ede0d4';
  });
}

function changeStyleTask() {
  ol.addEventListener('dblclick', function (e) {
    const completedTask = e.target;
    if (completedTask.className === '') {
      completedTask.className = 'completed';
    } else if (completedTask.className.includes('completed')) {
      completedTask.className = '';
    }
  });
}

function deleteAllTask() {
  deleteTask.addEventListener('click', function () {
    const AllTask = document.querySelectorAll('li');
    for (task of AllTask) {
      task.remove('li');
    }
  });
}

function removeFinished() {
  removeTaskfinished.addEventListener('click', function () {
    const AllTask = document.querySelectorAll('li');
    for (task of AllTask) {
      if (task.className === 'completed') {
        task.remove('li');
      }
    }
  });
}

function saveTask() {
  localStorage.setItem('Tasks', ol.innerHTML);
}

function renderOnReload() {
  const AllTask = document.querySelectorAll('li');
  ol.innerHTML = localStorage.getItem('Tasks');
  for (let task of AllTask) {
    task.addEventListener('click', changeBackgroundColorTask);
    task.addEventListener('dblclick', changeStyleTask);
  }
}

function saveinStorage() {
  saveBtn.addEventListener('click', saveTask);
}

function upBtn() {
  cima.addEventListener('click', function () {
    let goUp;
    const AllTask = document.querySelectorAll('li');
    for (task of AllTask) {
      if (task.style.backgroundColor === 'rgb(237, 224, 212)') {
        goUp = task;
      }
    }
    if (goUp && goUp.previousElementSibling) {
      ol.insertBefore(goUp, goUp.previousElementSibling);
    }
  });
}

function downBtn() {
  baixo.addEventListener('click', function () {
    let goDown;
    const AllTask = document.querySelectorAll('li');
    for (task of AllTask) {
      if (task.style.backgroundColor === 'rgb(237, 224, 212)') {
        goDown = task;
      }
    }  
      if (goDown && goDown.nextElementSibling) {
        ol.insertBefore(goDown.nextElementSibling, goDown);
      }
  });
}

window.onload = function () {
  renderOnReload();
};

addTasks();
changeBackgroundColorTask();
changeStyleTask();
deleteAllTask();
removeFinished();
saveinStorage();
upBtn();
downBtn();


