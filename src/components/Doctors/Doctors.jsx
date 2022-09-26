import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Client from "./Clients/Client";
import Container from "../UsableComponents/Container/Container";
import photo from "../../assets/images/docsHeader.png";
import Doc1 from "../../assets/images/doc1.png";
import Doc2 from "../../assets/images/doc2.png";
import Doc3 from "../../assets/images/doc3.png";
import Doc4 from "../../assets/images/doc4.png";
import Doc5 from "../../assets/images/doc5.png";
import DoctorCard from "../UsableComponents/Cards/DoctorCard/DoctorCard";

import './Doctors.scss'

const data = [{
    id: 1, title: 'Our Doctors', descr: 'Detail about our Doctors', image: photo,
}]

const docs = [{id: 1, img: Doc1, name: "Toirjon", lastname: "Tojiev Xursanovich"}, {
    id: 2, img: Doc2, name: "Toirjon", lastname: "Tojiev Xursanovich"
}, {id: 3, img: Doc3, name: "Toirjon", lastname: "Tojiev Xursanovich"}, {
    id: 4, img: Doc4, name: "Toirjon", lastname: "Tojiev Xursanovich"
}, {id: 5, img: Doc5, name: "Toirjon", lastname: "Tojiev Xursanovich"}, {
    id: 6, img: Doc1, name: "Toirjon", lastname: "Tojiev Xursanovich"
},];

function Doctors() {
    return (<section className='docs'>
        {data.map(doc => (<SectionHeaders data={doc} section={'doctors'}/>))}
        <Container>
            <div className='docs__wrapper'>
                {docs.map(doc => (<DoctorCard data={doc}/>))}
            </div>
            <Client/>
        </Container>

    </section>)
}

export default Doctors