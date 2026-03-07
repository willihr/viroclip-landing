"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const useCases = [
  {
    icon: "fa-sharp fa-regular fa-video",
    title: "Criadores de Conteúdo",
    desc: "Transforme lives, vlogs e vídeos longos em dezenas de cortes para TikTok, Reels e Shorts sem esforço.",
    color: "#805AF5",
  },
  {
    icon: "fa-sharp fa-regular fa-podcast",
    title: "Podcasters",
    desc: "Extraia os melhores momentos do seu podcast automaticamente e alcance novas audiências em vídeo curto.",
    color: "#CD99FF",
  },
  {
    icon: "fa-sharp fa-regular fa-bullhorn",
    title: "Agências de Marketing",
    desc: "Escale a produção de conteúdo dos seus clientes entregando 10x mais vídeos pelo mesmo investimento.",
    color: "#805AF5",
  },
  {
    icon: "fa-sharp fa-regular fa-graduation-cap",
    title: "Educadores e Coaches",
    desc: "Converta aulas e mentorias longas em pílulas de conhecimento que viralizam e atraem novos alunos.",
    color: "#CD99FF",
  },
];

const UseCases = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Para quem é</span>
              </h4>
              <h2 className="title mb--0">
                Ideal para quem quer crescer com vídeos curtos
              </h2>
            </div>
          </div>
        </div>

        <div className="row row--15 mt--40 justify-content-center">
          {useCases.map((useCase, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30"
              key={index}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay={100 + index * 100}
            >
              <div
                className="service service__style--1 aiwave-style text-center"
                style={{ height: "100%" }}
              >
                <div className="icon">
                  <i
                    className={useCase.icon}
                    style={{ fontSize: "36px", color: useCase.color }}
                  ></i>
                </div>
                <div className="content">
                  <h4 className="title w-600" style={{ fontSize: "20px" }}>
                    {useCase.title}
                  </h4>
                  <p className="description b1 mb--0">{useCase.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
