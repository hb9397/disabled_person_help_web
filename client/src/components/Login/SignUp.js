import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpModal from './SignUpModal';
import h from "../css/test.module.css"

function SignUp() {
    // 전역변수 const로 선언한 useState나 변수는 스크립트에서 발생하는 이벤트로 setUseState()로 상태를 변경하여도 초기값이 설정 되어 있기때문에 이벤트
    // 종료시 다시 초기값으로 초기화 된다 -> 함수 내부에 fetch문 data에 대해서 if문으로 하여 다른 조건값(bool)을 변경하기 위한 경우 부적절하다.
    // fetch문의 data에 대하여 다른 함수나 이벤트의 발동조건 상태(boolean)값을 변경하는 경우 해당 fetch문을 수행하는 함수 내부에 지역변수나, useState를 
    // 사용한다.

    const [inputId, setInputId] = useState(''); //사용자 입력용 ID
    const [inputPw, setInputPW] = useState(''); //사용자 입력용 PW
    const [inputUserName, setInputUserName] = useState(''); //사용자 입력용 사용자이름

    const [id, setId] = useState(''); //php 전달용 ID
    const [pw, setPW] = useState(''); //php 전달용 PW
    const [userName, setUserName] = useState(''); //php 전달용 사용자이름

    const [idOk, setIdOk] = useState(false); // id중복확인 버튼을 눌러서 중복이 되었는지 안되었는지 여부
    const [nameOk, setNameOk] = useState(false); // 닉네임 중복확인 버튼을 눌러서 중복이 되었는지 안되었는지 여부

    function handleUserName(e) {
        e.preventDefault();
        setInputUserName(e.target.value)
        console.log(e.target.value)
    }

    function handleID(e) {
        e.preventDefault();
        setInputId(e.target.value)
    }

    function handlePW(e) {
        e.preventDefault();
        setInputPW(e.target.value)
    }

    function checkID() {
        var ok
        if (!(inputId === "" || null || false) && nameOk) {
            fetch("http://localhost/disabled_person_help_web/phpServer/user_info.php")
                .then((res) => (res.json()))
                .then((data) => {
                    for (var i = 0; i < data.length; i++) {
                        if (String(inputId) === String(data[i].UserID)) {

                            alert("이미 존재하는 ID 입니다.")
                            setIdOk(false)
                            console.log(idOk)
                            window.location.reload()
                            break
                        }
                        else {
                            ok = true
                        }
                    }
                    if (ok) {
                        alert("사용가능한 ID 입니다.")
                        setIdOk(true)
                        setId(inputId)
                    }
                })
        }
    }

    function checkName() {
        var ok
        if (!(inputUserName === "" || null || false)) {
            fetch("http://localhost/disabled_person_help_web/phpServer/user_info.php")
                .then((res) => (res.json()))
                .then((data) => {
                    for (var i = 0; i < data.length; i++) {
                        if (String(inputUserName) === String(data[i].UserName)) {
                            alert("이미 존재하는 닉네임 입니다.")
                            ok = false
                            window.location.reload();
                            break
                        }
                        else {
                            ok = true
                        }
                    }
                    if (ok) {
                        alert("사용가능한 닉네임 입니다.")
                        setNameOk(true)
                        setUserName(inputUserName)
                    }
                })
        }
    }

    var [modalHeader, setMoHeader] = useState('');
    var [modalResult, setMoResult] = useState('');
    function signUp() {
        if (!(inputPw === null || false || "")) {
            setPW(inputPw)
            setMoHeader("회원가입 성공")
            setMoResult("회원가입에 성공하였습니다, 로그인 페이지로 이동합니다.\n로그인 후 문의사항을 남겨주세요.")
        }
    }

    return (
        <div className="registerpage">
            <div className="registeration">
                <h1>회원가입</h1>
                <div className=''>
                    {/* <button onClick={dd}>dd</button> */}
                    <label for="" className=''>닉네임</label><br />
                    <input type='text' value={inputUserName} onChange={handleUserName} className='' />
                    <button disabled={!(inputUserName)} onClick={checkName}>중복확인</button> {/* 닉네임 입력시 중복확인 버튼 활성화 */}

                </div>

                <div className=''>
                    <label for="" className=''>아이디</label><br />
                    {/* 닉네임입력, 닉네임 중복확인시 input활성화 */}
                    <input disabled={!(inputUserName && nameOk)} value={inputId} onChange={handleID} className='' />
                    {/* 닉네임입력, 닉네임 중복확인, 아이디값 입력시 버튼 활성화 */}
                    <button disabled={!(inputUserName && nameOk && inputId)} onClick={checkID}>중복확인</button>

                </div>

                <div className=''>
                <label for="" className=''>비밀번호</label><br/>
                    {/* 닉네임입력, 닉네임 중복확인, 아이디값 입력, 아이디 중복확인시 input 활성화 */}
                    <input type='password' disabled={!(inputUserName && nameOk && inputId && idOk)} value={inputPw} onChange={handlePW} className='' /><br/>
                </div>

                {/* form 태그의 action의 주소로 GET형태의 메서드로 하여 각 name에 해당되는 value값을 보낸다.
                    하지만  target을 iframe으로 하여 페이지 이동을 막아서 값만 전달하고 회원가입 이후에 바로 로그인 주소로 가는 
                    함수나 Link를 걸면 값이 php로 넘어가지 않아서 커스텀 모달창을 한번 거친후에 다시 login주소로 이동하게 한다. */}
                <form name='form' method='GET' action='http://localhost/disabled_person_help_web/phpServer/sign_up.php' target='target'>

                    {/* 전달할 값들을 노출시키지 않기 위해서 hidden속성을 적용 */}
                    <textarea name='UserName' value={userName} className={h.hidden}></textarea>
                    <textarea name='ID' value={id} className={h.hidden}></textarea>
                    <textarea name='PW' value={pw} className={h.hidden}></textarea>

                    <iframe title='test' id='target' name='target' className={h.hidden}></iframe> {/* form 태그 페이지 전환 방지 */}

                    <SignUpModal
                        header={modalHeader} result={modalResult}
                        userName={userName} nameOk={nameOk} id={id} idOk={idOk} inputPw={inputPw}
                        signUp={signUp}>
                    </SignUpModal>
                </form>
                <Link to='/'>
                    <button className=''>취   소</button>
                </Link>

            </div>
        </div>
    )
}

export default SignUp;