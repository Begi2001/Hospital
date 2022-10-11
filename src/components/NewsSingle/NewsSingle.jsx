import React from 'react'
import photo from "../../assets/images/newsHeader.png";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import './NewsSingle.scss'
import {ReactComponent as String} from "../../assets/icons/String.svg";
import {useTranslation} from "react-i18next";

function NewsSingle() {
    const {t} = useTranslation()
    const data = {
        id: 1,
        header_title_uz: `${t('news')}`,
        header_title_ru: `${t('news')}`,
        header_description_uz: null,
        header_description_ru: null,
        header_image: photo,
    }

    const news = [{
        id: 1,
        title: 'About Our News and Some Videos',
        descr: 'Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then\n' + 'worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held\n' + 'positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.',
        lastdescr: 'Provide your business with a variety of digital solutions to promote your product or service online and help you.'
    }]

    return (<section className='news__single'>
        <SectionHeaders data={data}/>
        <Container>
            {news.map(news => (<div className='news__single-item'>
                <div className='newstop'>
                    <h1 className='newstop__title'>{news.title}</h1>
                    <p className='newstop__descr'>{news.descr}</p>
                    <p className='newstop__descr'>{news.descr}</p>
                </div>
                <div className='newsbottom'>
                    <String/>
                    <p className='newsbottom__text'>
                        {news.lastdescr}
                    </p>
                </div>
            </div>))}
        </Container>
    </section>)
}

export default NewsSingle