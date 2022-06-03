import { useState } from 'react'
import { Link } from 'react-router-dom'

function WriteBoard() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function handleTitle(e) {
    e.preventDefault();
    setTitle(e.target.value)
  }

  function handleContent(e) {
    e.preventDefault();
    setContent(e.target.value);
  }

/*   function test() {
    document.getElementById('title').value = title
    document.getElementById('content').value = content
  } */

  return (
    <div className="">
      <div className="">
        <h1>게시글 쓰기</h1>
        <form name='form' method='GET' action='http://localhost/disabled_person_help_web/phpServer/ud_board.php'>
          <div className='' >
            <div className=''>
              <label for="" className=''>제목</label>
              <input type='text' name='title' value={title} onChange={handleTitle} className=''></input>
            </div>
          </div>

          <div className='' >
            <div className=''>
              <label for="" className=''>문의내용</label>
              <input type='text' name='content' value={content} onChange={handleContent} className=''></input>
            </div>
          </div>

          <div className=''>
            <button className=''>등록</button>
            <Link to='/board'>
              <button className=''>취소</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WriteBoard