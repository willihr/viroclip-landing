"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Sal from "sal.js";

const faqData = [
  {
    question: "O que é o ViroClip?",
    answer:
      "O ViroClip é uma plataforma de IA que transforma vídeos longos (podcasts, lives, webinars, vlogs) em dezenas de cortes curtos otimizados para redes sociais como TikTok, Instagram Reels e YouTube Shorts.",
    isExpand: true,
  },
  {
    question: "Quais formatos de vídeo são suportados?",
    answer:
      "Você pode enviar vídeos nos formatos MP4, MOV, AVI, MKV, WEBM ou simplesmente colar um link do YouTube, Vimeo ou Twitch. Aceitamos vídeos de até 4 horas de duração.",
  },
  {
    question: "As legendas são geradas automaticamente?",
    answer:
      "Sim! O ViroClip gera legendas automáticas com mais de 97% de precisão em português e mais de 20 idiomas. Você pode editar, estilizar e posicionar as legendas com templates prontos.",
  },
  {
    question: "Posso publicar direto nas redes sociais?",
    answer:
      "Sim. O ViroClip se integra com TikTok, Instagram, YouTube Shorts e LinkedIn, permitindo que você publique ou agende seus cortes diretamente pela plataforma.",
  },
  {
    question: "O que são créditos e como funcionam?",
    answer:
      "1 crédito = 1 minuto de vídeo processado. Por exemplo, um vídeo de 60 minutos consome 60 créditos. O plano gratuito inclui 30 créditos/mês para você testar sem compromisso.",
  },
  {
    question: "Posso cancelar meu plano a qualquer momento?",
    answer:
      "Sim, todos os planos podem ser cancelados a qualquer momento sem multas ou taxas. Você continua tendo acesso até o fim do período já pago.",
  },
];

const FAQ = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-accordion-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center pb--60"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Tire suas dúvidas</span>
              </h4>
              <h2 className="title mb--0">Perguntas Frequentes</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="rainbow-accordion-style accordion">
              <div className="accordion" id="faqAccordion">
                {faqData.map((item, index) => (
                  <div
                    className="accordion-item card"
                    key={index}
                    data-sal="slide-up"
                    data-sal-duration="700"
                    data-sal-delay={100 + index * 50}
                  >
                    <h2
                      className="accordion-header card-header"
                      id={`faqHeading${index}`}
                    >
                      <button
                        className={`accordion-button ${
                          !item.isExpand ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqCollapse${index}`}
                        aria-expanded={item.isExpand ? "true" : "false"}
                        aria-controls={`faqCollapse${index}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`faqCollapse${index}`}
                      className={`accordion-collapse collapse ${
                        item.isExpand ? "show" : ""
                      }`}
                      aria-labelledby={`faqHeading${index}`}
                      data-bs-parent="#faqAccordion"
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
    </div>
  );
};

export default FAQ;
