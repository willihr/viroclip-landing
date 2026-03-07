"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const features = [
  {
    icon: "fa-sharp fa-regular fa-scissors",
    title: "Cortes Automáticos com IA",
    description:
      "A IA detecta os momentos mais envolventes do seu vídeo e gera dezenas de cortes prontos para viralizar.",
  },
  {
    icon: "fa-sharp fa-regular fa-closed-captioning",
    title: "Legendas Animadas",
    description:
      "Legendas estilizadas geradas automaticamente com alta precisão. Aumente a retenção e alcance de cada corte.",
  },
  {
    icon: "fa-sharp fa-regular fa-calendar-clock",
    title: "Agendamento Automático",
    description:
      "Agende seus cortes para postar nos melhores horários em todas as plataformas, de forma automática.",
  },
  {
    icon: "fa-sharp fa-regular fa-grid-2",
    title: "Multi-Plataforma",
    description:
      "Publique simultaneamente no TikTok, Instagram Reels, YouTube Shorts, Facebook e LinkedIn.",
  },
  {
    icon: "fa-sharp fa-regular fa-film",
    title: "Editor Integrado",
    description:
      "Ajuste cortes, altere legendas, adicione sua marca e personalize cada vídeo antes de publicar.",
  },
  {
    icon: "fa-sharp fa-regular fa-chart-line-up",
    title: "Detecção de Viralidade",
    description:
      "Nosso algoritmo pontua cada corte com base no potencial de engajamento e viralização.",
  },
];

const Features = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-section-gap-big relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-[60px]">
          <h4
            className="subtitle"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="150"
          >
            <span className="theme-gradient">Tudo que você precisa</span>
          </h4>
          <h2
            className="title w-full"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="200"
          >
            Funcionalidades feitas para
            <br />
            criadores de conteúdo
          </h2>
        </div>

        <div className="flex flex-wrap -mx-[15px] gap-y-[30px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-[15px]"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay={150 + (index % 3) * 100}
            >
              <div className="rounded-[10px] bg-[rgba(0,0,0,0.15)] border border-[rgba(255,255,255,0.05)] p-8 h-full transition-all duration-300 hover:border-[rgba(128,90,245,0.3)] hover:bg-[rgba(0,0,0,0.25)] group">
                <div className="mb-5 inline-flex items-center justify-center w-[56px] h-[56px] rounded-[12px] bg-[rgba(128,90,245,0.1)] group-hover:bg-[rgba(128,90,245,0.2)] transition-colors duration-300">
                  <i
                    className={`${feature.icon} text-[22px] theme-gradient`}
                  ></i>
                </div>
                <h4 className="title text-lg mb-3">{feature.title}</h4>
                <p className="text-[#99999C] text-[15px] leading-relaxed mb-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
