<?
header("Content-Type: text/html; charset=utf-8");

include './dbconn.php';

$title = $_GET["title"];
$content = $_GET["content"];
$username = $_GET["UserName"];

echo $title;
echo $content;
echo $username;

$sql = "INSERT into simpleboard (title, content, username) values ('$title', '$content','$username')";
mysqli_query($conn, $sql);
mysqli_close($conn);
?>

