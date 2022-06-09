<?
header("Content-Type: text/html; charset=utf-8");

include './dbconn.php';

$title = $_GET["title"];
$username = $_GET["writer"];

echo $title;
echo $username;

$sql = "DELETE FROM simpleboard WHERE title='$title' AND username='$username'";
mysqli_query($conn, $sql);

mysqli_close($conn);
