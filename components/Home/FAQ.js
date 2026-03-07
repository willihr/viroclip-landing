"use client";

import React, { useEffect, useState } from "react";
import Sal from "sal.js";
import Link from "next/link";

const faqItems = [
  {
    question: "Como o ViroClip funciona?",
    answer:
      "Você cola o link de um vídeo ou faz upload de um arquivo. Nossa IA analisa o conteúdo, identifica os melhores momentos e gera automaticamente dezenas de cortes otimizados para redes sociais como TikTok, Instagram Reels e YouTube Shorts.",
  },
  {
    question: "Que tipos de vídeo posso usar?",
    answer:
      "Qualquer vídeo longo: podcasts, lives, webinars, palestras, vlogs, entrevistas, gameplays e mais. Aceitamos links do YouTube, Google Drive e upload direto de arquivos nos formatos MP4, MOV e WebM.",
  },
  {
    question: "O que são créditos?",
    answer:
      "1 crédito = 1 minuto de vídeo processado. Um vídeo de 60 minutos usa 60 créditos. O plano gratuito inclui 30 créditos por mês, e o plano Viral inclui 300 créditos.",
  },
  {
    question: "As legendas são geradas automaticamente?",
    answer:
      "Sim! O ViroClip gera legendas animadas automaticamente com alta precisão em português e outros idiomas. Você pode editar o texto, estilo e posição antes de publicar.",
  },
  {
    question: "Em quais redes sociais posso publicar?",
    answer:
      "Você pode publicar diretamente no TikTok, Instagram Reels, YouTube Shorts, Facebook e LinkedIn. O agendamento automático permite programar posts nos melhores horários.",
  },
  {
    question: "Posso usar o ViroClip gratuitamente?",
    answer:
      "Sim! O plano gratuito inclui 30 créditos por mês, cortes com IA, legendas animadas e renderização em 720p. Não precisa de cartão de crédito para começar.",
  },
  {
    question: "Os vídeos têm marca d'água?",
    answer:
      "No plano gratuito, os vídeos incluem uma marca d'água discreta do ViroClip. Nos planos pagos (Viral e Empresa), a marca d'água é removida completamente.",
  },
  {
    question: "Posso personalizar os cortes antes de publicar?",
    answer:
      "Sim! O ViroClip tem um editor integrado onde você pode ajustar o início e fim de cada corte, editar legendas, adicionar seu logo e personalizar cores e estilos.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    Sal();
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rainbow-section-gap">
      <div className="container">
        <div className="flex flex-wrap -mx-[15px] gap-y-10">
          <div className="w-full lg:w-5/12 px-[15px]">
            <div
              className="lg:sticky lg:top-[100px]"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="150"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Dúvidas?</span>
              </h4>
              <h2 className="title mb-[20px]">Perguntas Frequentes</h2>
              <p className="text-[#99999C] text-[16px] leading-relaxed mb-8">
                Tudo que você precisa saber para começar a transformar seus
                vídeos em conteúdo viral.
              </p>
              <Link
                className="btn-default"
                href="https://app.viroclip.com/signup"
              >
                Comece Grátis Agora
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-7/12 px-[15px]">
            <div className="flex flex-col gap-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-[10px] border transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[rgba(128,90,245,0.08)] border-[rgba(128,90,245,0.25)]"
                      : "bg-[rgba(0,0,0,0.15)] border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.12)]"
                  }`}
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay={150 + (index % 4) * 50}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                    onClick={() => toggle(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-white text-[15px] font-medium pr-4">
                      {item.question}
                    </span>
                    <i
                      className={`fa-sharp fa-regular ${
                        openIndex === index ? "fa-minus" : "fa-plus"
                      } text-[14px] theme-gradient flex-none transition-transform duration-300`}
                    ></i>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-[#99999C] text-[14px] leading-relaxed mb-0">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
