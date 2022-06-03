import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Registerpage() {

    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
    const [userName, setUserName] = useState('');

    function handleUserName(e) {
        e.preventDefault();
        setUserName(e.target.value)
    }

    function handleID(e) {
        e.preventDefault();
        setID(e.target.value)
    }

    function handlePW(e) {
        e.preventDefault();
        setPW(e.target.value)
    }

    return (
        <div className="registerpage">
            <div className="registeration">
                <h1>회원가입</h1>
                <form name='form' method='GET' action='http://localhost/disabled_person_help_web/phpServer/sign_up.php'>

                    <div className=''>
                        <label for="" className=''>닉네임</label><br />
                        <input type='text' name='userName' value={userName} onChange={handleUserName} className='' />
                    </div>

                    <div className=''>
                        <label for="" className=''>아이디</label><br />
                        <input type='text' name='id' value={id} onChange={handleID} className='' />
                    </div>

                    <div className=''>
                        <label for="" className=''>비밀번호</label><br />
                        <input type='text' name='pw' value={pw} onChange={handlePW} className='' />
                    </div>

                    <button onClick=''>회원가입</button>
                    <Link to='/'>
                        <button className=''>취소</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Registerpage;