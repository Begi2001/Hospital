import React, {useEffect} from 'react'
import photo from "../../assets/images/newsHeader.png";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import FullWidth from "../UsableComponents/Cards/NewsFullWidthCard/FullWidthCard";
import Pic from '../../assets/images/about.jpg'
import './News.scss'
import SmallCard from "../UsableComponents/Cards/SmallNewsCard/SmallCard";
import {useGetDataQuery} from "../../redux";

const ali = [{
    id: 1, title: 'NEWS', descr: 'Detail about our News', header_image: photo,
}]

const news = {
    id: 1,
    image: Pic,
    title_ru: 'Massa tortor nibh nulla condimentum imperdiet scelerisque...',
    time: '2 hours',
    country: 'CNN Indonesia',
    description_ru: ' sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque'
}

const newss = [{
    news_id: 1,
    image: Pic,
    title_ru: 'News Title Lorem Ipsum Dolor Sit Amet',
    time: '2 hours',
    country: 'CNN Indonesia',
}, {
    news_id: 2,
    image: Pic,
    title_ru: 'News Title Lorem Ipsum Dolor Sit Amet',
    time: '2 hours',
    country: 'CNN Indonesia',
}, {
    news_id: 3,
    image: Pic,
    title_ru: 'News Title Lorem Ipsum Dolor Sit Amet',
    time: '2 hours',
    country: 'CNN Indonesia',
}, {
    news_id: 4,
    image: Pic,
    title_ru: 'News Title Lorem Ipsum Dolor Sit Amet',
    time: '2 hours',
    country: 'CNN Indonesia',
}, {
    news_id: 5,
    image: Pic,
    title_ru: 'News Title Lorem Ipsum Dolor Sit Amet',
    time: '2 hours',
    country: 'CNN Indonesia',
}, {
    news_id: 6,
    image: Pic,
    title_ru: 'News Title Lorem Ipsum Dolor Sit Amet',
    time: '2 hours',
    country: 'CNN Indonesia',
}, {
    news_id: 7,
    image: Pic,
    title_ru: 'News Title Lorem Ipsum Dolor Sit Amet',
    time: '2 hours',
    country: 'CNN Indonesia',
}, {
    news_id: 8,
    image: Pic,
    title_ru: 'News Title Lorem Ipsum Dolor Sit Amet',
    time: '2 hours',
    country: 'CNN Indonesia',
},]

function News() {
    const {data = [], isError, isLoading} = useGetDataQuery('news')
    const tops = [];
    const solid = [];
    const single = [];

    if (isError) return <div><h1>Error</h1></div>
    if (isLoading) return <div><h1>Loading...</h1></div>

    data.result.map(info => {
        info.news_infos.map(top => {
            if (top.popularity === '1') {
                tops.push(top)
                single.push(tops[0])
            } else {
                solid.push(top)
            }
        })
    })

    console.log(single);

    return (<div className='news'>
        {data.result.map(info => (<>
            <SectionHeaders data={info}/>
            <Container>
                <div className='news__top'>
                    <FullWidth data={single}/>
                </div>
                <div className='news__middle'>
                    <h1 className='news__middle-title'>Top News</h1>
                    {/*<div className='news__middle-news'>
                        {solid.map(news => (<SmallCard data={news}/>))}
                    </div>*/}
                </div>
                <div className='news__bottom'>
                    {/*<FullWidth data={single}/>
                    <FullWidth data={single}/>*/}
                </div>
                <div className='news__footer'>
                    <h1 className='news__middle-title'>Top News</h1>
                    {/*<div className='news__middle-news'>
                        {solid.map(news => (<SmallCard data={news}/>))}
                    </div>*/}
                </div>
            </Container>
        </>))}
    </div>)
}

export default News