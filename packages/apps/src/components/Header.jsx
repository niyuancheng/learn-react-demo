import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [navList, setNavList]  = useState([
        {
            content: '首页',
            active: true,
            link: '/home',
            id: 1,
        },
        {
            content: '角色',
            active: false,
            link: '/role',
            id: 2
        },
        {
            content: '新闻',
            active: false,
            link: '/news',
            id: 3
        }
    ])
    return (
        <div className='nova-header-wrapper'>
            <ul>
                {
                    navList.map(item => <li key={item.id} className={item.active && 'nav-active'}>
                        <Link to = {item.link}>
                            {item.content}
                        </Link>

                    </li>)
                }
            </ul>
        </div>
    )
}