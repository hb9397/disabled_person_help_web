import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'html-react-parser';
import Axios from 'axios';

function Board() {
  const [noticeContent, setNoticeContent] = useState({    // 입력 값 작업
    title: '',
    content: ''
  })

  // 입력 버튼을 누르면 빈 배열안에 내용을 추가함
  // 버튼을 눌렀을 때 viewContent라는 배열 안에 movieContent라는 객체를 복사해서 concat 해준다음 그 내용으로 변경 해줌
  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost/noticeboard/phpserver/server.php').then((response) => {
      setViewContent(response.data);
    })
  }, [viewContent])

  const print = () => {
    fetch('http://localhost/noticeboard/phpserver/server.php')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  const submitPost = () => {
    Axios.post('http://localhost:8000/api/insert', {
      title: noticeContent.title,
      content: noticeContent.content
    }).then(() => {
      alert('등록 완료!');
    })
  };

  const getValue = e => {   //이벤트가 발생하면 그 이벤트의 name과 value를 가지고 오는
    const { name, value } = e.target;
    setNoticeContent({    // noticeContent 의 내용을 복사해서 그 안에 name이라는 이름의 키의 값을 value로 바꿔 저장한다는 의미
      ...noticeContent,
      [name]: value
    })
    console.log(noticeContent);
  }

  return (
    <div className="App">
      <h1>게시판</h1>
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
      <div className='form-wrapper'>
        {/* name에는 title, value에 타이핑 하는 글씨가 입력됨 */}
        {/* 이제 이렇게 적히는 내용을 가지고 state의 내용을 변경해주면 됨 */}
        <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title' />

        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setNoticeContent({
              ...noticeContent,
              content: data
            })
            console.log(noticeContent);
          }}
          // onChange={(event, editor) => {
          //   const data = editor.getData();
          //   console.log({ event, editor, data });
          // }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />

      </div>
      <button
        className="submit-button"
        onClick={submitPost}>입력</button>
      <button onClick={print}>출력</button>
    </div>
  );
}

export default Board