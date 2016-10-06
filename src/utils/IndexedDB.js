import AddTodo from '../containers/AddTodo'

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

var request = window.indexedDB.open("testDB", 2);

 var db;
/*   console.log("Error opening DB", event);
 };
 request.onupgradeneeded = function(event){
   console.log("Upgrading");

 };
 request.onsuccess = function(event){
   console.log("Success opening DB");
   db = event.target.result;
 }

// Добавление объекта в ObjectStore
 var transaction = db.transaction(["students"],"readwrite");
 transaction.oncomplete = function(event) {
   console.log("Success");
 };
 transaction.onerror = function(event) {
   console.log("Error");
 };
 var store = transaction.objectStore("students");
 store.add({rollNo: rollNo, name: name});


// Удаление данных из ObjectStore

 db.transaction(["students"],"readwrite").objectStore("students").delete(rollNo);

// Доступ к объекту данных через ключ ObjectStore
var request = db.transaction(["students"],"readwrite").objectStore("students").get(rollNo);
request.onsuccess = function(event){

// Обновление(редактирование данных) объекта

   var transaction = db.transaction(["students"],"readwrite");
   var objectStore = transaction.objectStore("students");
   var request = objectStore.get(rollNo);
   request.onsuccess = function(event){
     console.log("Updating : "+request.result.name + " to " + name);
     request.result.name = name; objectStore.put(request.result);
   };
*/
var request =  indexedDB.open("Todos1");
request.onupgradeneeded = function() {
    var db = request.result;
    var store = db.createObjectStore("Todo", {keyPath: "date"});
    var titleIndex = store.createIndex("by_title", "title", {unique: true});

  //var title = document.getElementByClassName(toDoInput).value;
  store.put({title: "wash the dishes",  date: 123456});
  store.put({title: "read the book",  date: 234567});
  store.put({title: "clean the room",  date: 345678});
  store.put({title: "clean the ",  date: 345679});
  store.put({title: "clean room",  date: 345688});

  var transaction = db.transaction(["read"], "alima");
};
request.onsuccess = function() {
    var db = request.result;

};
