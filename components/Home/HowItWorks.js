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
              <p className="description b1 !max-w-[560px] mx-auto">
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
              <div className="h-full p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-transparent hover:border-[rgba(99,102,241,0.4)] hover:from-[rgba(99,102,241,0.06)] transition-all duration-300 relative overflow-hidden flex flex-col">
                {/* Step number watermark */}
                <span className="absolute top-4 right-6 text-[80px] font-black text-white opacity-[0.04] leading-none select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(99,102,241,0.2)] to-[rgba(168,85,247,0.2)] flex items-center justify-center mb-5 border border-[rgba(99,102,241,0.3)]">
                  <i className={`${step.icon} text-xl theme-gradient`} style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}></i>
                </div>

                {/* Step badge */}
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(99,102,241,0.15)] text-[#a78bfa] mb-3 w-fit">
                  Passo {step.number}
                </span>

                <h4 className="!text-xl !font-bold !mb-3 text-white">
                  {step.title}
                </h4>
                <p className="!text-sm !mb-4 text-gray-400 !leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-[rgba(255,255,255,0.06)] text-gray-300 border border-[rgba(255,255,255,0.08)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Connector arrow (not on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center">
                    <i className="fa-sharp fa-solid fa-arrow-right text-[rgba(99,102,241,0.6)] text-lg"></i>
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
          <p className="!text-sm !mt-3 text-gray-400">
            Sem necessidade de cartão de crédito
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
