import Modal from 'react-modal'
import React from 'react'
import Qlogo from '../image/light.png'

Modal.setAppElement("#root")

const TodoModal = (props) => {
    return (
        <div className='modal'>
            <Modal
            isOpen={props.openModal}
            onRequestClose={props.closeModal}
            >
                <div className='modalItem'>
                <h3>사용법</h3>
                <h1>장애인 시설 찾기</h1>
                <h3>이 프로그램은 장애인 전용 위치 정보 서비스입니다.</h3>
                <h3>도서관, 휠체어 및 거주 시설 등등 여러 정보를 확인할 수 있어요</h3>
                <h3>정보를 클릭하면 우측 맵에 위치를 찍어주고 그에 대한 정보를 확인하실 수 있어요</h3>
                <h3>닫기 버튼을 누르고 한번 사용해봅시다!!</h3>
                
                <button onClick={props.closeModal}>닫기</button>
                </div>
            </Modal>
        </div>
    )
}

export default TodoModal