import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from '../test.module.css'

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
    console.log(sessionStorage.getItem('user_name'))
  }

/*   function test() {
    document.getElementById('title').value = title
    document.getElementById('content').value = content
  } */

  return (
    <div className="">
      <div className="">
        <h1>게시글 쓰기</h1>
        <form name='form' method='GET' action='http://localhost/disabled_person_help_web/phpServer/u_board.php' target='target'> 
        {/* target은 페이지 전환 방지용으로 사용 */}
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

          <div className={s.hidden}>
            <input type='text' name='writer' value={sessionStorage.getItem('user_name')}></input>
          </div>      
          
          <div className=''>
            <button className=''>등록</button>
            <Link to='/board'>
              <button className=''>취소</button>
            </Link>
          </div>
        </form>

        <iframe id='target' name='target' className={s.hidden}></iframe> {/* form 태그 페이지 전환 방지 */}

      </div>
    </div>
  )
}

export default WriteBoard