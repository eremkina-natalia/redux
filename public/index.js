/*var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

var request = indexedDB.open("myBase", 1);

const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

function connectDB(f){
	var request = indexedDB.open("myBase", 1);
	request.onerror = function(err){
		console.log(err);
	};
	request.onsuccess = function(){
		// При успешном открытии вызвали коллбэк передав ему объект БД
		f(request.result);
    console.log("Подключилось");
	}
	request.onupgradeneeded = function(e){
		// Если БД еще не существует, то создаем хранилище объектов.
		e.currentTarget.result.createObjectStore("myObjectStore", { keyPath: "key" });
    console.log("Подключилось bbb");
		e.createIndex("name", "name", { unique: false });
		e.createIndex("email", "email", { unique: false});

		e.add(name: "sergey");

		connectDB(f);

	}
};
*/

console.log(localStorage.getItem('myCat'));

$(document).ready(function(){

$('.toDoBtn').hover(function(){
    var a= $('.toDoInput').val();
 localStorage.setItem('Todo', a);
}, function(){

});

});
