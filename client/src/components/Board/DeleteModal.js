import React, { useState } from 'react';
import ModalForm2 from './ModalForm2';
import s from "./Modal.css"


const DeleteModal = (props) => {

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => { // 모달창 열기 함수
        setModalOpen(true);
    };
    const closeModal = () => { // 모달창 닫기 함수
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <button  
            /* 앞선 닉네임값 입력, 중복확인 아이디값 입력, 중복확인 pw입력이 된경우에만 버튼 활성화 */
                className={s.button1} onClick={openModal}>문의사항 삭제</button> {/* 이후 props로 받은 signUp함수 호출 */}
            {/* header 부분에 텍스트를 입력한다,  */}

            <ModalForm2 open={modalOpen} close={closeModal} header="문의사항 삭제 완료"> 
                {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
                {props.resultText}
                
            </ModalForm2>
        </React.Fragment>
    )
}

export default DeleteModal