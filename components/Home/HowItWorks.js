"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const steps = [
  {
    number: "01",
    icon: "fa-sharp fa-regular fa-link",
    title: "Cole o link ou envie o vídeo",
    description:
      "Basta colar o link do YouTube, Google Drive ou fazer upload direto. Aceitamos vídeos de até 4 horas.",
  },
  {
    number: "02",
    icon: "fa-sharp fa-regular fa-wand-magic-sparkles",
    title: "A IA analisa e gera os cortes",
    description:
      "Nossa inteligência artificial identifica os melhores momentos, adiciona legendas animadas e formata para cada rede social.",
  },
  {
    number: "03",
    icon: "fa-sharp fa-regular fa-share-nodes",
    title: "Publique em todas as redes",
    description:
      "Agende e publique automaticamente no TikTok, Instagram Reels, YouTube Shorts e mais, com um clique.",
  },
];

const HowItWorks = () => {
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
            <span className="theme-gradient">Simples e Rápido</span>
          </h4>
          <h2
            className="title w-full"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="200"
          >
            Como funciona
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-y-8 -mx-[15px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-[15px]"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay={150 + index * 100}
            >
              <div className="relative rounded-[10px] bg-[rgba(0,0,0,0.15)] border border-[rgba(255,255,255,0.05)] p-8 h-full text-center transition-all duration-300 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(0,0,0,0.25)] group">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 theme-gradient text-sm font-bold bg-[#0F0F12] border border-[rgba(255,255,255,0.1)] rounded-full w-8 h-8 flex items-center justify-center">
                  {step.number}
                </span>
                <div className="mb-5 inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[rgba(128,90,245,0.1)] group-hover:bg-[rgba(128,90,245,0.2)] transition-colors duration-300">
                  <i
                    className={`${step.icon} text-[28px] theme-gradient`}
                  ></i>
                </div>
                <h4 className="title text-lg mb-3">{step.title}</h4>
                <p className="text-[#99999C] text-[15px] leading-relaxed mb-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
