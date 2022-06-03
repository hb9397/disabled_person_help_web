import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Loginpage() {

    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
    

    const history = useHistory();

    function handleID(e) {
        e.preventDefault();
        setID(e.target.value)
    }

    function handlePW(e) {
        e.preventDefault();
        setPW(e.target.value)
    }

    function login() {
        fetch("http://localhost/disabled_person_help_web/phpServer/user_info.php")
            .then((res) => (res.json()))
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (id === data[i].UserID) {
                        if (pw === data[i].UserPW) {
                            alert("로그인 성공")
                            sessionStorage.setItem('user_id',id)
                            var userName = data[i].UserName
                            sessionStorage.setItem('user_name', userName)
                            history.push({
                                pathname: '/',
                                state: {
                                    id: id,
                                    username: userName,
                                    pw: pw
                                }
                            })
                            window.location.reload()
                            break;
                        }else{
                            alert("비밀번호가 잘못되었습니다")
                            break;
                        } }
                    else {
                        if (i === data.length-1) {
                            alert('존재하지 않는 ID 입니다')
                        }
                    }
                }
            })
    }

    return (
        <div className="loginpage">
            <div className="login">
                <h1>로그인</h1>
                <div className=''>
                    <label for="" className=''>아이디</label><br />
                    <input type='text' name='id' value={id} onChange={handleID} className='' />
                </div>
                <div className=''>
                    <label for="" className=''>비밀번호</label><br />
                    <input type='text' name='pw' value={pw} onChange={handlePW} className='' />
                </div>
                <button onClick={login}>로그인</button>
                <Link to="/register">
                    <button onClick=''>회원가입</button>
                </Link>
            </div>
        </div>
    )
}

export default Loginpage;