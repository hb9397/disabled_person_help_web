import React from 'react'
import { useState,useEffect } from 'react'

//전동휠체어 버튼 표현
const ElectricChair = (props) => {
    const [isDelay, setIsDelay] = useState(false)
    const [data, setData] = useState()
    
    useEffect(() => {
        if(props.locate===undefined){
            console.log('대기')
        }else{
            setIsDelay(true)
            setData(props.locate)    
        }
    }, [props])

    const  electricChairData = ()=>{
        const result = [];
        if(data.length===undefined){
            console.log('대기')
        }else{
            for(let i=0; i<data.length; i++){
                result.push(<><button className='btn' key={i} onClick={()=>{props.setChairData(data[i]); props.setLat(data[i].위도); props.setLng(data[i].경도); showData(); console.log(data[i].소재지지번주소)}}>{data[i].시설명}</button><br/><br/></>)
            }   
        }
        return result         
    }
    function showData(){
        props.setIsShowChairData(true)
    }

  return (
    <div>
        <br/>
        {isDelay ? <>{electricChairData()}</>:null}
    </div>
  )
}


export default ElectricChair