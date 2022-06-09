import React from 'react';
import { useHistory } from 'react-router-dom';


//게시판 꺼내기
const BoardPreview = (props) => {

    const history = useHistory()
    
    function selectBoard(e){
        e.preventDefault();
        history.push({
            pathname:'/DetailContent',
            state: {props: props}
        })
    }
    
    return (
     <tr onClick={selectBoard}>
         <td>{props.title}</td>
         <td>{props.content}</td>
         <td>{props.writer}</td>
     </tr>  
    )
};

export default BoardPreview;