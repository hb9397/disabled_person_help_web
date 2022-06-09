import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import h from '../css/test.module.css'
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

import s from '../css/Board.module.css';

function DetailContent() {
    const history = useHistory();
    const location = useLocation();

    console.log(sessionStorage.getItem('user_name'))
    console.log(location.state.props.writer)

    return (
        <div>
            <div className={s.detailTitleContainer}>
                <div className={s.detailTitle}>
                    <div className={s.titleDiv}>
                        <span className={s.boardText}>TITLE</span>
                        <span>{location.state.props.title}</span>
                    </div>
                </div>

                <div className={s.detailTitle}>
                    <div className={s.titleDiv}>
                        <span className={s.boardText}>작성자</span>
                        <span>{location.state.props.writer}</span>
                    </div>
                </div>
            </div>

            <div className={s.detailContent}>
                <div className={s.titleDiv}>
                </div>
                <textarea className={s.textarea} value={location.state.props.content} readOnly></textarea>
            </div>

            <div>
                {(sessionStorage.getItem('user_name') === location.state.props.writer)
                    ?
                    <div>
                        <Link to='/board'>
                            <button>뒤로가기</button>
                        </Link>
                        <form name='form' method='GET' action='http://localhost/disabled_person_help_web/phpServer/d_board.php' target='target'>
                            <textarea name='writer' value={location.state.props.writer} className={h.hidden}></textarea>
                            <textarea name='title' value={location.state.props.title} className={h.hidden}></textarea>

                            <iframe id='target' name='target' className={h.hidden}></iframe>
                            <DeleteModal resultText="해당 문의사항을 삭제했습니다.">삭제</DeleteModal>
                        </form>
                    </div>
                    :
                    <div>
                        <Link to='/board'>
                            <button>뒤로가기</button>
                        </Link>
                    </div>}
            </div>
        </div>
    )
}

export default DetailContent