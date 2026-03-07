"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Sal from "sal.js";

const FinalCTA = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-section-gap-big">
      <div className="container">
        <div
          className="relative rounded-[16px] overflow-hidden px-6 py-16 md:px-12 md:py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(128,90,245,0.15) 0%, rgba(206,153,255,0.08) 100%)",
          }}
          data-sal="slide-up"
          data-sal-duration="400"
          data-sal-delay="150"
        >
          <div className="absolute inset-0 border border-[rgba(128,90,245,0.2)] rounded-[16px] pointer-events-none"></div>

          <h2 className="title !text-[28px] md:!text-[36px] lg:!text-[42px] mb-[16px]">
            Pronto para multiplicar seu conteúdo?
          </h2>
          <p className="text-[#99999C] text-[16px] md:text-[18px] max-w-[560px] mx-auto mb-8 leading-relaxed">
            Junte-se a milhares de criadores que já economizam horas por semana e
            alcançam mais pessoas com o ViroClip.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="btn-default btn-large"
              href="https://app.viroclip.com/signup"
            >
              Começar Grátis{" "}
              <i className="fa-sharp fa-light fa-arrow-right ml-[5px]"></i>
            </Link>
            <span className="text-[#99999C] text-[14px]">
              Sem cartão de crédito · 30 créditos grátis
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
