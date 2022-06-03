<? // php파일 자체를 json파일 형식에 맞춘다.
header('Content-Type: application/json');    
header("Access-Control-Allow-Origin: *");

echo '['; // json파일 형식을 맞추기 위함
include './dbconn.php';

$sql = "SELECT * FROM swf"; //사용할 sql문 변수
$result = mysqli_query($conn, $sql); //db접근 정보와 sql을 날려가져온 값을 해당 변수에 저장
$row = mysqli_fetch_array($result);



// json파일을 한글로 변환할때 유니코드로 바뀌는 현상을 php 5.2이하에선 아래와 같은 custom 함수를 만들어서 사용한다. 
//그 이상버전에서는 json_encode('변환할 값', 특정옵션)과 같은 형태로 간단하게 교체가 가능하다
function han ($s) { return reset(json_decode('{"s":"'.$s.'"}')); } 
function to_han ($str) { return preg_replace('/(\\\u[a-f0-9]+)+/e','han("$0")',$str); }  

// json파일형태인 key-value로 매칭하기위해 다음과 같이 배열관계 변경
$list_array = array('시설명' => $row['facility_name'],
    '시군구명' => $row['county_name'], '시군구코드' => $row['county_code'], 
    '시설종류명_유형' => $row['facility_catergory_name'],
    '시설종류상세명_종류' => $row['facility_detailName_kinds'], '지역구구분' => $row['county_division'], 
    '시설장' => $row['facility_manager'], '시설주소' => $row['addr'], 
    'No' => $row['no']);

$result_array = to_han(json_encode($list_array));
echo $result_array; // 맨 처음값 출력 ==> json형식에 맞추기 위함

while ($row = mysqli_fetch_array($result)) { 
    $list_array = array('시설명' => $row['facility_name'],
    '시군구명' => $row['county_name'], '시군구코드' => $row['county_code'], 
    '시설종류명_유형' => $row['facility_catergory_name'],
    '시설종류상세명_종류' => $row['facility_detailName_kinds'], '지역구구분' => $row['county_division'], 
    '시설장' => $row['facility_manager'], '시설주소' => $row['addr'], 
    'No' => $row['no']);

    $result_array = to_han(json_encode($list_array));

    if ($row != null){ // 맨 처음 값 이후의 값들은 ,을 추가 출력하여서 json 파일 형식에 맞춘다.
        echo ','.$result_array;
    }
    
}
echo ']';
?>