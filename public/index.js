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

	//	e.add(name: "sergey");

		connectDB(f);

	}
};
*/
/*
console.log(localStorage.getItem('myCat'));

$(document).ready(function(){

$('.toDoBtn').hover(function(){
    var a= $('.toDoInput').val();
 localStorage.setItem('Todo', a);
}, function(){

});

});*/

/*import localforage from 'redux-replicate-localforage';
import { theme } from './providers/index';

theme.replication = {
  reducerKeys: ['themeName'],
  replicator: localforage
};*/


var indexedDB 	  = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
	IDBTransaction  = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction,
	baseName 	  = "filesBase",
	storeName 	  = "filesStore";

function logerr(err){
	console.log(err);
}

function connectDB(f){
	var request = indexedDB.open(baseName, 1);
	request.onerror = logerr;
	request.onsuccess = function(){
		f(request.result);
	}
	request.onupgradeneeded = function(e){
		e.currentTarget.result.createObjectStore(storeName, { keyPath: "path" });
		connectDB(f);
	}
}

function getFile(file, f){
	connectDB(function(db){
		var request = db.transaction([storeName], "readonly").objectStore(storeName).get(file);
		request.onerror = logerr;
		request.onsuccess = function(){
			f(request.result ? request.result : -1);
		}
	});
}

function getStorage(f){
	connectDB(function(db){
		var rows = [],
			store = db.transaction([storeName], "readonly").objectStore(storeName);

		if(store.mozGetAll)
			store.mozGetAll().onsuccess = function(e){
				f(e.target.result);
			};
		else
			store.openCursor().onsuccess = function(e) {
				var cursor = e.target.result;
				if(cursor){
					rows.push(cursor.value);
					cursor.continue();
				}
				else {
					f(rows);
				}
			};
	});
}

function setFile(file){
	connectDB(function(db){
		var request = db.transaction([storeName], "readwrite").objectStore(storeName).put(file);
		request.onerror = logerr;
		request.onsuccess = function(){
			return request.result;
		}
	});
}

function delFile(file){
	connectDB(function(db){
		var request = db.transaction([storeName], "readwrite").objectStore(storeName).delete(file);
		request.onerror = logerr;
		request.onsuccess = function(){
			console.log("File delete from DB:", file);
		}
	});
}
