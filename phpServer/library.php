<?
header('Content-Type: application/json'); //해당 파일을 json파일이라고 알리는 역할
header('Access-Control-Allow-Origin: *');

echo '['; //json파일 형식 맞추기위함
include './dbconn.php';

$sql = "SELECT * FROM library";
$result = mysqli_query($conn, $sql); // 쿼리 결과값을
$row = mysqli_fetch_array($result); // $row 변수에 관계형 배열로 저장, 해당 내장함수로 결과를 불러올 시 한줄 씩 불러온다!

// json_encode시 한글 깨짐 현상을 방지하기 위한 커스텀 함수
function han ($s) { return reset(json_decode('{"s":"'.$s.'"}')); } 
function to_han ($str) { return preg_replace('/(\\\u[a-f0-9]+)+/e','han("$0")',$str); }

//json파일 형태의 key-value 형식으로 표현하기 위해 다음과 같이 선언, array는 내장함수
$list_array = array('도서관명' => $row['library_name'], '주소' => $row['addr'], '운영시간' => $row['operating_time'], '휴일' => $row['closed_day'],
'전화번호' => $row['tel'],'홈페이지' => $row['url'] ,'위도' => $row['latitude'], '경도' => $row['longitude']);

$result_array = to_han(json_encode($list_array)); // 해당테이블의 맨윗줄의 값을 이미 가져와서
echo $result_array; //출력, json_encode는 key-value값으로 맞춰느느 역할 정도만 한다.

while($row = mysqli_fetch_array($result)){ // fetch함수로 $result(쿼리값)의 값을 차례대로 불러와서 false인 경우 while문 탈출
    $list_array = array('도서관명' => $row['library_name'], '주소' => $row['addr'], '운영시간' => $row['operating_time'], '휴일' => $row['closed_day'],
    '전화번호' => $row['tel'],'홈페이지' => $row['url'] ,'위도' => $row['latitude'], '경도' => $row['longitude']);

    $result_array = to_han(json_encode($list_array));
    
    if ($row != null) { //json파일 형식을 맞춰주기 위함
        echo ','.$result_array;
    }
}
echo ']'; // json파일 형식으로 맞춰주기 위함
?>