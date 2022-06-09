import { useState } from 'react'
import { Link } from 'react-router-dom'
import h from '../css/test.module.css'
import BoardModal from './BoardModal'
import s from '../css/Board.module.css';

function WriteBoard() {
  const [inputTitle, setInputTitle] = useState("")
  // 사용자 입력 제목, 문의사항 내용

  const [inputContent, setInputContent] = useState("")

  const [resultText, setResultText] = useState("")

  function handleTitle(e) {
    e.preventDefault();
    setInputTitle(e.target.value)
  }

  function handleContent(e) {
    e.preventDefault();
    setInputContent(e.target.value);
  }

  function writeBoard() {
    if (!inputTitle) {
      alert("문의사항의 제목을 입력해주세요.")
    }
    else if (!inputContent) {
      alert("문의하실 내용을 입력해주세요.")
    }
    else if (inputTitle && inputContent) {
      setResultText("게시글 등록이 완료되었습니다.")

    }
    else {
      alert("입력란들을 모두 확인해주세요.")
    }
  }

  return (
    <div className={s.board}>
      <div className={s.createBoard}>
        <h1>문의사항</h1>

        <div className={s.createBody} >
          <div className={s.createInputs}>
            <label for="" className={s.createLabel}>제목</label>
            <input className={s.createInput} type='text' name='Title' defaultValue={inputTitle} onChange={handleTitle}></input>
          </div>
        </div>

        <div className={s.createInputs} >
          <div className=''>
            <label for="" className={s.createLabel}>문의내용</label>
            <textarea className={s.createInputText} type='text' name='Content' defaultValue={inputContent} onChange={handleContent} rows="10" ></textarea>
          </div>
        </div>

        <form name='form' method='GET' action='http://localhost/disabled_person_help_web/phpServer/c_board.php' target='target'>
          {/* target은 페이지 전환 방지용으로 사용 */}
          <textarea name='UserName' value={sessionStorage.getItem('user_name')} className={h.hidden}></textarea>
          <textarea name='title' value={inputTitle} className={h.hidden}></textarea>
          <textarea name='content' value={inputContent} className={h.hidden}></textarea>

          <iframe id='target' name='target' className={h.hidden}></iframe> {/* form 태그 페이지 전환 방지 */}
          
          <div className={s.btnArea}>
            <BoardModal writeBoard={writeBoard}
              inputTitle={inputTitle} inputContent={inputContent} resultText={resultText}>
            </BoardModal>

            <Link to='/board'> {/* Link로 바로 다른 주소로 연결하면 취소버튼을 눌렀을 때, form태그의 action주소로 수행 X */}
              <button className={s.btn}>취소</button>
            </Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default WriteBoard