import React, { useState } from 'react';

export default function Header() {
    const [navList, setNavList]  = useState([
        {
            content: '首页',
            active: true,
            id: 1,
        },
        {
            content: '角色',
            active: false,
            id: 2
        },
        {
            content: '新闻',
            active: false,
            id: 3
        }
    ])
    return (
        <div className='nova-header-wrapper'>
            <ul>
                {
                    navList.map(item => <li key={item.id} className={item.active && 'nav-active'}>{item.content}</li>)
                }
            </ul>
        </div>
    )
}