import React from 'react';
import { Link } from 'react-router-dom';

function Startlogin() {
    return (
        <div className='mainpage'>
            <h1>메인 페이지</h1>
            <ul>
                <Link to="/login"><li>로그인 페이지</li></Link>
                <Link to="/register"><li>회원가입 페이지</li></Link>
            </ul>
        </div>
    )
}

export default Startlogin;