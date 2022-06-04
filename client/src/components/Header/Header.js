import { Link } from 'react-router-dom';
import State from '../State/State';

//import logo from "../img/headerlogo.png"
// import s from "../css/Header.module.css";

//상단 내비게이션
const Header = () => {

    return (
        <div className="">
            <div className="">
                <Link to='/' className="">
                    {/* <img src={logo} /> */}
                </Link>
            </div>
            <ul className="">
                <li>
                    <Link to='/' className="">
                        메인 페이지
                    </Link>
                </li>
                <li>
                    <Link to='/login' className="">
                        로그인
                    </Link>
                </li>
                <li>
                    <Link to='/register' className="">
                        회원가입
                    </Link>
                </li>
                <li>
                    <Link to='/user' className="">
                        내가 쓴 글
                    </Link>
                </li>
                <li>
                    <Link to='/board' className="">
                        게시판
                    </Link>
                </li>
            </ul>

            <div className=''>
                <State></State>
            </div>
        </div>
    );
};
export default Header;