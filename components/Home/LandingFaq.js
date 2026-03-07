"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";
import Link from "next/link";

const faqItems = [
  {
    id: "faq1",
    question: "O que é o ViroClip?",
    answer:
      "O ViroClip é uma plataforma de IA que transforma vídeos longos em cortes curtos e otimizados para redes sociais como TikTok, Instagram Reels e YouTube Shorts. Você cola o link ou faz upload do vídeo, e a IA cuida do resto.",
    isExpand: true,
  },
  {
    id: "faq2",
    question: "Quais plataformas de vídeo são suportadas?",
    answer:
      "Você pode importar vídeos do YouTube, Instagram, TikTok, Vimeo e também fazer upload direto de arquivos MP4, MOV e outros formatos populares diretamente do seu computador.",
    isExpand: false,
  },
  {
    id: "faq3",
    question: "Como funciona o sistema de créditos?",
    answer:
      "1 crédito equivale a 1 minuto de vídeo processado. No plano Gratuito você tem 30 créditos por mês. No plano Viral, 300 créditos por mês. No plano Empresa, os créditos são personalizados conforme sua demanda.",
    isExpand: false,
  },
  {
    id: "faq4",
    question: "Preciso instalar algum software?",
    answer:
      "Não! O ViroClip funciona 100% no navegador. Basta criar sua conta e começar a usar — sem downloads, sem instalações, funciona em qualquer dispositivo.",
    isExpand: false,
  },
  {
    id: "faq5",
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Sim, sem burocracia e sem taxa de cancelamento. Você mantém acesso a todos os recursos até o fim do período pago. Sem surpresas na fatura.",
    isExpand: false,
  },
  {
    id: "faq6",
    question: "O ViroClip funciona com vídeos em qualquer idioma?",
    answer:
      "Sim! A IA do ViroClip suporta múltiplos idiomas, incluindo português, inglês, espanhol, francês e outros. As legendas são geradas automaticamente no idioma do vídeo.",
    isExpand: false,
  },
  {
    id: "faq7",
    question: "Qual é a qualidade dos cortes gerados?",
    answer:
      "No plano Gratuito, os cortes são renderizados em 720p. No plano Viral e Empresa, em Full HD 1080p — qualidade profissional pronta para publicar.",
    isExpand: false,
  },
];

const LandingFaq = () => {
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
                <span className="theme-gradient">Dúvidas frequentes</span>
              </h4>
              <h2 className="title mb--20">Perguntas frequentes</h2>
              <p className="b1 !opacity-80">
                Não encontrou sua resposta?{" "}
                <Link
                  href="https://app.viroclip.com/signup"
                  className="!underline theme-gradient"
                  style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Fale com a gente
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="row mt--40">
          <div
            className="col-lg-8 offset-lg-2"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="150"
          >
            <div
              className="rainbow-accordion-style accordion"
              id="viroclipFaqAccordion"
            >
              {faqItems.map((item, index) => (
                <div className="accordion-item card" key={item.id}>
                  <h2
                    className="accordion-header card-header"
                    id={`heading-${item.id}`}
                  >
                    <button
                      className={`accordion-button ${
                        item.isExpand ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${item.id}`}
                      aria-expanded={item.isExpand ? "true" : "false"}
                      aria-controls={`collapse-${item.id}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${item.id}`}
                    className={`accordion-collapse collapse ${
                      item.isExpand ? "show" : ""
                    }`}
                    aria-labelledby={`heading-${item.id}`}
                    data-bs-parent="#viroclipFaqAccordion"
                  >
                    <div className="accordion-body card-body">
                      {item.answer}
                    </div>
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

export default LandingFaq;
