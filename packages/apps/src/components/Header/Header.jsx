import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { audio, logo } from "../../assets";
import { useSelector, useDispatch } from 'react-redux';
import { changeActive } from '../../store/header.store';
import "./Header.css";

export default function Header() {
    const navList = useSelector(state => state.header.header);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const router = '/' + location.pathname.split('/')[1];
        dispatch(changeActive(navList.filter(value => value.link === router)[0].id));

    }, [location])
    return (
        <div className='nova-header-wrapper'>
            <div className='nova-header-left'>
                <div className='nova-header-audio-controller'>
                    <img src={audio} alt="audio" width={30} height={30}/>
                </div>
                <div className='nova-header-logo'>
                    <img src={logo} alt="logo" crossOrigin='anonymous' width={300}/>
                </div>
            </div>
            <div className='nova-header-center'>
                <ul className='nova-header-list'>
                    {
                        navList.map(item => <li key={item.id} className={'nova-header-item' + (item.active ? ' nav-active' : '') }>
                            <Link to = {item.link}>
                                {item.content}
                            </Link>
                        </li>)
                    }
                </ul>
            </div>
            <div className='nova-header-right'>

            </div>
           
        </div>
    )
}