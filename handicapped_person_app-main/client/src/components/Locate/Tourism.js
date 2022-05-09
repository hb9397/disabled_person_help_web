/*global kakao*/
import React from 'react'
import { useState,useEffect } from 'react'

const Tourism = (props) => {
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

    function geocode(data){
      new kakao.maps.services.Geocoder().addressSearch(`${data}`, function(results,status){
          if(status === kakao.maps.services.Status.OK){
              props.setLat(results[0].y)
              props.setLng(results[0].x)
          }
      })
  }
  const tourData=()=>{
    const result = [];
    if(data.length===undefined){
        console.log('대기')
    }else{
        for(let i=0; i<data.length; i++){
            result.push(<><button className='btn' key={i} onClick={()=>{
                props.setTourData(data[i]);  
                showData();
                geocode(data[i].idtourism_addr)

            }
            }>{data[i].idtourism_name}</button><br/><br/></>)
        }   
    }
    return result
}
function showData(){
    props.setIsShowTourData(true)
}
  return (
    <div>
        {isDelay ? <>{tourData()}</>:null}
    </div>
  )
}

export default Tourism