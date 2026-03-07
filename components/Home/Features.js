"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const featureList = [
  {
    icon: "fa-sharp fa-regular fa-brain-circuit",
    title: "Detecção com IA",
    desc: "Nossa IA identifica automaticamente os momentos com maior potencial viral no seu vídeo — sem você precisar assistir tudo.",
  },
  {
    icon: "fa-sharp fa-regular fa-closed-captioning",
    title: "Legendas Animadas",
    desc: "Legendas dinâmicas com emojis, fontes e cores para prender a atenção do espectador desde os primeiros segundos.",
  },
  {
    icon: "fa-sharp fa-regular fa-video",
    title: "Editor Profissional",
    desc: "Redimensione, ajuste o enquadramento, adicione textos e logos diretamente na plataforma, sem precisar de outro software.",
  },
  {
    icon: "fa-sharp fa-regular fa-share-nodes",
    title: "Publicação Multi-plataforma",
    desc: "Publique no TikTok, Instagram Reels e YouTube Shorts com um clique. Formato otimizado para cada rede automaticamente.",
  },
  {
    icon: "fa-sharp fa-regular fa-calendar-clock",
    title: "Agendamento Inteligente",
    desc: "Programe seus posts para os horários de maior engajamento e mantenha uma presença consistente sem esforço.",
  },
  {
    icon: "fa-sharp fa-regular fa-droplet-slash",
    title: "Sem Marca D'água",
    desc: "Cortes limpos e profissionais prontos para publicar. Sem logo de terceiros atrapalhando sua marca pessoal.",
  },
];

const Features = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-section-gap aiwave-bg-gradient">
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
                <span className="theme-gradient">Tudo que você precisa</span>
              </h4>
              <h2 className="title mb--20">
                Ferramentas poderosas para crescer nas redes sociais
              </h2>
              <p className="b1 !opacity-80 !max-w-[600px] !mx-auto">
                Do corte à publicação, o ViroClip cuida de tudo para que você
                foque no que importa: criar conteúdo incrível.
              </p>
            </div>
          </div>
        </div>

        <div className="row row--15 mt--40">
          {featureList.map((feature, index) => (
            <div
              className="col-lg-4 col-md-6 col-12 mt--30"
              key={index}
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay={100 + (index % 3) * 100}
            >
              <div className="rainbow-box-card card-style-default aiwave-service-default !h-full">
                <div className="inner">
                  <div className="icon !mb-[20px]">
                    <i
                      className={feature.icon}
                      style={{ fontSize: "36px" }}
                    ></i>
                  </div>
                  <div className="description">
                    <h5 className="title">{feature.title}</h5>
                    <p className="desc">{feature.desc}</p>
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

export default Features;
