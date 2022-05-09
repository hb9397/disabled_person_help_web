/*global kakao*/
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Data from './components/Data/Data';
import Facilities from './components/Facilities';
import Name from './components/Head/Name';
import MapSet from './components/MapSet';
import TodoModal from './components/TodoModal';
import title_logo from './image/question.png'

function App() {
  const [lat, setLat] = useState(37.365264512305174); //위도  
  const [lng, setLng] = useState(127.10676860117488); //경도
  

  const [name, setName] = useState("강서구 장애인 시설") //

  const [isLibrary, setIsLibrary] = useState(false)
  const [isChair, setIsChair] = useState(false)
  const [isLive, setIsLive] = useState(false)
  const [isTour, setIsTour] = useState(false)
  

  const [isShowLibraryData, setIsShowLibraryData] = useState(false);
  const [isShowChairData, setIsShowChairData] = useState(false);
  const [isShowLiveData, setIsShowLiveData] = useState(false)
  const [isShowTourData, setIsShowTourData] = useState(false)
  //의자 데이터 전달용 변수 electricChair => data
  
  const [locate, setLocate] = useState([]);
  const [chairData, setChairData] = useState();
  const [liveData, setLiveData] = useState();
  const [tourData, setTourData] = useState();


  const [showModal, setShowModal] = useState(false)


  useEffect(()=>{
  },[lat,lng])

  function openModal(){
    setShowModal(true)
  }
  function closeModal(){
    setShowModal(false)
  }






  return (
    <div className='app'>
    <table>
      <thead>
        <tr>
          <td> <div><h3 className='title'>ㅤ<img onClick={openModal} src={title_logo} style={{width:"30px", height:"30px", marginRight:"10px",marginTop : "-10px" }}/>장애인 시설 찾기</h3><h4 className='how'>그림을 누르면 사용법이 나와요!</h4></div></td>
          {showModal ? <TodoModal openModal={openModal} closeModal={closeModal}></TodoModal> : null}
          
        </tr>
      </thead>
      <tbody>
      <tr>
          <td><Name name={name}></Name></td>
          <td></td>
        </tr>
        <tr>
          <td className='facilities'><Facilities setName={setName}isTour={isTour} setIsTour={setIsTour} isShowTourData={isShowTourData} setIsShowTourData={setIsShowTourData} setTourData={setTourData} setLiveData={setLiveData} isShowLiveData={isShowLiveData} setIsShowLiveData={setIsShowLiveData} isLive={isLive} setIsLive={setIsLive} isChair={isChair} setIsChair={setIsChair} isLibrary={isLibrary} setIsLibrary={setIsLibrary}setChairData={setChairData} setIsShowChairData={setIsShowChairData} setIsShowLibraryData={setIsShowLibraryData} setLat={setLat} setLng={setLng} locate={locate} setLocate={setLocate}></Facilities>
          </td>     
          <td></td>
          <td><MapSet lat={lat} lng={lng}></MapSet></td><td></td>
          <td className='data'><Data tourData={tourData} isShowTourData={isShowTourData} liveData={liveData} isShowLiveData={isShowLiveData} chairData={chairData} isShowChairData={isShowChairData} isShowLibraryData={isShowLibraryData} locate={locate}></Data></td>
        </tr>
        <tr>
          <td></td>
        <td></td>     
        </tr> 
      </tbody>
    
    </table>
    </div>
  );
}
export default App;

//css수정, DB 위도 경도 없는 데이터 수정, 반응형 웹, 부가기능, 서버 배포, 분석보고서 
