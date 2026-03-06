"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Sal from "sal.js";

const faqData = [
  {
    question: "Como o ViroClip funciona na prática?",
    answer:
      "Você cola o link do seu vídeo (YouTube, Twitch, Vimeo) ou faz upload do arquivo. Nossa IA analisa o conteúdo — transcrição, emoções, ritmo e picos de atenção — e gera automaticamente os melhores cortes para TikTok, Reels e Shorts, com legendas e formatação prontas.",
    isOpen: true,
  },
  {
    question: "Quais plataformas são suportadas para publicação?",
    answer:
      "Atualmente suportamos TikTok, Instagram Reels, YouTube Shorts e LinkedIn. Você pode publicar manualmente fazendo download dos cortes, ou conectar suas contas para publicação direta com um clique. Novas plataformas estão no nosso roadmap.",
    isOpen: false,
  },
  {
    question: "Preciso baixar algum software ou plugin?",
    answer:
      "Não! O ViroClip é 100% online. Basta acessar app.viroclip.com pelo navegador — funciona no Chrome, Firefox, Safari e Edge, sem instalação de nada.",
    isOpen: false,
  },
  {
    question: "O que são créditos e como funcionam?",
    answer:
      "Cada minuto de vídeo processado consome 1 crédito. No plano Gratuito você tem 30 créditos/mês — suficiente para testar bastante. No plano Viral você tem 300 créditos. Créditos não utilizados não acumulam para o próximo mês.",
    isOpen: false,
  },
  {
    question: "Posso cancelar ou mudar de plano a qualquer momento?",
    answer:
      "Sim, completamente. Você pode fazer upgrade, downgrade ou cancelar seu plano quando quiser, direto no painel. Não há fidelidade ou multas. Se cancelar, você continua com acesso até o fim do período pago.",
    isOpen: false,
  },
  {
    question: "O ViroClip funciona com vídeos em outros idiomas?",
    answer:
      "Sim! Nossa IA suporta transcrição e geração de legendas em Português, Inglês, Espanhol, Francês, Alemão, Italiano e mais 30 idiomas. A detecção de momentos virais funciona independentemente do idioma do vídeo.",
    isOpen: false,
  },
  {
    question: "A qualidade dos cortes é boa para publicação profissional?",
    answer:
      "Sim. Os cortes são exportados em até 1080p nos planos pagos, com opções de aspecto 9:16 (vertical), 1:1 (quadrado) e 16:9 (horizontal). Você ainda pode personalizar com sua logo, cores e estilos de legenda antes de exportar.",
    isOpen: false,
  },
];

const FaqItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(item.isOpen);

  return (
    <div className="mb-3">
      <div
        className={`rounded-xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? "border-[rgba(99,102,241,0.4)] bg-[rgba(99,102,241,0.06)]"
            : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.15)]"
        }`}
      >
        <button
          className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`font-semibold text-base pr-4 transition-colors duration-300 ${
              isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
            }`}
          >
            {item.question}
          </span>
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-[rgba(99,102,241,0.3)] text-[#a78bfa]"
                : "bg-[rgba(255,255,255,0.06)] text-gray-400 group-hover:bg-[rgba(255,255,255,0.1)]"
            }`}
          >
            <i
              className={`fa-sharp fa-solid ${
                isOpen ? "fa-minus" : "fa-plus"
              } text-xs`}
            ></i>
          </span>
        </button>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="px-5 pb-5 !text-sm !mb-0 text-gray-400 !leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  useEffect(() => {
    Sal();
  }, []);

  const half = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, half);
  const rightColumn = faqData.slice(half);

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
                <span className="theme-gradient">Tire suas dúvidas</span>
              </h4>
              <h2 className="title mb--20">Perguntas frequentes</h2>
              <p className="description b1 !max-w-[500px] mx-auto">
                Não encontrou o que procurava?{" "}
                <Link href="/contact" className="text-[#a78bfa] hover:underline">
                  Fale com nosso suporte
                </Link>{" "}
                — respondemos em minutos.
              </p>
            </div>
          </div>
        </div>

        {/* Two-column FAQ */}
        <div className="row g-4">
          <div
            className="col-lg-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-duration="600"
            data-sal-delay="150"
          >
            {leftColumn.map((item, index) => (
              <FaqItem key={index} item={item} index={index} />
            ))}
          </div>
          <div
            className="col-lg-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-duration="600"
            data-sal-delay="250"
          >
            {rightColumn.map((item, index) => (
              <FaqItem key={index} item={item} index={index + half} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
