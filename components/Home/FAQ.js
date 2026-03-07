"use client";

import React, { useEffect, useState } from "react";
import Sal from "sal.js";

const faqData = [
  {
    question: "O que é o ViroClip?",
    answer:
      "O ViroClip é uma plataforma de IA que transforma automaticamente vídeos longos (podcasts, lives, vlogs, aulas) em cortes curtos otimizados para TikTok, Instagram Reels, YouTube Shorts e outras redes sociais.",
  },
  {
    question: "Quais formatos de vídeo são suportados?",
    answer:
      "Aceitamos a maioria dos formatos populares como MP4, MOV, AVI, MKV e WebM. Você também pode simplesmente colar o link de um vídeo do YouTube, e o ViroClip faz o resto.",
  },
  {
    question: "Quanto tempo leva para gerar os cortes?",
    answer:
      "O processamento depende do tamanho do vídeo, mas em geral um vídeo de 1 hora gera entre 10 e 25 cortes em menos de 5 minutos. É até 20x mais rápido que editar manualmente.",
  },
  {
    question: "As legendas são geradas automaticamente?",
    answer:
      "Sim! O ViroClip gera legendas animadas automaticamente com alta precisão, incluindo destaque de palavras-chave e emojis. Você pode personalizar cores, fontes e estilo.",
  },
  {
    question: "Posso usar o ViroClip gratuitamente?",
    answer:
      "Sim, temos um plano gratuito para você testar a ferramenta. Ele inclui créditos limitados por mês para você experimentar a qualidade dos cortes antes de escolher um plano pago.",
  },
  {
    question: "O ViroClip funciona em português?",
    answer:
      "Sim! O ViroClip suporta múltiplos idiomas, incluindo português brasileiro. As legendas, detecção de momentos-chave e toda a interface funcionam perfeitamente em PT-BR.",
  },
  {
    question: "Posso publicar direto nas redes sociais?",
    answer:
      "Sim. O ViroClip permite que você agende e publique seus cortes diretamente no TikTok, Instagram, YouTube e outras plataformas, tudo de um só lugar.",
  },
  {
    question: "É possível personalizar os cortes com minha marca?",
    answer:
      "Sim! Com os templates de marca, você pode aplicar automaticamente suas cores, fontes, logo e vinhetas de intro/outro em todos os cortes gerados.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    Sal();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="rainbow-accordion-area rainbow-section-gap">
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
                <span className="theme-gradient">Perguntas frequentes</span>
              </h4>
              <h2 className="title mb--0">Tire suas dúvidas</h2>
            </div>
          </div>
        </div>

        <div className="row mt--40 justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="rainbow-accordion-style accordion">
              {faqData.map((item, index) => (
                <div
                  className="accordion-item card"
                  key={index}
                  data-sal="slide-up"
                  data-sal-duration="700"
                  data-sal-delay={100 + index * 50}
                  style={{
                    background: "var(--color-lessdark, #21242D)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "8px",
                    marginBottom: "12px",
                    overflow: "hidden",
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        padding: "20px 24px",
                        textAlign: "left",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#fff",
                        fontSize: "17px",
                        fontWeight: "600",
                        fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      {item.question}
                      <i
                        className={`fa-sharp fa-solid ${
                          activeIndex === index ? "fa-minus" : "fa-plus"
                        }`}
                        style={{
                          fontSize: "14px",
                          opacity: 0.6,
                          flexShrink: 0,
                          marginLeft: "16px",
                        }}
                      ></i>
                    </button>
                  </h2>
                  <div
                    style={{
                      maxHeight: activeIndex === index ? "300px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        padding: "0 24px 20px",
                        color: "var(--color-body, #BCC3D7)",
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
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

export default FAQ;
