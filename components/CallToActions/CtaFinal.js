"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Sal from "sal.js";

const CtaFinal = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="text-center"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle tw:mb-3">
                <span className="theme-gradient">
                  Pronto para viralizar?
                </span>
              </h4>
              <h2 className="title tw:mb-4">
                Comece a criar cortes virais <br /> agora mesmo — é grátis
              </h2>
              <p className="description tw:mb-5 tw:opacity-80">
                Sem cartão de crédito. Sem compromisso. Teste o ViroClip
                gratuitamente e descubra como multiplicar seu conteúdo com IA.
              </p>
              <div className="tw:flex tw:items-center tw:justify-center tw:gap-4 tw:flex-wrap">
                <Link
                  className="btn-default btn-large"
                  href="https://app.viroclip.com/signup"
                >
                  Começar Grátis{" "}
                  <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                </Link>
                <Link
                  className="rainbow-gradient-btn without-shape-circle"
                  href="https://app.viroclip.com/signup"
                >
                  <span>Ver Planos</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaFinal;
