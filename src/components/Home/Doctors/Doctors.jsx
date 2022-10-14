import React, { useState } from "react";
import { useGetDataQuery } from "../../../redux";
import { useTranslation } from "react-i18next";

import "./Doctors.scss";
import { dataDocs } from "./DoctorsData";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import DoctorCard from "../../UsableComponents/Cards/DoctorCard/DoctorCard";
import { Skeleton } from "@mui/material";
import Loader from "../../UsableComponents/Loader/Loader";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Doctors() {
  const [setSwiperRef] = useState(null);

  const { t } = useTranslation();
  const { data = [], isError, isLoading } = useGetDataQuery("doctors");
  if (isError) return <Loader />;
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <section className="doctors">
        <Container>
          <Title children={t("doctors")} url={"/doctors"} />
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
          {dataDocs.map((docs) => (
            <SwiperSlide
              className="sliderSwaper"
              style={{
                backgroundImage: `url(${docs.img})`,
              }}
            >
              <div className="infoDocs">
                <p>{docs.name}</p>
                <p>{docs.surname}</p>
                <p>{docs.patronym}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
}

export default Doctors;
