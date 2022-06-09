<?
header("Content-Type: text/html; charset=utf-8");

include './dbconn.php';

echo $_GET["UserName"];
echo $_GET["ID"];
echo $_GET["PW"];

$userName = $_GET["UserName"];
$id = $_GET["ID"];
$pw = $_GET["PW"];

$sql = "INSERT into user_info (id, username, password) values ('$ID', '$UserName', '$PW')";
mysqli_query($conn, $sql);
mysqli_close($conn);
?>


