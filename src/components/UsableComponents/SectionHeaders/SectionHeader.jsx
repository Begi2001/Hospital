import React from 'react'
import './SectionHeader.scss'
import Container from "../Container/Container";

function SectionHeaders({data, section}) {

    console.log(data)

    return (
          <header className='section__header'>
              <img src={data.image} alt="" className='section__header-image'/>
                  {/*<div className='section__header-titles'>
                      <p className='section__name'>{data.title}</p>
                      <p className='section__descr'>{data.descr}</p>
                  </div>*/}
              <Container>
                  {data.absolute.map(info => (
                        <div className='absolute'>
                            <img src={info.image} alt="" className='absolute__image'/>
                            <div className='absolute__infos'>
                                <p className='absolute__infos-title'>{info.title}</p>
                                <p className='absolute__infos-subtitle'>{info.subtitle}</p>
                                <p className='absolute__infos-descr'>{info.descr}</p>
                                <img src={info.sing} alt="" className='absolute__infos-sing'/>
                                <p className='absolute__infos-author'>{info.author}</p>
                            </div>
                        </div>
                  ))}
              </Container>
          </header>
    )
}

export default SectionHeaders