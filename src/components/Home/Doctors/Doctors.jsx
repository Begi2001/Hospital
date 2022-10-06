import React from "react";
import {useGetDataQuery} from "../../../redux";
import {useTranslation} from "react-i18next";

import "./Doctors.scss";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import DoctorCard from "../../UsableComponents/Cards/DoctorCard/DoctorCard";

function Doctors() {
    const {t} = useTranslation()
    const {data = [], isError, isLoading} = useGetDataQuery('doctors')

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error</div>

    return (<section className="doctors">
        <Container>
            <Title children={t('doctors')} url={"/doctors"}/>
        </Container>
        {data.result.map(docs => (<div className="slider">
            <div className="slide-track">
                <div className="doctors__container">
                    <div className="doctors__wrapper">
                        {docs.doctor_infos.map(info => (<DoctorCard data={info}/>))}
                    </div>
                    <div className="doctors__wrapper">
                        {docs.doctor_infos.map(info => (<DoctorCard data={info}/>))}
                    </div>
                </div>
            </div>
        </div>))}
    </section>);
}

export default Doctors;