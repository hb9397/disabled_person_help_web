<?
// ampsetup에서는 mysql에서 사용하고자하는 data값이 한글인 경우에 my.ini 파일 편집이 필요하며, 해당 php버전에서만 그런것인지는 몰라도 컬럼명은 영어만 인식.
// 해당 파일에서 sql로 뽑고 가공한 것을 echo와 조건문, 반복문을 이용해 json파일 형식에 맞춘다.
header('Content-Type: application/json');    
header("Access-Control-Allow-Origin: *"); //cors정책 

echo '[';
include './dbconn.php';

$sql = "SELECT * FROM electric_wc_cs"; //사용할 sql문 변수
$result = mysqli_query($conn, $sql); //db접근 정보와 sql을 날려가져온 값을 해당 변수에 저장
$row = mysqli_fetch_array($result);



// json파일을 한글로 변환할때 유니코드로 바뀌는 현상을 php 5.2이하에선 아래와 같은 custom 함수를 만들어서 사용한다. 
//그 이상버전에서는 json_encode('변환할 값', 특정옵션)과 같은 형태로 간단하게 교체가 가능하다
function han ($s) { return reset(json_decode('{"s":"'.$s.'"}')); } 
function to_han ($str) { return preg_replace('/(\\\u[a-f0-9]+)+/e','han("$0")',$str); }  

// json파일형태인 key-value로 매칭하기위해 다음과 같이 배열관계 변경
$list_array = array('시설명' => $row['facility_name'],
    '시도명' => $row['city_name'], '시군구명' => $row['county_name'], '시군구코드' => $row['county_code'], '소재지도로명주소' => $row['road_name-addr'],
    '소재지지번주소' => $row['land_num_addr'], '위도' => $row['latitude'], '경도' => $row['longitude'], '설치장소명' => $row['location_info'], 
    '평일운영시작시각' => $row['weekday_start'], '평일운영종료시각' => $row['weekday_end'], '토요일운영시작시각' => $row['sat_start'], 
    '토요일운영종료시각' => $row['sat_end'], '공휴일운영시작시각' => $row['holiday_start'], '공휴일운영종료시각' => $row['holiday_end'], 
    '동시사용가능대수' => $row['num_simultaneous_use'], '공기주입가능여부' => $row['air_injection_availity'], '휴대폰충전가능여부' => $row['cell_phone_chargeability'], 
    '관리시설명' => $row['management_institution_name'], '관리시설전화번호' => $row['management_institution_tel'], 'No' => $row['no']);

$result_array = to_han(json_encode($list_array));
echo $result_array; // 맨 처음값은 출력시키고

// php에서는 row = ...을 실행 시켰을 때 해당 식이 null이거나 false일때가지 while문을 작동시킨다.
// null = false로 인식하기 때문이다, 또한 row는 mysqli_fetch_array를 통해서 가져오는 db파일들이다
// while문 없이 row[칼럼명]을 출력하면 순서대로 하나씩 출력되는 것을 기억할 것

while ($row = mysqli_fetch_array($result)) { 
    $list_array = array('시설명' => $row['facility_name'],
    '시도명' => $row['city_name'], '시군구명' => $row['county_name'], '시군구코드' => $row['county_code'], '소재지도로명주소' => $row['road_name-addr'],
    '소재지지번주소' => $row['land_num_addr'], '위도' => $row['latitude'], '경도' => $row['longitude'], '설치장소명' => $row['location_info'], 
    '평일운영시작시각' => $row['weekday_start'], '평일운영종료시각' => $row['weekday_end'], '토요일운영시작시각' => $row['sat_start'], 
    '토요일운영종료시각' => $row['sat_end'], '공휴일운영시작시각' => $row['holiday_start'], '공휴일운영종료시각' => $row['holiday_end'], 
    '동시사용가능대수' => $row['num_simultaneous_use'], '공기주입가능여부' => $row['air_injection_availity'], '휴대폰충전가능여부' => $row['cell_phone_chargeability'], 
    '관리시설명' => $row['management_institution_name'], '관리시설전화번호' => $row['management_institution_tel'], 'No' => $row['no']);

    $result_array = to_han(json_encode($list_array));

    if ($row != null){ // 맨 처음 값 이후의 값들은 ,을 추가 출력하여서 json 파일 형식에 맞춘다.
        echo ','.$result_array;
    }
    
}
echo ']';
?>