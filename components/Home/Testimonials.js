"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const testimonials = [
  {
    name: "Rafaela Mendes",
    role: "Criadora de conteúdo · 320K seguidores",
    quote:
      "Eu passava 6 horas editando cortes de cada vídeo. Com o ViroClip, faço tudo em 15 minutos. Meu alcance no Reels triplicou no primeiro mês.",
    metric: "3x mais alcance",
  },
  {
    name: "Lucas Ferreira",
    role: "Podcaster · Canal Tech Talks",
    quote:
      "Posto 5 cortes por dia sem esforço. O agendamento automático mudou minha rotina completamente. Cresci 40K seguidores em 60 dias.",
    metric: "+40K seguidores",
  },
  {
    name: "Mariana Costa",
    role: "Social Media · Agência Digital",
    quote:
      "Gerencio 8 clientes e o ViroClip me permite entregar conteúdo de qualidade em escala. As legendas animadas são impecáveis.",
    metric: "8 clientes em escala",
  },
];

const Testimonials = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-section-gap">
      <div className="container">
        <div className="text-center mb-[60px]">
          <h4
            className="subtitle"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="150"
          >
            <span className="theme-gradient">Quem usa, aprova</span>
          </h4>
          <h2
            className="title w-full"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="200"
          >
            Histórias de quem já transformou
            <br />
            sua criação de conteúdo
          </h2>
        </div>

        <div className="flex flex-wrap -mx-[15px] gap-y-[30px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full lg:w-1/3 px-[15px]"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay={150 + index * 100}
            >
              <div className="rounded-[10px] bg-[rgba(0,0,0,0.15)] border border-[rgba(255,255,255,0.05)] p-8 h-full flex flex-col transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]">
                <div className="flex items-center gap-1 mb-4 text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-sharp fa-solid fa-star"></i>
                  ))}
                </div>

                <p className="text-[#CCCCD0] text-[15px] leading-relaxed mb-6 flex-grow italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="border-t border-[rgba(255,255,255,0.08)] pt-5 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h6 className="text-white text-[15px] font-semibold mb-0.5">
                        {testimonial.name}
                      </h6>
                      <p className="text-[#99999C] text-[13px] mb-0">
                        {testimonial.role}
                      </p>
                    </div>
                    <span className="theme-gradient text-sm font-bold whitespace-nowrap">
                      {testimonial.metric}
                    </span>
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

export default Testimonials;
