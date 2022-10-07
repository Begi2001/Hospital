import React from 'react'
import './Blog.scss'
import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import BlogCard from "../../UsableComponents/Cards/BlogCard/BlogCard";

import blog1 from '../../../assets/images/blog1.png'
import blog2 from '../../../assets/images/blog2.png'
import blog3 from '../../../assets/images/blog3.png'
import {useTranslation} from "react-i18next";

const data = [
    {
        id: 1,
        image: blog1,
        title: 'Scary Thing That You Don’t Get Enough Sleep.',
        descr: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.'
    },
    {
        id: 2,
        image: blog2,
        title: 'Scary Thing That You Don’t Get Enough Sleep.',
        descr: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.'
    },
    {
        id: 3,
        image: blog3,
        title: 'Scary Thing That You Don’t Get Enough Sleep.',
        descr: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.'
    }
];

function Blog() {
    const {t} = useTranslation()
    return (
        <section className='blog'>
            <Container>
                <Title url={'./blog'} children={t('blog')}/>
                <div className='posts'>
                    {data.map(post => (
                        <BlogCard key={post.id} data={post}/>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Blog