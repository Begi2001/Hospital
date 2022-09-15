import React from 'react'
import Carousel from "./Carousel/Carousel";
import Service from "./Service/Service";
import About from "./About/About";
import Doctors from "./Doctors/Doctors";
import News from "./News/News";
import Blog from "./Blog/Blog";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
    return (<>
        {/*<Carousel/>*/}
        <Service/>
        <About/>
        <Doctors/>
        <News/>
        <Blog/>
        <Testimonial/>
    </>)
}

export default Home