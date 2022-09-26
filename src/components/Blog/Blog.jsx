import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import blog from '../../assets/images/topblog.png'
import photo from '../../assets/images/blogHeader.png'
import Container from "../UsableComponents/Container/Container";
import BigBlog from "../UsableComponents/Cards/BigBlogCard/BigBlogCard";
import './Blog.scss'
import SmallBlog from "../UsableComponents/Cards/SmallBlogCard/SmallBlog";

const data = [{
    id: 1, title: 'Our Doctors', descr: 'Detail about our Doctors', image: photo,
}]

const top = [{
    id: 1, image: blog, type: 'Design', title: 'Digital marketing channels', time: ' 23 Nov. 2021',
}, {
    id: 1, image: blog, type: 'Design', title: 'Digital marketing channels', time: ' 23 Nov. 2021',
}]
const posts = [{
    id: 1, image: blog, type: 'Design', title: 'Digital marketing channels', time: ' 23 Nov. 2021',
}, {
    id: 1, image: blog, type: 'Design', title: 'Digital marketing channels', time: ' 23 Nov. 2021',
}, {
    id: 1, image: blog, type: 'Design', title: 'Digital marketing channels', time: ' 23 Nov. 2021',
}, {
    id: 1, image: blog, type: 'Design', title: 'Digital marketing channels', time: ' 23 Nov. 2021',
}, {
    id: 1, image: blog, type: 'Design', title: 'Digital marketing channels', time: ' 23 Nov. 2021',
}, {
    id: 1, image: blog, type: 'Design', title: 'Digital marketing channels', time: ' 23 Nov. 2021',
},]

function Blog() {
    return (<div className='blog'>
        {data.map(type => (<SectionHeaders data={type}/>))}
        <Container>
            <div className='blog__top'>
                {top.map(blog => (<BigBlog data={blog}/>))}
            </div>
            <div className='blog__posts'>
                {posts.map(post => (<SmallBlog data={post}/>))}
            </div>
        </Container>
    </div>)
}

export default Blog