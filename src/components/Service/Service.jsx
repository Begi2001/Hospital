import React from 'react'
import Photo from "../../assets/images/serviceImg.png";
import SectionHeader from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";

const data = [{
    id: 1, title: 'Our Service', descr: 'Detail about our services', image: Photo
}]

function Service() {
    return (
          <section className='service__single'>
              {data.map(serv => (<SectionHeader data={serv}/>))}
              <Container>
              </Container>
          </section>
    )
}

export default Service