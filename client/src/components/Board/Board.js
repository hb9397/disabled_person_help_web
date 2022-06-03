import ReactHtmlParser from 'html-react-parser';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';

function Board() {

  // 입력 버튼을 누르면 빈 배열안에 내용을 추가함
  // 버튼을 눌렀을 때 viewContent라는 배열 안에 movieContent라는 객체를 복사해서 concat 해준다음 그 내용으로 변경 해줌
  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    Axios.get('http://127.0.0.1:80/disabled_person_help_web/phpserver/board.php').then((response) => {
      setViewContent(response.data);
    })
  }, [viewContent])

  return (
    <div className="Board">
      <h1>게시판</h1>
      <Link to='/wirteboard'>
        <button>글쓰기</button>
      </Link>

      <div className='board'>
        {/* 입력 버튼을 눌렀을 때 새로운 내용을 map 함수를 이용해 추가한다. */}
        {viewContent.map(element =>
          <div>
            <p>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</p>

            <h2>{element.title}</h2>
            <div>
              {ReactHtmlParser(element.content)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Board