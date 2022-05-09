import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Library = (props) => {

    const [isDelay, setIsDelay] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {

        if (props.locate === undefined) {
            console.log('대기')
        } else {
            setIsDelay(true)
            setData(props.locate)
        }

    }, [props])

    function showData() {
        props.setIsShowLibraryData(true)
    }

    const LibraryData = () => {
        const result = [];
        if (data.length === undefined) {
            console.log('대기')
        } else {
            for (let i = 0; i < data.length; i++) {
                result.push(<><button className='btn' key={i} onClick={() => { props.setLocate(data[i]); props.setLat(data[i].위도); props.setLng(data[i].경도); showData() }}>{data[i].도서관명}</button><br /><br /></>)
            }
        }
        return result
    }

    return (
        <div>
            <br />
            {isDelay ? <>{LibraryData()}</> : null}
        </div>
        /*  <>
           {isDelay ? <div><br/>{' '}
              <button className='btn' onClick={LibraryData}>{props.locate[0].도서관명}</button><br/>
           </div> : null}
             
         </>
  */
    )
}

export default Library