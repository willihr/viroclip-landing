"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Sal from "sal.js";

const steps = [
  {
    number: "01",
    icon: "fa-sharp fa-solid fa-link",
    title: "Cole o link ou faça upload",
    description:
      "Basta colar o link do YouTube, Vimeo, Twitch ou fazer upload direto do arquivo. Suportamos MP4, MOV, AVI e muito mais.",
    tags: ["YouTube", "Twitch", "Upload direto"],
  },
  {
    number: "02",
    icon: "fa-sharp fa-solid fa-wand-magic-sparkles",
    title: "IA detecta os melhores momentos",
    description:
      "Nossa IA analisa o áudio, transcrição e engajamento para identificar automaticamente os trechos com maior potencial viral.",
    tags: ["Análise de IA", "Detecção viral", "Transcrição automática"],
  },
  {
    number: "03",
    icon: "fa-sharp fa-solid fa-rocket",
    title: "Publique em todas as redes",
    description:
      "Com um clique, publique seus cortes prontos no TikTok, Instagram Reels, YouTube Shorts e LinkedIn — com legendas e branding incluídos.",
    tags: ["TikTok", "Reels", "YouTube Shorts"],
  },
];

const HowItWorks = () => {
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
                <span className="theme-gradient">Simples como deve ser</span>
              </h4>
              <h2 className="title mb--20">
                De vídeo longo a viral
                <br />
                em 3 passos
              </h2>
              <p className="description b1 tw-max-w-[560px] tw-mx-auto">
                Sem necessidade de edição manual. O ViroClip faz tudo
                automaticamente para que você foque no que importa: criar.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="row g-4 align-items-stretch">
          {steps.map((step, index) => (
            <div
              className="col-lg-4 col-md-6 col-12 sal-animate"
              key={index}
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-delay={`${150 + index * 100}`}
            >
              <div className="tw-h-full tw-p-6 tw-rounded-2xl tw-border tw-border-[rgba(255,255,255,0.1)] tw-bg-gradient-to-b tw-from-[rgba(255,255,255,0.04)] tw-to-transparent hover:tw-border-[rgba(99,102,241,0.4)] hover:tw-from-[rgba(99,102,241,0.06)] tw-transition-all tw-duration-300 tw-relative tw-overflow-hidden tw-flex tw-flex-col">
                {/* Step number watermark */}
                <span className="tw-absolute tw-top-4 tw-right-6 tw-text-[80px] tw-font-black tw-text-white tw-opacity-[0.04] tw-leading-none tw-select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="tw-w-14 tw-h-14 tw-rounded-xl tw-bg-gradient-to-br tw-from-[rgba(99,102,241,0.2)] tw-to-[rgba(168,85,247,0.2)] tw-flex tw-items-center tw-justify-center tw-mb-5 tw-border tw-border-[rgba(99,102,241,0.3)]">
                  <i
                    className={`${step.icon} tw-text-xl`}
                    style={{
                      background: "linear-gradient(90deg, #6366f1, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  ></i>
                </div>

                {/* Step badge */}
                <span className="tw-inline-block tw-text-xs tw-font-semibold tw-px-3 tw-py-1 tw-rounded-full tw-bg-[rgba(99,102,241,0.15)] tw-text-[#a78bfa] tw-mb-3 tw-w-fit">
                  Passo {step.number}
                </span>

                <h4 className="tw-text-xl tw-font-bold tw-mb-3 tw-text-white">
                  {step.title}
                </h4>
                <p className="tw-text-sm tw-mb-4 tw-text-gray-400 tw-leading-relaxed tw-flex-grow">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="tw-flex tw-flex-wrap tw-gap-2">
                  {step.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="tw-text-xs tw-px-3 tw-py-1 tw-rounded-full tw-bg-[rgba(255,255,255,0.06)] tw-text-gray-300 tw-border tw-border-[rgba(255,255,255,0.08)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Connector arrow (not on last) */}
                {index < steps.length - 1 && (
                  <div className="tw-hidden lg:tw-flex tw-absolute tw-top-1/2 tw--right-5 tw--translate-y-1/2 tw-z-10 tw-w-10 tw-h-10 tw-items-center tw-justify-center">
                    <i className="fa-sharp fa-solid fa-arrow-right tw-text-[rgba(99,102,241,0.6)] tw-text-lg"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA below steps */}
        <div
          className="text-center mt--50 sal-animate"
          data-sal="slide-up"
          data-sal-duration="600"
          data-sal-delay="500"
        >
          <Link
            className="btn-default btn-large"
            href="https://app.viroclip.com/signup"
          >
            Começar grátis agora{" "}
            <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
          </Link>
          <p className="tw-text-sm tw-mt-3 tw-text-gray-400">
            Sem necessidade de cartão de crédito
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
