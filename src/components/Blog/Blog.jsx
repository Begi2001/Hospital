import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import BigBlog from "../UsableComponents/Cards/BigBlogCard/BigBlogCard";
import './Blog.scss'
import SmallBlog from "../UsableComponents/Cards/SmallBlogCard/SmallBlog";
import {useGetDataQuery} from "../../redux";

function Blog() {
    const {data = [], isLoading, isError} = useGetDataQuery('blogs')

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error</div>

    return (<div className='blog'>
        {data.result.map(item => (
            <>
                <SectionHeaders data={item}/>
                <Container>
                    <div className='blog__top'>
                        {item.blog_infos.slice(0, 2).map(post => (
                            <BigBlog data={post}/>
                        ))}
                    </div>
                    <div className='blog__posts'>
                        {item.blog_infos.slice(2, 10).map(post => (
                            <SmallBlog data={post}/>
                        ))}
                    </div>
                </Container>
            </>
        ))}
    </div>)
}

export default Blog