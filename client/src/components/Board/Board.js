import { useEffect, useState, } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios';
import { Table } from 'react-bootstrap'
import BoardPreview from './BoardPreview';
import s from '../css/Board.module.css'




function Board() {

  // 입력 버튼을 누르면 빈 배열안에 내용을 추가함
  // 버튼을 눌렀을 때 viewContent라는 배열 안에 movieContent라는 객체를 복사해서 concat 해준다음 그 내용으로 변경 해줌
  const [boards, setBoards] = useState([]);

  const history = useHistory();

  function writeBoard(e) {
    e.preventDefault();
    if (sessionStorage.getItem('user_id') !== null) {
      history.push({
        pathname: '/writeboard'
      })
    } else {
      alert("로그인 후 사용가능합니다.")
      history.push({
        pathname: '/login'
      })
    }
  }

  useEffect(() => {
    Axios.get('http://127.0.0.1:80/disabled_person_help_web/phpserver/s_board.php')
      .then((response) => {
        setBoards(response.data);
      })
  }, [])



  return (
    <div className={s.board}>
      <h1>문의 사항</h1>
      {!(sessionStorage.getItem('user_id') === null)
        ? <div className={s.btnPlace}>
          <Link to='/writeboard/'>
            <button className={s.btnBoard} onClick={writeBoard}>문의사항 작성</button>
          </Link>
          <Link to='/myboard'>
            <button className={s.btnBoard}>나의 문의사항</button>
          </Link>
        </div>
        :
        <div className={s.btnPlace}>
          <Link to='/writeboard/'>
            <button className={s.btnBoard} onClick={writeBoard}>문의사항 작성</button>
          </Link>
        </div>
      }

      <div className={s.Ssearch}></div>
      <div className={s.boardBody}>
        <Table className={s.table} striped hover size="sm">
          <thead>
            <tr>
              <th className={s.title}>제목</th>
              <th className={s.content}>내용</th>
              <th className={s.writer}>작성자</th>
            </tr>
          </thead>
          <tbody>
            {boards ? boards.map(c => {
              return (<BoardPreview
                title={c.Title}
                content={c.Content}
                writer={c.유저이름}
              >
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
    </div>
  );
}

export default Board