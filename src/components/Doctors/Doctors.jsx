import React from 'react'
import {useGetDataQuery} from "../../redux";

import './Doctors.scss'

import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Client from "./Clients/Client";
import Container from "../UsableComponents/Container/Container";
import DoctorCard from "../UsableComponents/Cards/DoctorCard/DoctorCard";

function Doctors() {
    const {data = [],isLoading,isError} = useGetDataQuery('doctors')

    console.log(data.result);
    if (isError) return <div> <h1>Error</h1> </div>
    if (isLoading) return <div> <h1>Loading...</h1> </div>

    return (<section className='docs'>
        {data.result.map(doc => (
            <>
                <SectionHeaders data={doc} section={'doctors'}/>
                <Container>
                    <div className='docs__wrapper'>
                        <>
                            {doc.doctor_infos.map(info => (<DoctorCard data={info}/>))}
                        </>
                    </div>
                    <Client/>
                </Container>
            </>
        ))}
    </section>)
}

export default Doctors