"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const features = [
  {
    icon: "fa-sharp fa-regular fa-scissors",
    title: "Cortes Inteligentes com IA",
    description:
      "A IA analisa o áudio, vídeo e sentimento para encontrar os momentos mais impactantes automaticamente.",
  },
  {
    icon: "fa-sharp fa-regular fa-closed-captioning",
    title: "Legendas Automáticas",
    description:
      "Legendas geradas com +97% de precisão em português e mais de 20 idiomas. Estilize com templates prontos.",
  },
  {
    icon: "fa-sharp fa-regular fa-crop",
    title: "Reenquadramento Automático",
    description:
      "Redimensiona seu vídeo para qualquer formato (9:16, 1:1, 16:9) mantendo o foco nos rostos e objetos.",
  },
  {
    icon: "fa-sharp fa-regular fa-fire",
    title: "Pontuação de Viralidade",
    description:
      "Cada corte recebe uma nota de potencial viral para você priorizar os melhores conteúdos.",
  },
  {
    icon: "fa-sharp fa-regular fa-palette",
    title: "Templates de Marca",
    description:
      "Aplique cores, logos e fontes da sua marca em todos os cortes para manter identidade visual consistente.",
  },
  {
    icon: "fa-sharp fa-regular fa-calendar-check",
    title: "Agendamento e Publicação",
    description:
      "Publique direto no TikTok, Instagram, YouTube Shorts e LinkedIn com agendamento integrado.",
  },
];

const Features = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-service-area rainbow-section-gap">
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
                <span className="theme-gradient">Tudo que você precisa</span>
              </h4>
              <h2 className="title mb--0">
                Recursos feitos para escalar <br /> seu conteúdo
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {features.map((feature, index) => (
            <div
              className="col-lg-4 col-md-6 col-12 mt--30"
              key={index}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay={100 + index * 100}
            >
              <div className="rainbow-box-card card-style-default testimonial-style-defalt has-bg-shaped tw:h-full">
                <div className="inner tw:p-5">
                  <div className="tw:flex tw:items-center tw:justify-center tw:w-12 tw:h-12 tw:rounded-lg tw:bg-gradient-to-r tw:from-[#805AF5]/20 tw:to-[#CD99FF]/20 tw:mb-4">
                    <i
                      className={`${feature.icon} tw:text-xl theme-gradient`}
                    ></i>
                  </div>
                  <h5 className="title tw:mb-3">{feature.title}</h5>
                  <p className="description tw:mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
