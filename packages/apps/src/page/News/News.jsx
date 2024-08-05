import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../api/axios";
import "./News.css";

export default function News() {
    const params = useParams();
    const [newsDetail, setNewsDetail] = useState({});
    useEffect(() => {
        const id = params.id;
        axiosInstance.get('genshion-news/item', {
            params: {
                id: id
            }
        }).then(res => {
            console.log(res.data);
            setNewsDetail(res.data.val);
        })
    }, [params]);


    return (
        <div className="nova-news-container">
            <div className="nova-news-article">
                <h1 className="nova-news-article-title">
                    {newsDetail.sTitle}
                </h1>
                <div className="nova-news-article-date">
                    发布时间: {newsDetail.dtCreateTime}
                </div>
                <div className="nova-news-article-body" dangerouslySetInnerHTML={{__html: newsDetail.sContent}}></div>
            </div>
        </div>
    )
}