"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const testimonials = [
  {
    name: "Ana Clara",
    role: "Criadora de conteúdo",
    text: "O ViroClip me economiza pelo menos 6 horas por semana. Antes eu cortava tudo manualmente — agora é só revisar e publicar.",
    rating: 5,
  },
  {
    name: "Rafael Mendes",
    role: "Dono de agência de marketing",
    text: "Escalamos a produção de conteúdo de 10 para 50 clientes sem contratar mais ninguém. O ViroClip virou nosso braço direito.",
    rating: 5,
  },
  {
    name: "Juliana Torres",
    role: "Podcaster",
    text: "Cada episódio do meu podcast agora rende 15-20 cortes prontos para o Reels e TikTok. Meu alcance triplicou em 2 meses.",
    rating: 5,
  },
];

const TestimonialSimple = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-testimonial-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center pb--60"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Depoimentos</span>
              </h4>
              <h2 className="title mb--0">
                O que nossos usuários dizem
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {testimonials.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-12 mt--30"
              key={index}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay={100 + index * 150}
            >
              <div className="rainbow-box-card card-style-default testimonial-style-defalt has-bg-shaped tw:h-full">
                <div className="inner tw:p-5">
                  <div className="rating tw:mb-3">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="tw:text-yellow-400 tw:mr-1">
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </span>
                    ))}
                  </div>
                  <p className="description tw:mb-4">
                    &ldquo;{item.text}&rdquo;
                  </p>
                  <div className="tw:border-t tw:border-white/10 tw:pt-4">
                    <p className="title-text tw:mb-0 tw:font-semibold">
                      {item.name}
                    </p>
                    <p className="desc tw:mb-0 tw:opacity-60">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSimple;
