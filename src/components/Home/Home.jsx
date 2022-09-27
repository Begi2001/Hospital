import React from 'react'
import Carousel from "./Carousel/Carousel";
import Service from "./Service/Service";
import About from "./About/About";
import Doctors from "./Doctors/Doctors";
import News from "./News/News";
import Blog from "./Blog/Blog";
import Testimonial from "./Testimonial/Testimonial";
import Faq from '../UsableComponents/FAQs/Faq';

function Home() {
    return (<>
        {/*<Carousel/>*/}
         <Service/>
        <About/>
        {/*<Doctors/>*/}
        <News/>
        <Blog/>
        <Faq/>
        <Testimonial/>
    </>)
}

export default Home