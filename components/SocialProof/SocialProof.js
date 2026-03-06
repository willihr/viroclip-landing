"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

const stats = [
  {
    value: "10M+",
    label: "Minutos de vídeo processados",
  },
  {
    value: "500K+",
    label: "Cortes gerados por IA",
  },
  {
    value: "5.000+",
    label: "Criadores ativos",
  },
  {
    value: "97%",
    label: "Precisão nas legendas",
  },
];

const SocialProof = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-brand-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--40 sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Números que comprovam</span>
              </h4>
              <h2 className="title mb--0">
                Resultados reais de quem já usa
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {stats.map((stat, index) => (
            <div
              className="col-lg-3 col-md-6 col-6 mt--30"
              key={index}
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay={100 + index * 100}
            >
              <div className="text-center p-4">
                <h2 className="title theme-gradient !text-[36px] md:!text-[48px] mb-2 !font-bold">
                  {stat.value}
                </h2>
                <p className="description mb-0 opacity-80">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
