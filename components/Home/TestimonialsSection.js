"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Sal from "sal.js";

const testimonials = [
  {
    quote:
      "Eu gravava 1 vídeo por semana e ficava horas editando cortes. Agora gravo 1 vídeo e o ViroClip me entrega 15+ cortes prontos. Meu crescimento no TikTok triplicou.",
    name: "Lucas Ferreira",
    role: "Criador de conteúdo",
    metric: "3x mais seguidores",
  },
  {
    quote:
      "Nossos clientes precisavam de presença em vídeo curto, mas o custo de edição era alto demais. Com o ViroClip, entregamos 10x mais conteúdo pelo mesmo custo.",
    name: "Mariana Costa",
    role: "Diretora de agência digital",
    metric: "10x mais conteúdo",
  },
  {
    quote:
      "Antes eu postava 2 Reels por semana. Agora posto todo dia com cortes do meu podcast. Meu engajamento subiu 266% em 2 meses.",
    name: "Rafael Oliveira",
    role: "Podcaster",
    metric: "+266% engajamento",
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-testimonial-area rainbow-section-gap">
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
                <span className="theme-gradient">
                  Quem usa, comprova
                </span>
              </h4>
              <h2 className="title mb--0">
                Resultados reais de quem já usa o ViroClip
              </h2>
            </div>
          </div>
        </div>

        <div className="row row--15 mt--40">
          {testimonials.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-12 mt--30"
              key={index}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay={100 + index * 150}
            >
              <div
                className="rainbow-box-card card-style-default testimonial-style-defalt"
                style={{
                  background: "var(--color-lessdark, #21242D)",
                  borderRadius: "12px",
                  padding: "30px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="inner" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <div className="rating" style={{ marginBottom: "16px" }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#FFB800", marginRight: "3px" }}>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </span>
                    ))}
                  </div>
                  <div className="content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <p
                      className="description"
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                        flex: 1,
                        fontStyle: "italic",
                        opacity: 0.9,
                      }}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        paddingTop: "20px",
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <p
                          className="title-text"
                          style={{
                            fontWeight: "600",
                            marginBottom: "2px",
                            color: "#fff",
                          }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="desc"
                          style={{
                            fontSize: "14px",
                            opacity: 0.7,
                            marginBottom: 0,
                          }}
                        >
                          {item.role}
                        </p>
                      </div>
                      <span
                        className="theme-gradient"
                        style={{
                          fontWeight: "700",
                          fontSize: "14px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.metric}
                      </span>
                    </div>
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

export default TestimonialsSection;
