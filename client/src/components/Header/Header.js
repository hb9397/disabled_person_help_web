import { Link } from 'react-router-dom';
import State from '../State/State'; 
import s from "../css/Header.module.css";

//상단 내비게이션
const Header = () => {

    return (
        <div className={s.navbar}>
            <div className={s.navbar__logo}>

            </div>
            {!(sessionStorage.getItem('user_id') === null)
                ? <ul className={s.navbar__menu}>
                    <li>
                        <Link to='/' className="">
                            메인 페이지
                        </Link>
                    </li>
                    <li>
                        <Link to='/board' className="">
                            문의사항
                        </Link>
                    </li>
                </ul>
                :
                <ul className={s.navbar__menu}>
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
                        <Link to='/board' className="">
                            게시판
                        </Link>
                    </li>
                </ul>
            }

            <div className={s.navbar__login}>
                <State></State>
            </div>
        </div>
    );
};
export default Header;