"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

import PricingData from "../../data/pricing.json";

import SplitImg from "../../public/images/split/split-2.png";
import SplitLogo from "../../public/images/split/split-2-logo.png";
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png";
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png";
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png";
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png";
import bgShape from "../../public/images/bg/split-bg-shape.png";
import bgShapeOne from "../../public/images/bg/bg-shape-four.png";
import bgShapeTwo from "../../public/images/bg/bg-shape-five.png";
import bgShapeThree from "../../public/images/bg/bg-shape-two.png";

import CtaOne from "../CallToActions/Cta-One";
import Pricing from "../Pricing/Pricing";
import ServiceTwo from "../Services/Service-Two";
import Testimonial from "../Testimonials/Testimonial";
import SquareLogo from "./SquareLogo";
import Stats from "./Stats";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Faq from "./Faq";

const Home = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [inputUrl, setInputUrl] = useState("");

  useEffect(() => {
    Sal();

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140">
                <h1 className="title display-one !text-[36px] md:!text-[44px] lg:!text-[48px] xl:!text-[56px] 2xl:!text-[64px] !leading-none">
                  Transforme vídeos longos em{" "}
                  <span className="header-caption">
                    <span className="cd-headline rotate-1">
                      <span className="cd-words-wrapper !w-[290px] !text-[36px] md:!w-[350px] md:!text-[44px] lg:!w-[380px] lg:!text-[48px] xl:!w-[450px] xl:!text-[56px] 2xl:!w-[510px] 2xl:!text-[64px]">
                        <b
                          className={
                            visibleIndex === 0
                              ? "is-visible theme-gradient !normal-case tracking-[-0.08em] pr-[0.08em]"
                              : "is-hidden theme-gradient !normal-case tracking-[-0.08em] pr-[0.08em]"
                          }
                        >
                          dezenas de cortes
                        </b>
                        <b
                          className={
                            visibleIndex === 1
                              ? "is-visible theme-gradient !normal-case tracking-[-0.03em] pr-[0.03em]"
                              : "is-hidden theme-gradient !normal-case tracking-[-0.03em] pr-[0.03em]"
                          }
                        >
                          presença digital
                        </b>
                        <b
                          className={
                            visibleIndex === 2
                              ? "is-visible theme-gradient !normal-case tracking-[0.03em]"
                              : "is-hidden theme-gradient !normal-case tracking-[0.03em]"
                          }
                        >
                          conteúdo viral
                        </b>
                        <b
                          className={
                            visibleIndex === 3
                              ? "is-visible theme-gradient !normal-case tracking-[0.02em]"
                              : "is-hidden theme-gradient !normal-case tracking-[0.02em]"
                          }
                        >
                          + engajamento
                        </b>
                      </span>
                    </span>
                  </span>{" "}
                  em minutos
                </h1>
                <p className="description !text-[16px] md:!text-[20px] opacity-80">
                  O ViroClip entende seu conteúdo, gera cortes prontos para
                  viralizar e os publica em todas as suas redes sociais com
                  poucos cliques.
                </p>

                <div className="flex items-center gap-x-4 gap-y-3 w-auto flex-col md:flex-row">
                  <div className="flex-grow bg-[#2D313E] rounded-full p-2 flex items-center shadow-lg max-w-[430px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-400 mx-3 flex-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Cole um link aqui"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      className="w-full !pl-0 !rounded-none bg-transparent text-gray-700 placeholder-gray-500 text-base !border-none focus:ring-0 outline-none"
                    />
                    <Link
                      className="btn-default flex-none !rounded-full"
                      href="https://app.viroclip.com/signup"
                    >
                      Obter cortes grátis
                    </Link>
                  </div>
                  <span className="text-gray-300 text-[14px]">ou</span>
                  <Link
                    className="rainbow-gradient-btn without-shape-circle flex-none"
                    href="https://app.viroclip.com/signup"
                  >
                    <span>Carregar arquivo</span>
                  </Link>
                </div>
                <div className="inner-shape hidden lg:!block">
                  <Image
                    src={shapeOne}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-one"
                  />
                  <Image
                    src={shapeTwo}
                    width={60}
                    height={57}
                    alt="Icon Shape"
                    className="iconshape iconshape-two"
                  />
                  <Image
                    src={shapeThree}
                    width={42}
                    height={31}
                    alt="Icon Shape"
                    className="iconshape iconshape-three"
                  />
                  <Image
                    src={shapeFour}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-four"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-xl-9 justify-content-center">
              <div className="slider-frame !bg-cover before:!bg-cover max-md:!p-0">
                <video
                  className="w-full"
                  src="/hero-banner-video.webm"
                  autoPlay
                  muted
                  loop
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src={bgShapeOne}
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src={bgShapeTwo}
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>

      {/* ─── SOCIAL PROOF BAR ─── */}
      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <p className="b1 mb--0 small-title">
                  A ferramenta que acelera o crescimento de milhares de
                  criadores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── STATS ─── */}
      <Stats />

      {/* ─── HOW IT WORKS ─── */}
      <HowItWorks />

      {/* ─── COLLABORATION / DEMO VISUAL ─── */}
      <div className="rainbow-collobration-area rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">
                    Sua Máquina de Conteúdo Viral
                  </span>
                </h4>
                <h2 className="title mb--20">
                  Um vídeo rende um mês inteiro de cortes virais
                </h2>
                <Link
                  className="btn-default btn-large"
                  href="https://app.viroclip.com/signup"
                >
                  Teste Grátis Agora{" "}
                  <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--60">
              <div className="collabration-image-section">
                <Image
                  src={SplitImg}
                  width={1305}
                  height={712}
                  alt="collabration-image"
                />
                <div className="logo-section">
                  <div className="center-logo !p-[10px] lg:!p-[27px]">
                    <SquareLogo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── FEATURES ─── */}
      <Features />

      {/* ─── CTA BANNER ─── */}
      <div className="rainbow-rn-cta">
        <div className="container">
          <CtaOne />
        </div>
      </div>

      {/* ─── TESTIMONIALS ─── */}
      <div className="rainbow-testimonial-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Quem já usa o ViroClip</span>
                </h4>
                <h2 className="title mb--60">
                  Criadores reais, resultados reais
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>

      {/* ─── TRUST ICONS (SERVICE TWO) ─── */}
      <div className="aiwave-service-area rainbow-section-gap">
        <div className="container">
          <div className="row row--15 service-wrapper">
            <ServiceTwo />
          </div>
        </div>
      </div>

      {/* ─── PRICING ─── */}
      <div className="aiwave-pricing-area wrapper rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    Acelere seu crescimento
                  </span>
                </h4>
                <h2 className="title !font-semibold mb--40">
                  Escolha seu plano
                </h2>
              </div>
            </div>
          </div>

          <Pricing
            parentClass="col-xl-4 col-lg-6 col-md-6 col-12 mt--40"
            start={0}
            end={3}
            isBadge={true}
            gap="mt_dec--40"
          />
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <Faq />

      {/* ─── FINAL CTA ─── */}
      <div className="rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="rounded-2xl p-8 md:p-16 text-center relative overflow-hidden sal-animate"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 100%)",
                  border: "1px solid rgba(99,102,241,0.3)",
                }}
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 70%)",
                  }}
                ></div>

                <div className="relative z-10">
                  <span className="inline-block text-sm font-semibold px-4 py-2 rounded-full bg-[rgba(99,102,241,0.2)] text-[#a78bfa] mb-6 border border-[rgba(99,102,241,0.3)]">
                    🚀 Comece hoje mesmo — é grátis
                  </span>
                  <h2 className="title !text-3xl md:!text-5xl !font-bold !mb-4 !leading-tight">
                    Pare de desperdiçar conteúdo.
                    <br />
                    <span className="theme-gradient">
                      Comece a viralizar agora.
                    </span>
                  </h2>
                  <p className="description b1 !max-w-[520px] mx-auto !mb-8 opacity-80">
                    Junte-se a mais de 10.000 criadores que já transformam cada
                    vídeo em dezenas de cortes virais com o ViroClip.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      className="btn-default btn-large !px-10"
                      href="https://app.viroclip.com/signup"
                    >
                      Criar conta grátis{" "}
                      <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                    </Link>
                    <Link
                      className="btn-default btn-border btn-large !px-10"
                      href="/pricing"
                    >
                      Ver planos e preços
                    </Link>
                  </div>
                  <p className="!text-sm !mt-4 text-gray-400">
                    Sem cartão de crédito · Cancele quando quiser · 30 créditos grátis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
