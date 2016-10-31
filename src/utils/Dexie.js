import Dexie from "dexie"
//import ul from '../components/TodoList'
import input from '../containers/AddTodo'

let db = new Dexie("Todo");

function databaseOpen(callback){
  var version = 1;
  var request = indexedDB.open('todos',version);

  request.onsuccess = function(e) {
    db = e.target.result;
    callback();
  };
  request.onerror = databaseError;
}

function databaseError(e) {
  console.error('An IndexedDb error has occurred', e)
}


db.version(1).stores({
  items: "id, input.value"
});

db.open();

export default db;

/*
(function() {
  var db = new Dexie("todos-dexie");
  //var input = document.querySelector('input');
  //var ul = document.querySelector('ul');
  document.body.addEventListener('toDoBtn', onSubmit);
  document.body.addEventListener('toDoBtn', onClick);

  db.version(1).stores({ todo: '_id' })
  db.open()
    .then(refreshView);

  function onClick(e) {
    e.preventDefault();
    if (e.target.hasAttribute('id')) {
      db.todo.where('_id').equals(e.target.getAttribute('id')).delete()
        .then(refreshView);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    db.todo.put({ text: input.value, _id: String(Date.now()) })
      .then(function() {
        input.value = '';
      })
      .then(refreshView);
  }

  function refreshView() {
    return db.todo.toArray()
      .then(renderAllTodos);
  }

  function renderAllTodos(todos) {
    var html = '';
    todos.forEach(function(todo) {
      html += todoToHtml(todo);
    });
    ul.innerHTML = html;
  }

  function todoToHtml(todo) {
    return '<li><button id="'+todo._id+'">delete</button>'+todo.text+'</li>';
  }
}());*/
