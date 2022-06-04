import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import s from "../test.module.css"

function SignUp() {

    const [inputId, setInputId] = useState(''); //사용자 입력용 ID
    const [inputPw, setInputPW] = useState(''); //사용자 입력용 PW
    const [inputUserName, setInputUserName] = useState(''); //사용자 입력용 사용자이름

    const [id, setId] = useState(''); //php 전달용 ID
    const [pw, setPW] = useState(''); //php 전달용 PW
    const [userName, setUserName] = useState(''); //php 전달용 사용자이름

    const [idCheck, setIdCheck] = useState(true); // id중복 여부 저장
    const [nameCheck, setNameCheck] = useState(true); // 닉네임중복 여부 저장

    const [idOk, setIdOk] = useState(false); // id중복확인 버튼을 눌러서 중복이 되었는지 안되었는지 여부
    const [nameOk, setNameOk] = useState(false); // 닉네임 중복확인 버튼을 눌러서 중복이 되었는지 안되었는지 여부
    const [pwOk, setPwOk] = useState(false) // 비밀번호를 입력했는지 여부

    const history = useHistory();

    function handleUserName(e) {
        e.preventDefault();
        setInputUserName(e.target.value)
    }

    function handleID(e) {
        e.preventDefault();
        setInputId(e.target.value)
    }

    function handlePW(e) {
        e.preventDefault();
        setInputPW(e.target.value)
    }

    function checkID(e) {
        if (!(inputId === "" || null || false)) {
            fetch("http://localhost/disabled_person_help_web/phpServer/user_info.php")
                .then((res) => (res.json()))
                .then((data) => {
                    console.log(data)
                    for (var i = 0; i < data.length; i++) {
                        if (String(inputId) === String(data[i].UserID)) { // 자료형 통일해서 비교
                            setIdCheck(false)
                        }
                    }
                })
            if (nameCheck) {
                if (!idCheck) { // 이미 아이디가 존재해서 setIdCheck() => false인 경우
                    alert("이미 존재하는 아이디 입니다.")
                    window.location.reload();
                }
                else {
                    alert("사용가능한 아이디 입니다.")
                    setIdOk(true) // id 중복확인 해서 승인함
                    setId(inputId)
                }
            }
            else {
                alert("닉네임 중복체크를 해주세요")
            }
        }
        else {
            alert("아이디를 입력해 주세요")
        }
    }

    function checkName() {
        if (!(inputUserName === "" || null || false)) {
            fetch("http://localhost/disabled_person_help_web/phpServer/user_info.php")
                .then((res) => (res.json()))
                .then((data) => {
                    for (var i = 0; i < data.length; i++) {
                        if (String(inputUserName) === String(data[i].UserName)) {
                            setNameCheck(false)
                        }
                    }
                })
            if (!nameCheck) { 
                alert("이미 존재하는 닉네임 입니다.")
                window.location.reload();
            }
            else {
                alert("사용가능한 닉네임 입니다.")
                setNameOk(true) // 닉네임 중복확인 해서 승인함
                setUserName(inputUserName)
            }
        }
        else {
            alert("닉네임을 입력해 주세요")
        }
    }


    function signUp() { //중복확인후 중복확인을 모두 했다면 사용자 입력용 변수값을 php전달용 변수에 저장
        if (!idOk) {
            alert("아이디 중복확인을 해주세요.")
        }
        if (!pwOk) {
            alert("비밀번호를 입력해주세요.")
        }
        if (idOk && nameOk) {
            alert("회원가입이 완료되었습니다, 로그인 해주세요.")
        }
    }

    return (
        <div className="registerpage">
            <div className="registeration">
                <h1>회원가입</h1>
                <div className=''>
                    <label for="" className=''>닉네임</label><br />
                    <input type='text' onChange={handleUserName} className='' />
                    <button onClick={checkName}>중복확인</button>

                </div>

                <div className=''>
                    <label for="" className=''>아이디</label><br />
                    <input onChange={handleID} className='' />
                    <button onClick={checkID}>중복확인</button>

                </div>

                <div className=''>
                    <label for="" className=''>비밀번호</label><br />
                    <input type='text' onChange={handlePW} className='' />
                    <textarea name='pw' value={pw} className={s.hidden}></textarea>
                </div>

                <form name='form' method='GET' action='http://localhost/disabled_person_help_web/phpServer/sign_up.php' target='target'>
                    <textarea name='userName' value={userName} className={s.hidden}></textarea>
                    <textarea name='id' value={id} className={s.hidden}></textarea>
                    <textarea name='pw' value={pw} className={s.hidden}></textarea>
                    <iframe id='target' name='target' className={s.hidden}></iframe> {/* form 태그 페이지 전환 방지 */}
                    {(idOk && nameOk && pwOk)
                        ? <Link to="/login">
                            <button onClick={signUp}>회원가입</button>
                        </Link>
                        : <button onClick={signUp}>회원가입</button>}
                </form>
                <Link to='/'>
                    <button className=''>취소</button>
                </Link>

            </div>
        </div>
    )
}

export default SignUp;