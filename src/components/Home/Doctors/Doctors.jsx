import React, {useState} from "react";
import {useGetDataQuery} from "../../../redux";
import {useTranslation} from "react-i18next";

import "./Doctors.scss";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import DoctorCard from "../../UsableComponents/Cards/DoctorCard/DoctorCard";
import Loader from "../../UsableComponents/Loader/Loader";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";

function Doctors() {
    const [setSwiperRef] = useState(null);

    const {t} = useTranslation();
    const {data = [], isError, isLoading} = useGetDataQuery("doctors");
    if (isError) return <Loader/>;
    if (isLoading) {
        return <Loader/>;
    } else {
        return (
            <section className="doctors">
                <Container>
                    <Title children={t("doctors")} url={"/doctors"}/>
                </Container>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={35}
                    pagination={{
                        type: "fraction",
                    }}
                    allowSlideNext={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.result.map((docs) => (<>
                            {docs.doctor_infos.map(doctor => (
                                <SwiperSlide
                                    className="sliderSwaper"
                                    style={{
                                        backgroundImage: `url(${docs.img})`,
                                    }}
                                >
                                    <DoctorCard data={doctor}/>
                                </SwiperSlide>
                            ))}
                        </>
                    ))}
                </Swiper>
            </section>
        );
    }
}

export default Doctors;