import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function State() {
    
    const [isLogin, setIsLogin] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if(sessionStorage.getItem('user_id') !== null){
            setIsLogin(true)
        }
    }, [sessionStorage.getItem('user_id')])

function logOut(){
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('user_name');
    history.push({
        pathname: '/login'
    })
    alert("로그아웃 되었습니다.")
    window.location.reload();
}

    return (
        <div>
            {isLogin 
            ? <p>{sessionStorage.getItem('user_name')}님 반갑습니다. <button onClick={logOut}>로그아웃</button></p>
            : <div></div>} {/* 세션스토리지에서 user_id가 true인 경우에만 로그아웃 버튼과 회원 이름 출력 */}
        </div>
    )
}

export default State