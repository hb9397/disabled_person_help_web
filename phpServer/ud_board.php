<?
header("Content-Type: text/html; charset=utf-8");

include './dbconn.php';

echo $_GET["title"];
echo $_GET["content"];
echo $_GET['writer'];


$title = $_GET["title"];
$content = $_GET["content"];
$writer = $_GET["writer"];

$sql = "INSERT into simpleboard (title, content, username) values ('$title', '$content','$writer')";
mysqli_query($conn, $sql);
mysqli_close($conn);
?>