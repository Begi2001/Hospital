import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";

import photo from '../../assets/images/blogHeader.png'
import Container from "../UsableComponents/Container/Container";
import Contacts from "./Contacts/Contacts";

const data = [{
    id: 1, title: 'Contacts', descr: 'Detail about our Contacts', header_image: photo,
}]

function Contact() {
  return (
    <>
        {data.map(type =>(<SectionHeaders section={'news'} data={type}/>))}
        <Container>
            <Contacts/>
        </Container>
    </>
  )
}

export default Contact