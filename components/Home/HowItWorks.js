"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const steps = [
  {
    num: "01",
    icon: "fa-sharp fa-regular fa-link",
    title: "Cole o link do vídeo",
    desc: "Cole um link do YouTube, Instagram, TikTok, Vimeo ou faça upload direto do seu computador. Simples assim.",
  },
  {
    num: "02",
    icon: "fa-sharp fa-regular fa-wand-magic-sparkles",
    title: "A IA cria os melhores cortes",
    desc: "Nossa IA analisa seu conteúdo, detecta os momentos mais virais e gera cortes prontos com legendas animadas.",
  },
  {
    num: "03",
    icon: "fa-sharp fa-regular fa-rocket",
    title: "Publique em todas as redes",
    desc: "Publique direto no TikTok, Instagram Reels e YouTube Shorts ou agende para os horários de maior engajamento.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-section-gap">
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
                <span className="theme-gradient">Simples assim</span>
              </h4>
              <h2 className="title mb--20">Como o ViroClip funciona</h2>
              <p className="b1 !opacity-80 !max-w-[560px] !mx-auto">
                Em 3 passos, um vídeo longo vira dezenas de cortes prontos para
                viralizar
              </p>
            </div>
          </div>
        </div>

        <div className="row row--15 mt--40">
          {steps.map((step, index) => (
            <div
              className="col-lg-4 col-md-6 col-12 mt--30"
              key={index}
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay={150 + index * 100}
            >
              <div className="rainbow-box-card card-style-default !text-center !p-[40px_32px]">
                <div className="inner">
                  <div
                    className="!text-[56px] !font-black !leading-none !mb-[16px] theme-gradient"
                    style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {step.num}
                  </div>
                  <div className="icon !mb-[16px]">
                    <i className={step.icon} style={{ fontSize: "32px" }}></i>
                  </div>
                  <h5 className="title">{step.title}</h5>
                  <p className="description">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connector arrows between steps — desktop only */}
        <div className="row mt--30 d-none d-lg-flex align-items-center justify-content-center">
          <p className="b2 !text-center !opacity-60 !mb-0">
            Resultado: mais alcance, mais seguidores, mais engajamento — sem
            horas de edição.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
