<?
header("Content-Type: text/html; charset=utf-8");

include './dbconn.php';

echo $_GET["userName"];
echo $_GET["id"];
echo $_GET["pw"];

$userName = $_GET["userName"];
$id = $_GET["id"];
$pw = $_GET["pw"];

$sql = "INSERT into user_info (id, username, password) values ('$id', '$userName', '$pw')";
mysqli_query($conn, $sql);
mysqli_close($conn);
?>