import { useEffect, useState, } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios';
import { Table } from 'react-bootstrap'
import BoardPreview from './BoardPreview';



function Board() {

  // 입력 버튼을 누르면 빈 배열안에 내용을 추가함
  // 버튼을 눌렀을 때 viewContent라는 배열 안에 movieContent라는 객체를 복사해서 concat 해준다음 그 내용으로 변경 해줌
  const [boards, setBoards] = useState([]);
  const history = useHistory();

  function writeBoard(e){
    e.preventDefault();
    if(sessionStorage.getItem('user_id')!==null){
        history.push({
            pathname:'/wirteboard'
        })
    }else{
        alert("로그인 후 사용가능합니다.")
        history.push({
            pathname:'/login'
        })
    }   
}

  useEffect(() => {
    Axios.get('http://127.0.0.1:80/disabled_person_help_web/phpserver/s_board.php').then((response) => {
      setBoards(response.data);
    })
  }, [boards])

  return (
    <div className=''>
      <h1>문의 사항</h1>
      <Link to='/wirteboard'>
        <button onClick={writeBoard}>글 쓰기</button>
      </Link>
      <Table className='' striped hover size="sm">
        <thead>
          <tr>
            <th className=''>제목</th>
            {/* <th className={s.content}>내용</th> */}
            <th className=''>작성자</th>
          </tr>
        </thead>
        <tbody>
          {boards ? boards.map(c => {
            return (<BoardPreview
              title={c.title}
              content={c.content}
              writer={c.username}>
            </BoardPreview>)
          }) :
            <tr>
              <td>
                게시글 조회불가
              </td>
            </tr>}
        </tbody>
      </Table>
    </div>
  );
}

export default Board