import React, {useEffect} from 'react'
import './Carousel.scss'
import Photo1 from '../../../assets/images/home.png'
import Photo2 from '../../../assets/images/aboutImg.png'
import Photo3 from '../../../assets/images/blogHeader.png'
import Photo4 from '../../../assets/images/newsHeader.png'
import LearnMoreBtn from "../../UsableComponents/Buttons/LearnMore/LearnMore.btn";
import Container from "../../UsableComponents/Container/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {useTranslation} from "react-i18next";

function Carousel1() {

    const { t } = useTranslation();

    return (<header className='header'>
        <Carousel showThumbs={false} stopOnHover={false} swipeable={true} animationHandler={'fade'} showStatus={false} showArrows={false}
                  labels={false} axis={'vertical'} showIndicators={true} infiniteLoop={true} interval={5000}
                  autoPlay={true}>
            <>
                <img src={Photo1} alt="" className='image'/>
                <Container>
                    <div className='main'>
                        <p className='subtitle'>{t("care1")}</p>
                        <p className='title'>{t('carouseltitle1')}<br/> {t('carouseldescr1')}</p>
                        <div className='wrapper'>
                            <LearnMoreBtn url={'/service'} children={t('service')}/>
                            <hr/>
                        </div>
                    </div>
                </Container>
            </>
            <>
                <img src={Photo2} alt="" className='image'/>
                <Container>
                    <div className='main'>
                        <p className='subtitle'>{t('care2')}</p>
                        <p className='title'>{t('carouseltitle2')}<br/>{t('carouseldescr2')}</p>
                        <div className='wrapper'>
                            <LearnMoreBtn url={'/service'} children={'Our Service'}/>
                            <hr/>
                        </div>
                    </div>
                </Container>
            </>
            <>
                <img src={Photo3} alt="" className='image'/>
                <Container>
                    <div className='main'>
                        <p className='subtitle'>{t('care3')}</p>
                        <p className='title'>{t('carouseltitle3')}<br/> {t('carouseldescr3')}</p>
                        <div className='wrapper'>
                            <LearnMoreBtn url={'/service'} children={'Our Service'}/>
                            <hr/>
                        </div>
                    </div>
                </Container>
            </>
            <>
                <img src={Photo4} alt="" className='image'/>
                <Container>
                    <div className='main'>
                        <p className='subtitle'>{t('care4')}</p>
                        <p className='title'>{t('carouseltitle4')}<br/> {t('carouseldescr4')}</p>
                        <div className='wrapper'>
                            <LearnMoreBtn url={'/service'} children={'Our Service'}/>
                            <hr/>
                        </div>
                    </div>
                </Container>
            </>
        </Carousel>
    </header>)
}

export default Carousel1