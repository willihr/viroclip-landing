"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const features = [
  {
    icon: "fa-sharp fa-regular fa-scissors",
    title: "Cortes Inteligentes com IA",
    desc: "A IA analisa contexto, emoção e engajamento para selecionar os trechos com maior potencial viral do seu vídeo.",
  },
  {
    icon: "fa-sharp fa-regular fa-closed-captioning",
    title: "Legendas Animadas Automáticas",
    desc: "Legendas estilizadas geradas automaticamente com destaque de palavras-chave e emojis para prender a atenção.",
  },
  {
    icon: "fa-sharp fa-regular fa-crop-simple",
    title: "Reenquadramento Automático",
    desc: "Reformata automaticamente para 9:16, 1:1 ou 16:9, mantendo o foco no que importa com rastreamento inteligente.",
  },
  {
    icon: "fa-sharp fa-regular fa-fire",
    title: "Score de Viralidade",
    desc: "Cada corte recebe uma pontuação de 0 a 100 prevendo seu potencial de engajamento nas redes sociais.",
  },
  {
    icon: "fa-sharp fa-regular fa-palette",
    title: "Templates de Marca",
    desc: "Aplique suas cores, fontes, logo e vinhetas automaticamente em todos os cortes para manter consistência.",
  },
  {
    icon: "fa-sharp fa-regular fa-calendar-clock",
    title: "Agendamento e Publicação",
    desc: "Agende e publique seus cortes diretamente no TikTok, Instagram Reels, YouTube Shorts e mais.",
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
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Recursos poderosos</span>
              </h4>
              <h2 className="title mb--0">
                Tudo que você precisa para dominar os vídeos curtos
              </h2>
            </div>
          </div>
        </div>

        <div className="row row--15 mt--40">
          {features.map((feature, index) => (
            <div
              className="col-lg-4 col-md-6 col-12 mt--30"
              key={index}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay={100 + (index % 3) * 150}
            >
              <div className="service service__style--1 aiwave-style text-center">
                <div className="icon">
                  <i
                    className={feature.icon}
                    style={{ fontSize: "36px" }}
                  ></i>
                </div>
                <div className="content">
                  <h4 className="title w-600">{feature.title}</h4>
                  <p className="description b1 mb--0">{feature.desc}</p>
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
