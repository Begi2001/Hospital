import React from "react";
import {useGetDataQuery} from "../../../redux";
import {useTranslation} from "react-i18next";

import "./Doctors.scss";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import DoctorCard from "../../UsableComponents/Cards/DoctorCard/DoctorCard";
import {Skeleton} from "@mui/material";

function Doctors() {
    const {t} = useTranslation()
    const {data = [], isError, isLoading} = useGetDataQuery('doctors')
    if (isLoading) {
        return (<section
            style={{display: "flex", justifyContent: 'center', maxWidth: '1280px', margin: '0 auto', gap: '20px 50px'}}>
            {/*<Skeleton height={500} width={250}/>
            <Skeleton height={500} width={250}/>
            <Skeleton height={500} width={250}/>
            <Skeleton height={500} width={250}/>*/}
        </section>);
    } else {
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


}

export default Doctors;