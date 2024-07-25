import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { audio, logo } from "../assets";
// import audio from "../assets/audio.png";
// import logo from "../assets/logo.png";

import "./Header.css";
export default function Header() {
    const [navList, setNavList]  = useState([
        {
            content: '首 页',
            active: true,
            link: '/home',
            id: 1,
        },
        { 
            content: '角 色',
            active: false,
            link: '/role',
            id: 2
        },
        {
            content: '新 闻',
            active: false,
            link: '/news',
            id: 3
        },
        {
            content: '世界',
            active: false,
            link: '/world',
            id: 4,
        }
    ]);
    const handleClick = (value) => {
        setNavList(navList.map(item => {
            if (item === value) {
                return {
                    ...item,
                    active: true,
                }
            } else {
                return {
                    ...item,
                    active: false
                }
            }
        }))
    }

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
                        navList.map(item => <li key={item.id} className={'nova-header-item' + (item.active ? ' nav-active' : '')} onClick={() => handleClick(item)}>
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