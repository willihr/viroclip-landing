"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const steps = [
  {
    number: "01",
    icon: "fa-sharp fa-regular fa-link",
    title: "Cole o link ou envie o vídeo",
    description:
      "Basta colar o link do YouTube, podcast ou qualquer vídeo longo — ou fazer upload direto do arquivo.",
  },
  {
    number: "02",
    icon: "fa-sharp fa-regular fa-wand-magic-sparkles",
    title: "A IA analisa e gera os cortes",
    description:
      "Nossa IA identifica os melhores momentos, adiciona legendas automáticas, reenquadra e cria dezenas de cortes prontos.",
  },
  {
    number: "03",
    icon: "fa-sharp fa-regular fa-share-nodes",
    title: "Publique em todas as redes",
    description:
      "Revise, edite se quiser e publique diretamente no TikTok, Instagram Reels, YouTube Shorts e mais — tudo com poucos cliques.",
  },
];

const HowItWorks = () => {
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
                <span className="theme-gradient">Simples e rápido</span>
              </h4>
              <h2 className="title mb--0">
                Como funciona o ViroClip
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {steps.map((step, index) => (
            <div
              className="col-lg-4 col-md-6 col-12 mt--30"
              key={index}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay={100 + index * 150}
            >
              <div className="rainbow-box-card card-style-default testimonial-style-defalt has-bg-shaped">
                <div className="inner p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#805AF5] to-[#CD99FF]">
                      <i className={`${step.icon} text-white text-xl`}></i>
                    </div>
                    <span className="text-[40px] font-bold opacity-20">
                      {step.number}
                    </span>
                  </div>
                  <h4 className="title mb-3">{step.title}</h4>
                  <p className="description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
