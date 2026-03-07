"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const features = [
  {
    icon: "fa-sharp fa-solid fa-brain",
    title: "IA que encontra o viral",
    description:
      "Nosso modelo analisa ritmo, emoção, palavras-chave e picos de atenção para selecionar automaticamente os trechos com maior chance de viralizar.",
    highlight: true,
  },
  {
    icon: "fa-sharp fa-solid fa-closed-captioning",
    title: "Legendas automáticas",
    description:
      "Geração automática de legendas em Português, Inglês, Espanhol e outros idiomas, com estilos animados para aumentar o tempo de visualização.",
    highlight: false,
  },
  {
    icon: "fa-sharp fa-solid fa-share-nodes",
    title: "Publicação multi-plataforma",
    description:
      "Publique no TikTok, Instagram Reels, YouTube Shorts e LinkedIn de uma só vez. Agende posts e mantenha sua presença digital constante.",
    highlight: false,
  },
  {
    icon: "fa-sharp fa-solid fa-palette",
    title: "Branding personalizado",
    description:
      "Adicione sua logo, cores, fontes e marca d'água aos cortes. Mantenha identidade visual consistente em todas as redes sociais.",
    highlight: false,
  },
  {
    icon: "fa-sharp fa-solid fa-film",
    title: "Renderização em 1080p",
    description:
      "Todos os cortes exportados em alta definição com suporte a formatos verticais (9:16), quadrados (1:1) e horizontais (16:9) prontos para cada rede.",
    highlight: false,
  },
  {
    icon: "fa-sharp fa-solid fa-chart-line",
    title: "Analytics de desempenho",
    description:
      "Acompanhe visualizações, engajamento e crescimento dos seus cortes. Entenda o que funciona e otimize sua estratégia de conteúdo.",
    highlight: false,
  },
];

const Features = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-section-gap">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center pb--50 sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Por que escolher o ViroClip</span>
              </h4>
              <h2 className="title mb--20">
                Tudo que você precisa para
                <br />
                dominar o conteúdo curto
              </h2>
              <p className="description b1 tw-max-w-[560px] tw-mx-auto">
                Ferramentas profissionais de edição, publicação e análise — tudo
                em um lugar, funcionando no piloto automático.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div
              className="col-lg-4 col-md-6 col-12 sal-animate"
              key={index}
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-delay={`${100 + (index % 3) * 100}`}
            >
              <div
                className={`tw-h-full tw-p-6 tw-rounded-2xl tw-border tw-transition-all tw-duration-300 hover:tw--translate-y-1 tw-group ${
                  feature.highlight
                    ? "tw-border-[rgba(99,102,241,0.5)] tw-bg-gradient-to-br tw-from-[rgba(99,102,241,0.12)] tw-to-[rgba(168,85,247,0.08)]"
                    : "tw-border-[rgba(255,255,255,0.08)] tw-bg-[rgba(255,255,255,0.02)] hover:tw-border-[rgba(99,102,241,0.3)] hover:tw-bg-[rgba(99,102,241,0.04)]"
                }`}
              >
                {feature.highlight && (
                  <span className="tw-inline-block tw-text-xs tw-font-bold tw-px-3 tw-py-1 tw-rounded-full tw-bg-[rgba(99,102,241,0.25)] tw-text-[#a78bfa] tw-mb-4 tw-uppercase tw-tracking-wider">
                    ⚡ Destaque
                  </span>
                )}
                <div
                  className={`tw-w-12 tw-h-12 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4 tw-transition-all tw-duration-300 ${
                    feature.highlight
                      ? "tw-bg-gradient-to-br tw-from-[rgba(99,102,241,0.3)] tw-to-[rgba(168,85,247,0.3)] tw-border tw-border-[rgba(99,102,241,0.4)]"
                      : "tw-bg-[rgba(255,255,255,0.06)] tw-border tw-border-[rgba(255,255,255,0.1)] group-hover:tw-bg-[rgba(99,102,241,0.15)] group-hover:tw-border-[rgba(99,102,241,0.3)]"
                  }`}
                >
                  <i
                    className={`${feature.icon} tw-text-lg`}
                    style={{
                      background: "linear-gradient(90deg, #6366f1, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  ></i>
                </div>
                <h5 className="tw-text-lg tw-font-bold tw-mb-2 tw-text-white group-hover:tw-text-[#a78bfa] tw-transition-colors tw-duration-300">
                  {feature.title}
                </h5>
                <p className="tw-text-sm tw-mb-0 tw-text-gray-400 tw-leading-relaxed">
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
