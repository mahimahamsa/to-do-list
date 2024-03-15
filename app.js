
var todotasks = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = click;
function click() {
  todotasks.push(input.value);
  console.log(todotasks);
  input.value = "";
  taskList();
}

function taskList() {
  todolist.innerHTML = '';
  let fragment = document.createDocumentFragment();
  todotasks.forEach(function(task, index) {
    let listItem = document.createElement('li');
    let taskText = document.createTextNode(task);
    let editLink = document.createElement('a');
    editLink.href = '#';
    editLink.textContent = 'Edit';
    editLink.onclick = function() {
      editItem(index);
    };
    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = 'Delete ';
    deleteLink.onclick = function() {
      deleteItem(index);
    };
    listItem.appendChild(taskText);
    listItem.appendChild(editLink);
    listItem.appendChild(document.createTextNode(' '));
    listItem.appendChild(deleteLink);
    fragment.appendChild(listItem);
  });
  todolist.appendChild(fragment);
}
function deleteItem(i) {
  todotasks.splice(i, 1);
  taskList();
}

function editItem(i) {
  var newValue = prompt("Please insert your new value");
  todotasks.splice(i, 1, newValue);
  taskList();
}
