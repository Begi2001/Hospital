import React from 'react'
import photo from "../../assets/images/blogHeader.png";
import photo1 from "../../assets/images/aqImg3.png";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import {ReactComponent as Tilda} from '../../assets/icons/String.svg';
import './BlogSingle.scss'


function BlogSingle() {
    const data = [{
        id: 1, title: 'Our Blog', descr: 'Detail about our Blog', header_image: photo,
    }]

    const post = [{
        id: 1,
        image: photo1,
        title: 'Agency provides a full service range including technical skills, design, business understanding.',
        descr: 'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
        info: [
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
        ]
    }]

    return (<section className='blog__single'>
        {data.map(type => (<SectionHeaders data={type}/>))}
        <Container>
            {post.map(post => (
                  <div className='post'>
                      <img src={post.image} alt="" className='post__image'/>
                      <p className='post__title'>{post.title}</p>
                      <p className='post__descr'>{post.descr}</p>
                      {post.info.map(info=>(
                            <div className='post__info'>
                                <p className='post__info-title'>{info.title}</p>
                                <p className='post__info-descr'>{info.descr}</p>
                                <ul className='post__info-list'>
                                    {info.infos.map(type=>(
                                          <li className='list'>{type.title}</li>
                                    ))}
                                </ul>
                                <p className='post__info-seconddescr'>{info.seconddescr}</p>
                            </div>
                      ))}
                      <div className='post__post'>
                          <Tilda/>
                          <p className='post__post-text'>{post.descr}</p>
                      </div>
                  </div>
            ))}
        </Container>
    </section>)
}

export default BlogSingle