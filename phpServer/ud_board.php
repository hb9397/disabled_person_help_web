<?
header("Content-Type: text/html; charset=utf-8");

include './dbconn.php';

echo $_GET["title"];
echo $_GET["content"];

$title = $_GET["title"];
$content = $_GET["content"];

$sql = "INSERT into simpleboard (title, content) values ('$title', '$content')";
mysqli_query($conn, $sql);
mysqli_close($conn);
?>