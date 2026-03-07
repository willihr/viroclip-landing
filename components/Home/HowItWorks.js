"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const steps = [
  {
    number: "01",
    icon: "fa-sharp fa-regular fa-link",
    title: "Cole o link ou envie o vídeo",
    desc: "Basta colar o link do YouTube, podcast ou qualquer vídeo longo — ou fazer upload direto do arquivo.",
  },
  {
    number: "02",
    icon: "fa-sharp fa-regular fa-wand-magic-sparkles",
    title: "A IA analisa e gera os cortes",
    desc: "Nossa IA identifica os melhores momentos, adiciona legendas animadas e reformata para formato vertical.",
  },
  {
    number: "03",
    icon: "fa-sharp fa-regular fa-share-nodes",
    title: "Publique em todas as redes",
    desc: "Revise, ajuste se quiser e publique no TikTok, Reels, Shorts e mais — tudo com poucos cliques.",
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
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Simples assim</span>
              </h4>
              <h2 className="title mb--0">
                De vídeo longo a cortes virais em 3 passos
              </h2>
            </div>
          </div>
        </div>

        <div className="row row--15 mt--60">
          {steps.map((step, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay={100 + index * 150}
            >
              <div
                className="service service__style--1 aiwave-style text-center"
                style={{ position: "relative" }}
              >
                <div
                  className="theme-gradient"
                  style={{
                    fontSize: "48px",
                    fontWeight: "800",
                    opacity: 0.15,
                    position: "absolute",
                    top: "12px",
                    right: "20px",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>
                <div className="icon">
                  <i
                    className={step.icon}
                    style={{ fontSize: "40px" }}
                  ></i>
                </div>
                <div className="content">
                  <h4 className="title w-600">{step.title}</h4>
                  <p className="description b1 mb--0">{step.desc}</p>
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
