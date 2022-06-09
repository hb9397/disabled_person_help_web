import React, { useState } from 'react';
import ModalForm from './ModalForm';
import s from "../css/Board.module.css"


const BoardModal = (props) => {

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => { // 모달창 열기 함수
        props.writeBoard();
        console.log(sessionStorage.getItem("user_name"))
        console.log(props)
        setModalOpen(true);
    };
    const closeModal = () => { // 모달창 닫기 함수
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <button disabled={!(props.inputTitle && props.inputContent)}  
            /* 앞선 닉네임값 입력, 중복확인 아이디값 입력, 중복확인 pw입력이 된경우에만 버튼 활성화 */
                className={s.btn} onClick={openModal}>문의사항 등록</button> {/* 이후 props로 받은 signUp함수 호출 */}
            {/* header 부분에 텍스트를 입력한다,  */}

            <ModalForm open={modalOpen} close={closeModal} header="문의사항 등록 성공"> 
                {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
                {props.resultText}
                
            </ModalForm>
        </React.Fragment>
    )
}

export default BoardModal