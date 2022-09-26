import React from 'react'
import photo from "../../assets/images/newsHeader.png";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import FullWidth from "../UsableComponents/Cards/NewsFullWidthCard/FullWidthCard";
import Pic from '../../assets/images/about.jpg'
import './News.scss'
import SmallCard from "../UsableComponents/Cards/SmallNewsCard/SmallCard";

const data = [{
    id: 1, title: 'NEWS', descr: 'Detail about our News', image: photo,
}]

const news = {
    id: 1,
    image: Pic,
    title: 'Massa tortor nibh nulla condimentum imperdiet scelerisque...',
    time: '2 hours',
    country: 'CNN Indonesia',
    descr: ' sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque'
}

const newss = [
      {
          id: 1,
          image:Pic,
          title: 'News Title Lorem Ipsum Dolor Sit Amet',
          time: '2 hours',
          country: 'CNN Indonesia',
      },{
          id: 1,
          image:Pic,
          title: 'News Title Lorem Ipsum Dolor Sit Amet',
          time: '2 hours',
          country: 'CNN Indonesia',
      },{
          id: 1,
          image:Pic,
          title: 'News Title Lorem Ipsum Dolor Sit Amet',
          time: '2 hours',
          country: 'CNN Indonesia',
      },{
          id: 1,
          image:Pic,
          title: 'News Title Lorem Ipsum Dolor Sit Amet',
          time: '2 hours',
          country: 'CNN Indonesia',
      },{
          id: 1,
          image:Pic,
          title: 'News Title Lorem Ipsum Dolor Sit Amet',
          time: '2 hours',
          country: 'CNN Indonesia',
      },{
          id: 1,
          image:Pic,
          title: 'News Title Lorem Ipsum Dolor Sit Amet',
          time: '2 hours',
          country: 'CNN Indonesia',
      },{
          id: 1,
          image:Pic,
          title: 'News Title Lorem Ipsum Dolor Sit Amet',
          time: '2 hours',
          country: 'CNN Indonesia',
      },{
          id: 1,
          image:Pic,
          title: 'News Title Lorem Ipsum Dolor Sit Amet',
          time: '2 hours',
          country: 'CNN Indonesia',
      },
]

function News() {
    return (<div className='news'>
        {data.map(type => (<SectionHeaders section={'news'} data={type}/>))}
        <Container>
            <div className='news__top'>
                <FullWidth data={news}/>
            </div>
            <div className='news__middle'>
                <h1 className='news__middle-title'>Top News</h1>
                <div className='news__middle-news'>
                    {newss.map(news=>(
                          <SmallCard data={news}/>
                    ))}
                </div>
            </div>
            <div className='news__bottom'>
                <FullWidth data={news}/>
                <FullWidth data={news}/>
            </div>
            <div className='news__footer'>
                <h1 className='news__middle-title'>Top News</h1>
                <div className='news__middle-news'>
                    {newss.map(news=>(
                          <SmallCard data={news}/>
                    ))}
                </div>
            </div>
        </Container>
    </div>)
}

export default News