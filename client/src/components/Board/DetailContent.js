import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Table } from 'react-bootstrap';
//import Comment from './Comment';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { UilArrowLeft } from '@iconscout/react-unicons'

//-----------------CSS import--------------------//
//import s from '../../css/Board.module.css';

function DetailContent() {
    const history = useHistory();
    const location = useLocation();

    return (
        <div>
            <div className='{s.detailTitleContainer}'>
                <div className='{s.detailTitle}'>
                    <div className='{s.titleDiv}'>
                        <span className='{s.boardText}'>TITLE</span>
                        <span>{location.state.props.title}</span>
                    </div>
                    <div className={'s.DateDiv'}>
                        <span className={'s.boardText'}>DATE</span>
                        <span>{location.state.props.day}</span>
                    </div>
                </div>

                <div className={'s.detailTitle'}>
                    <div className={'s.titleDiv'}>
                        <span className={'s.boardText'}>작성자</span>
                        <span>{location.state.props.writer}</span>
                    </div>
                </div>
            </div>

            <div className={'s.detailContent'}>
                <div className={'s.titleDiv'}>
                    {/* <span className={s.boardText}>CONTENT</span> */}
                </div>
                <textarea className={'s.textarea'} value={location.state.props.content} readOnly></textarea>
            </div>
            <div>
                <Link to='/board'>
                    <button>뒤로가기</button>
                </Link>
            </div>
        </div>
    )
}

export default DetailContent