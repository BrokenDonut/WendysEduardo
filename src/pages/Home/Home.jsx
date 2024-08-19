import { Header } from "../../components/header/Header";
import { Info } from "../../components/info/Info";
import { Vineta } from "../../components/vineta/Vineta";
import { Formulario } from "../../components/formulario/Formulario";
import Vineta1 from "../img/lechuga.jpg";
import Vineta2 from "../img/albahaca.jpg";
import Vineta3 from "../img/brote.jpg";
import Vineta4 from "../img/espinaca.jpg";
import Vineta5 from "../img/hinojo.jpg";
import Vineta6 from "../img/flores.jpg";
import "./Home.css";
import { Aliados } from "../../components/aliados/Aliados";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <Info></Info>
      <div className="body-category" id="productos">
        <h1 className="body-text">Nuestras Categorias</h1>
        <h3 className="body-info">
          Contamos con distintas variedades de productos en categorias muy
          diversas
        </h3>
        <div className="body-vineta">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            className="swiper-container"
          >
            <SwiperSlide className="swiper-replace">
              <Vineta
                img={Vineta1}
                name="Lechugas"
                info="Contamos con una gran variedad de lechugas."
                url="/productos#lechugas"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-replace">
              <Vineta
                img={Vineta2}
                name="Hierbas Aromaticas"
                info="Contamos con una gran variedad de hierbas."
                url="/productos#aromaticas"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-replace">
              <Vineta
                img={Vineta3}
                name="Brotes"
                info="Contamos con una gran variedad de brotes."
                url="/productos#brotes"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-replace">
              <Vineta
                img={Vineta4}
                name="Hojas Verdes"
                info="Contamos con una gran variedad de hojas verdes."
                url="/productos#hojas"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-replace">
              <Vineta
                img={Vineta5}
                name="Verduras"
                info="Contamos con una gran variedad de verduras."
                url="/productos#verduras"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-replace">
              <Vineta
                img={Vineta6}
                name="Especiales"
                info="Contamos con una gran variedad de productos especiales."
                url="/productos#especiales"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Formulario></Formulario>
      <Aliados></Aliados>
    </>
  );
};
