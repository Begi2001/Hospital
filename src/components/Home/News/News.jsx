import React, { useEffect, useState } from 'react'
import TopNewsCard from "../../UsableComponents/Cards/TopNewsCard/TopNewsCard";
import NewsCard from "../../UsableComponents/Cards/NewsCard/NewsCard";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import './News.scss'

function News() {

    const { t } = useTranslation()
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://medart.softstars.uz/api/news").then(res => {
            setData(res.data.result[0].news_infos);
        });
    }, [])

    return (
        <section className='news'>
            <Container>
                <Title url={'/news'} children={t('news')} />
                <div className='wrapper'>
                    {data?.filter(item => item.popularity === '1').slice(0,1).map(single =>
                        <TopNewsCard data={single} />
                    )}
                    <div className='morenews'>
                        {data?.filter(item => (item.popularity === '0')).slice(0, 4).map(single =>
                            <NewsCard key={single.id} data={single} />
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default News;