import React, { useState, useEffect, Suspense } from "react";
import { poster } from "../../assets";
import { cancelSource, axiosInstance } from "../../api/axios";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider";
import { useSelector } from "react-redux";

import "./Home.css";
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

const LoginComponent = React.lazy(() => import('../../components/Login/index'));

export default function Home() {
    const [barList, setBarList] = useState(rightBoxBarList);
    const [barNewsList, setBarNewsList] = useState([]);
    const [sliderList, setSliderList] = useState([]);
    const isShowLogin = useSelector(state => state.login.isShowLogin);

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
            })
        }

        axiosInstance.get('/genshion-home/slider', {
            params: {
                page: 1,
                pageSize: 4
            }
        }).then(val => {
            const list = val.data.val;
            console.log(list)
            setSliderList(list);
        })
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
                        <Slider autoPlay gap={5} afterChange={(index) => {console.log('current index', index)}}>
                            {
                                sliderList.map(slider => {
                                    const sExt = JSON.parse(slider.sExt);
                                    const {url, name} = sExt['716_0'][0];
                                    return (
                                        <Link to={`/news/${slider.iInfoId}`}>
                                            <div className="nova-home-slider-item" key={slider.iInfoId}>
                                                <img src={url} alt={name}/>
                                            </div>
                                        </Link>
                                    )   
                                })
                            }
                        </Slider>
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
            {
                isShowLogin && <Suspense>
                    <LoginComponent />
                </Suspense>
            }
        </div>
    )
}