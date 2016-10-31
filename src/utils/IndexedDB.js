import AddTodo from '../containers/AddTodo'

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

var request = window.indexedDB.open("testDB", 2);

 //-- Информация о таблицах
function storeInfo()
{
	//-- Читаем таблицы
	var request = indexedDB.open(database);
	//-- Если база данных не создана
	request.onupgradeneeded = request.onsuccess = function(event)
	{
		//-- Чтение
		var db = event.target.result;
		storeNames = db.objectStoreNames;
		version = db.version;
		db.close();
	};
}

//-- Если таблица НЕ найдена, продолжаем
// переменная tablename-название таблицы
if(!storeNames.contains(tablename))
{
	//-- Увиличиваем версию базы данных для возможности обновления
  //ее обязательно нужно изменить,чтобы сработало событие onupgradeneeded
	version++;
	//-- Открываем базу данных
	indexedDB.open(database, version).onupgradeneeded = function(event)
	{
		var db = event.target.result;
		var store = db.createObjectStore(tablename, {keyPath: 'idnum'});
		//-- Создаём индыксы
		store.createIndex('title', 'title');
		store.createIndex('value', 'value');
		//-- Обновляем количество таблиц
		storeNames = db.objectStoreNames;
		//-- Закрываем соединение
		db.close();
	};
}

//-- Простое чтение данных,
//открываем
var request = indexedDB.open(database);
//-- Продолжаем
request.onsuccess = function(event)
{
	//-- База данных
	db = event.target.result;
	//-- ЕСЛИ ТАБЛИЦЫ НЕ СОЗДАНЫ, выводим
	if(db.objectStoreNames.length === 0)
	{
		db.close();
		return;
	}
	//-- ЧТЕНИЕ ВСЕХ КАТЕГОРИЙ
	var tablename = prefix + 'category';
	//-- Открыаем курсор через транзакцию
	var request = db.transaction(tablename, "readonly").objectStore(tablename).openCursor();
	//-- Просмотр результатов построчно
	request.onsuccess = indexeddb_fetch_assoc;
	//-- Функция вызавается раз на строку и по завершению
	function indexeddb_fetch_assoc(event)
	{
		//-- Строка с данными
		var cursor = event.target.result;
		//-- Данные ещё есть
		if(cursor)
		{
			//-- Работа с данными
			categories[cursor.key] = [cursor.value.title, cursor.value.round, cursor.value.how];
			//-- Переход на следующую строку
			cursor.continue();
		}
		//-- Данные закончились и завершение чтения
		else
		{
			//-- ЛЮБЫЕ ДЕЙСТВИЯ или закрытие базы данных
			db.close();
		}
	}
};

//-- Удаление базы данных
function removeDB()
{
	indexedDB.deleteDatabase(database);
}

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
/*
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
*/
