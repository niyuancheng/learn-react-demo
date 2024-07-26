import React, { useState, useEffect } from "react";
import { poster } from "../../assets";
import "./Home.css";
import { cancelSource, axiosInstance } from "../../api/axios";
import { Link } from "react-router-dom";
const rightBoxBarList = [
    {
        name: '最新',
        page: 1,
        pageSize: 5,
        active: true,
        id: 1
    },
    {
        name: '新闻',
        page: 1,
        pageSize: 5,
        active: false,
        id: 2
    },
    {
        name: '公告',
        page: 1,
        pageSize: 5,
        active: false,
        id: 3
    },
    {
        name: '活动',
        page: 1,
        pageSize: 5,
        active: false,
        id: 4
    },
]
export default function Home() {
    const [barList, setBarList] = useState(rightBoxBarList);
    const [barNewsList, setBarNewsList] = useState([])

    useEffect(() => {
        // console.log(barList)
        const activeBar = barList.filter(item => item.active)[0] || undefined;
        if (activeBar) {
            axiosInstance.get('/genshion-home/news', {
                params: {
                    page: activeBar.id,
                    pageSize: 5
                }
            }).then(val => {
                const list = val.data.val;
                if (Array.isArray(list)) {
                    setBarNewsList(list);
                }
                console.log(list)
            })
        }
        return () => {
            // cancelSource.cancel('use effect');
        }
    }, [barList]);

    const handleBarClick = (bar) => {
        setBarList(barList.map(item => {
            if (item === bar) {
                return {
                    ...item,
                    active: true
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
        <div className="nova-home-container">
            <div className="nova-home-video">
                <video src="https://ys.mihoyo.com/main/_nuxt/videos/bg.3e78e80.mp4" loop autoPlay poster={poster}></video>
            </div>

            <div className="nova-home-news">
                <h1 className="nova-home-news-title">新闻资讯</h1>
                <div className="nova-home-news-box">
                    <div className="nova-home-news-box-left">
                        Left
                    </div>
                    <div className="nova-home-news-box-right">
                        <ul className="nova-home-news-box-right-bar">
                            {
                                barList.map(bar => {
                                    return (
                                        <li key={bar.id} className={bar.active && 'active'} onClick={() => handleBarClick(bar)}>{bar.name}</li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="nova-home-news-box-right-news">
                            {
                                barNewsList.map(news => {
                                    return (
                                        <Link to={`/news/${news.iInfoId}`}>
                                            <li key={news.iInfoId}>
                                                <p className="news-title">
                                                    {news.sTitle}
                                                </p>
                                                <p className="news-date">
                                                    {news.dtCreateTime}
                                                </p>
                                            </li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                        

                </div>
            </div>
        </div>
    )
}