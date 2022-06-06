import React, { useState } from 'react';
import ModalForm from './ModalForm';
import s from "./Modal.css"

const SignUpModal = (props) => {

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => { // 모달창 열기 함수
        setModalOpen(true);
        props.signUp(); //모달 창 열 때, 비밀번호 입력 여부를 판단하고 실제 전달되는 비밀번호 값설정
    };
    const closeModal = () => { // 모달창 닫기 함수
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <button disabled={!(props.userName && props.nameOk && props.id && props.idOk && props.inputPw)}  
            /* 앞선 닉네임값 입력, 중복확인 아이디값 입력, 중복확인 pw입력이 된경우에만 버튼 활성화 */
                className={s.button1} onClick={openModal}>회원가입</button> {/* 이후 props로 받은 signUp함수 호출 */}
            {/* header 부분에 텍스트를 입력한다,  */}

            <ModalForm open={modalOpen} close={closeModal} header={props.header}> 
                {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
                {props.result}
            </ModalForm>
        </React.Fragment>
    )
}

export default SignUpModal