import Axios from 'axios';
import React, { useState } from 'react';

function Registerpage() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {    // 회원가입 정보 삽입??
        window.location.href = "/login"
        alert("회원가입에 성공하였습니다.")

        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        })
    }

    const register_info = () => {
        fetch('http://localhost/loginpage/phpserver/server_rg.php', {
            headers: {
                'Accept': 'application / json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="registerpage">
            <div className="registeration">
                <h1>회원가입</h1>
                <div>
                    <label>ID</label><br />
                    <input type='text' onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }} />
                </div>
                <div>
                    <label>PassWord</label><br />
                    <input type='password' onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }} />
                </div>
                <button onClick={register}>회원가입</button>
                <button onClick={register_info}>회원 정보 출력</button>
            </div>
        </div>
    )
}

export default Registerpage;