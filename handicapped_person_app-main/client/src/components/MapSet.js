/*global kakao*/
import React, { useState } from 'react'
import { useEffect } from 'react'
import Map from './Map'
//맵 띄우기
const MapSet = (props) => {
    useEffect(()=>{
       setState({center: {lat: props.lat, lng: props.lng}, isPanto: true})
    },[props])
    const [state, setState] = useState({
        center: {lat:props.lat, lng:props.lng},
        isPanto: true,
    })
    const [level, setLevel] = useState(3)
    
    function myLocate() {
        {
            navigator.geolocation.getCurrentPosition((position)=>{
                setState({ center: { lat: position.coords.latitude, lng: position.coords.longitude }, isPanto: true, })
            }
            )
        }
    }
    function showLarge(){
        setLevel(level-1)
    }
    function showSmall(){
        setLevel(level+1)
    }
    
    return (
        <div className='mapSet'>
            <Map
                center={state.center}
                isPanto={state.isPanto}
                level={level}
            ></Map>
            <button className='btn' onClick={myLocate}>내 위치</button> <br/><br/>
            <button className='btn' onClick={showLarge}>확대</button>
            <button className='btn' onClick={showSmall}>취소</button><br/><br/>
        </div>
    )
}

export default MapSet