import React from 'react';
import { Button, Table } from 'react-bootstrap';
import BoardPreview from './BoardPreview';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from '../css/Board.module.css'
//-----------------CSS import--------------------//
//import s from '../../css/Board.module.css';

//내가 쓴 게시글들을 확인할 수 있도록 게시판을 변경
const MyBoard = () => {
    var myboard = []
    const [board, setBoard] = useState([])
    useEffect( () => {
     fetch('http://127.0.0.1:80/disabled_person_help_web/phpserver/s_board.php')
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            var len = Object.keys(data)
            console.log(len)
                for(var i = 0; i < data.length; i++){
                    if(String(data[i].유저이름) === sessionStorage.getItem('user_name') ){
                        myboard.push(data[i])
                    }
                }
            setBoard(myboard)
        })
      }, []) 

    return (
        <div className={s.board}>
            {/* 비로그인 시 처리 */}
            
            {sessionStorage.getItem('user_id') === null ? <div>{alert("로그인후 이용가능")}</div> :
                <div className={s.boardBody}>
                    <h1>내가 쓴 게시글</h1>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th className={s.title} >제목</th>
                                <th className={s.content}>내용</th>
                                <th className={s.writer}>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 내가 쓴 게시글을 map함수를 활용하여 하나씩 받아옴 */}
                            {board ? board.map(c => {
                                return (<BoardPreview
                                    writer={c.유저이름}
                                    title={c.Title}
                                    content={c.Content}>
                                </BoardPreview>
                                )
                            })
                             :
                                <tr>
                                    <td>
                                        게시글 조회불가
                                    </td>
                                </tr>}
                        </tbody>
                    </Table>
                </div>}
            <Link to="/board">
                <Button>뒤로가기</Button>
            </Link>
        </div>
    );
};

export default MyBoard;