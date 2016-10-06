$connect = mysql_connect("localhost", "root", "root"); // Подключаемся
$select  = mysql_select_db("Todo", $connect); // к базе
$result  = mysql_query("SELECT * FROM users", $connect) // Делаем выборку
while ($data = mysql_fetch_row($result)) // Цикл пока есть в таблице данные
{
  echo ();
}
mysql_free_result($result);
mysql_close($connect);
