import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Loginpage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);

    Axios.defaults.withCredentials = true;

    const login = () => {   // 로그인 정보 가져온다
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response) => {

            window.location.reload();
            // window.location.href = "/user"

            if (!response.data.message) {
                setLoginStatus(response.data.message)   // 로그인 안했을 때
            } else {
                alert(response.data.message);     // alert 창 띄우기
                setLoginStatus(response.data[0].username)    // 로그인 했을 때
            }
        });
    };

    // const login = () => {   // 로그인 정보 가져온다
    //   Axios.post('http://localhost:3001/login', {
    //     username: username,
    //     password: password,
    //   }).then((response) => {
    //     if (!response.data.auth) {
    //       setLoginStatus(false)   // 로그인 안했을 때
    //     } else {
    //       localStorage.setItem("token", response.data.token)
    //       setLoginStatus(true)    // 로그인 했을 때
    //     }
    //   });
    // };

    const logout = () => {
        Axios.get('http://localhost:3001/logout')
            .then((response) => {
                // localStorage.removeItem("token");
                window.location.reload();
                alert("로그아웃 하였습니다.")
            })
    }

    // const userAuthenticated = () => {
    //   Axios.get("http://localhost:3001/isUserAuth", {
    //     headers: {
    //       "x-access-token": localStorage.getItem("token")
    //     }
    //   }).then((response) => {
    //     console.log(response);
    //   })
    // }

    // 페이지를 새로고침 할때마다 실행 돼서, 빈 배열을 추가하면 한번만 호출됨 
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn == true) {   // 작동 잘 하는지 확인하기위해 상태를 응답 data.user 와 같게 설정할 것임
                setLoginStatus(response.data.user[0].username);    // 사용자는 한명이라서 배열의 첫번째 요소 => 0
            }
        })
    }, [])

    return (
        <div className="loginpage">
            <div className="login">
                <h1>로그인</h1>
                <div>
                    <input type='text' placeholder='아이디' onChange={(e) => {
                        setUsername(e.target.value);
                    }} />
                </div>
                <div>
                    <input type='password' placeholder='비밀번호' onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </div>
                <button onClick={login}>로그인</button>
                <Link to="/register">회원가입</Link>
            </div>
            {loginStatus && <button onClick={logout}>로그아웃</button>}
        </div>
    )
}

export default Loginpage;