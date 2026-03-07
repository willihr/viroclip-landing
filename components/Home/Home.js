"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

import SplitImg from "../../public/images/split/split-2.png";
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png";
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png";
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png";
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png";
import bgShapeOne from "../../public/images/bg/bg-shape-four.png";
import bgShapeTwo from "../../public/images/bg/bg-shape-five.png";

import CtaOne from "../CallToActions/Cta-One";
import Pricing from "../Pricing/Pricing";
import SquareLogo from "./SquareLogo";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

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
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              <div className="inner text-center mt-[140px]">
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
            <div className="w-full lg:w-9/12 xl:w-9/12 flex justify-center">
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

      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <p className="b1 mb-0 small-title">
                  A ferramenta que acelera o crescimento de milhares de
                  criadores
                </p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12 mt--10">
              <BrandList />
            </div>
          </div> */}
        </div>
      </div>

      <HowItWorks />

      <Features />

      <div className="rainbow-collobration-area rainbow-section-gap-big">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full">
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
                <h2 className="title mb-[20px]">
                  Um vídeo rende um mês inteiro de cortes virais
                </h2>
                <Link
                  className="btn-default btn-large"
                  href="https://app.viroclip.com/signup"
                >
                  Teste Grátis Agora{" "}
                  <i className="fa-sharp fa-light fa-arrow-right ml-[5px]"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full mt-[60px]">
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

      <Testimonials />

      <div className="rainbow-rn-cta">
        <div className="container">
          <CtaOne />
        </div>
      </div>

      <div className="aiwave-pricing-area wrapper rainbow-section-gap-big">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full">
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
                <h2 className="title !font-semibold mb-[40px]">
                  Escolha seu plano
                </h2>
              </div>

              {/* <nav className="aiwave-tab">
                <div
                  className="tab-btn-grp nav nav-tabs text-center justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  {PricingData &&
                    PricingData.pricing.map((data, index) => (
                      <button
                        className={`nav-link ${data.isSelect ? "active" : ""}`}
                        id={`${data.priceId}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${data.priceId}`}
                        type="button"
                        role="tab"
                        aria-controls={data.priceId}
                        aria-selected="false"
                        key={index}
                      >
                        {data.priceType}{" "}
                        {data.discount ? (
                          <span className="rainbow-badge-card badge-border">
                            -{data.discount}%
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                    ))}
                </div>
              </nav> */}
            </div>
          </div>

          <Pricing
            parentClass="xl:w-1/3 lg:w-1/2 md:w-1/2 w-full px-[15px] mt-[40px]"
            start={0}
            end={3}
            isBadge={true}
            gap="-mt-[40px]"
          />
        </div>
      </div>

      <FAQ />
    </>
  );
};

export default Home;
