import React, {useEffect, useState} from 'react'
import './News.scss'
import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";

import Top from '../../../assets/images/topnews.png'
import news1 from '../../../assets/images/news1.png'
import news2 from '../../../assets/images/news2.png'
import news3 from '../../../assets/images/news3.png'
import news4 from '../../../assets/images/news4.png'
import TopNewsCard from "../../UsableComponents/Cards/TopNewsCard/TopNewsCard";
import NewsCard from "../../UsableComponents/Cards/NewsCard/NewsCard";

const data = [
    {
        id: 1,
        image: Top,
        title: 'A passion for putting patients first',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....',
        time: 'Monday 05, September 2021',
        author: 'By Author',
        views: '68',
        likes: '86',
        top: true
    },
    {
        id: 2,
        image: news1,
        title: 'This Article’s Title goes Here, \n' +
              'but not too long.',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....',
        time: 'Monday 05, September 2021',
        author: 'By Author',
        views: '68',
        likes: '86',
        top: false
    },
    {
        id: 3,
        image: news2,
        title: 'This Article’s Title goes Here, \n' +
              'but not too long.',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....',
        time: 'Monday 05, September 2021',
        author: 'By Author',
        views: '68',
        likes: '86',
        top: false
    },
    {
        id: 4,
        image: news3,
        title: 'This Article’s Title goes Here, \n' +
              'but not too long.',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....',
        time: 'Monday 05, September 2021',
        author: 'By Author',
        views: '68',
        likes: '86',
        top: false
    },
    {
        id: 5,
        image: news4,
        title: 'This Article’s Title goes Here, \n' +
              'but not too long.',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....',
        time: 'Monday 05, September 2021',
        author: 'By Author',
        views: '68',
        likes: '86',
        top: false
    }
];


function News() {
    const [top, setTop] = useState([]);
    const [news, setNews] = useState([]);

    let arr = [];
    useEffect(() => {
        data.map(dat => {
            if (dat.top === true) {
                setTop(dat)
            } else {
                arr.push(dat)
                setNews(arr)
            }
        })
    }, [data]);

    return (
          <section className='news'>
              <Container>
                  <Title url={'/news'} children={'News'}/>
                  <div className='wrapper'>
                      <TopNewsCard data={top}/>
                      <div className='morenews'>
                          {news.map(single => (
                                <NewsCard key={single.id} data={single}/>
                          ))}
                      </div>
                  </div>
              </Container>
          </section>
    )
}

export default News