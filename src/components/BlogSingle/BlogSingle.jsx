import React from 'react'
import photo from "../../assets/images/blogHeader.png";
import photo1 from "../../assets/images/aqImg3.png";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import {ReactComponent as Tilda} from '../../assets/icons/String.svg';
import './BlogSingle.scss'
import {useParams} from "react-router-dom";
import {useGetSingleQuery} from "../../redux";
import {useTranslation} from "react-i18next";
import ReactPlayer from "react-player";


function BlogSingle() {
    const {t} = useTranslation()
    const id = useParams()
    const {data = [], isLoading, isError, isFetching} = useGetSingleQuery(`/blogs/single/${id.id}`)

    console.log(data.data);

    const ali = [{
        id: 1,
        header_title_uz: `${t('contact')}`,
        header_title_ru: `${t('contact')}`,
        header_description_uz: `${t('contact_description')}`,
        header_description_ru: `${t('contact_description')}`,
        header_image: photo,
    }]

    const post = {
        id: 1,
        image: photo1,
        title: 'Agency provides a full service range including technical skills, design, business understanding.',
        descr: 'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
        info:
            {
                id: 1,
                title: 'Promote your product',
                descr: 'Ability to put themselves in the merchant\'s shoes. It is meant to partner on the long run, and work as an extension of the merchant\'s team.',
                infos: [
                    {id: 1, title: 'Digital marketing'},
                    {id: 2, title: 'Efforts instead'},
                    {id: 3, title: 'Handling in-house'},
                ],
                seconddescr: 'A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
            }
    }

    if (isFetching) return <div>Fetching</div>
    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error</div>

    return (<section className='blog__single'>
        {ali.map(type => (<SectionHeaders data={type}/>))}
        <Container>
            <div className='post'>
                {data.data[0].link_video !== null ?
                    <div className='post__video'>
                        <ReactPlayer stopOnUnmount={false} pip={true} width={'100%'} height={'100%'} light={true}
                                     controls={true} playing url={data.data[0].link_video}/>
                    </div>
                    : <img src={data.data[0].image} alt="" className='post__image'/>
                }
                <p className='post__title'>{post.title}</p>
                <p className='post__descr'>{post.descr}</p>
                <div className='post__info'>
                    <p className='post__info-title'>{post.info.title}</p>
                    <p className='post__info-descr'>{post.info.descr}</p>
                    <ul className='post__info-list'>
                        {post.info.infos.map(info => (
                            <li className='list'>{info.title}</li>
                        ))}
                    </ul>
                    <p className='post__info-seconddescr'>{post.info.seconddescr}</p>
                </div>
                <div className='post__post'>
                    <Tilda/>
                    <p className='post__post-text'>{post.descr}</p>
                </div>
            </div>
        </Container>
    </section>)
}

export default BlogSingle