import React from 'react'
import Service from "./Service/Service";
import About from "./About/About";
import Doctors from "./Doctors/Doctors";
import News from "./News/News";
import Blog from "./Blog/Blog";
import Testimonial from "./Testimonial/Testimonial";
import Faq from '../UsableComponents/FAQs/Faq';
import Carousel1 from "./Carousel/Carousel";

function Home() {
    return (<>
        {/*<Carousel1/>*/}
        <Service/>
        <About/>
        <Doctors/>
        <News/>
        <Blog/>
        <Faq/>
        <Testimonial/>
    </>)
}

export default Home