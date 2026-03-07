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

import BrandList from "../Brands/BrandList";
import TabStyleOne from "../TabStyles/TabStyle-One";
import ServiceStyleOne from "../Services/ServiceStyle-One";
import AdvanceTab from "../TabStyles/AdvanceTab";
import CtaOne from "../CallToActions/Cta-One";
import Pricing from "../Pricing/Pricing";
import ServiceTwo from "../Services/Service-Two";
import Testimonial from "../Testimonials/Testimonial";
import BrandTwo from "../Brands/Brand-Two";
import CtaTwo from "../CallToActions/Cta-Two";
import SquareLogo from "./SquareLogo";
import HowItWorks from "../HowItWorks/HowItWorks";
import Features from "../Features/Features";
import SocialProof from "../SocialProof/SocialProof";
import TestimonialSimple from "../Testimonials/TestimonialSimple";
import FAQ from "../FAQ/FAQ";
import CtaFinal from "../CallToActions/CtaFinal";

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
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140">
                <h1 className="title display-one tw:!text-[36px] md:tw:!text-[44px] lg:tw:!text-[48px] xl:tw:!text-[56px] 2xl:tw:!text-[64px] tw:!leading-none">
                  Transforme vídeos longos em{" "}
                  <span className="header-caption">
                    <span className="cd-headline rotate-1">
                      <span className="cd-words-wrapper tw:!w-[290px] tw:!text-[36px] md:tw:!w-[350px] md:tw:!text-[44px] lg:tw:!w-[380px] lg:tw:!text-[48px] xl:tw:!w-[450px] xl:tw:!text-[56px] 2xl:tw:!w-[510px] 2xl:tw:!text-[64px]">
                        <b
                          className={
                            visibleIndex === 0
                              ? "is-visible theme-gradient tw:!normal-case tw:tracking-[-0.08em] tw:pr-[0.08em]"
                              : "is-hidden theme-gradient tw:!normal-case tw:tracking-[-0.08em] tw:pr-[0.08em]"
                          }
                        >
                          dezenas de cortes
                        </b>
                        <b
                          className={
                            visibleIndex === 1
                              ? "is-visible theme-gradient tw:!normal-case tw:tracking-[-0.03em] tw:pr-[0.03em]"
                              : "is-hidden theme-gradient tw:!normal-case tw:tracking-[-0.03em] tw:pr-[0.03em]"
                          }
                        >
                          presença digital
                        </b>
                        <b
                          className={
                            visibleIndex === 2
                              ? "is-visible theme-gradient tw:!normal-case tw:tracking-[0.03em]"
                              : "is-hidden theme-gradient tw:!normal-case tw:tracking-[0.03em]"
                          }
                        >
                          conteúdo viral
                        </b>
                        <b
                          className={
                            visibleIndex === 3
                              ? "is-visible theme-gradient tw:!normal-case tw:tracking-[0.02em]"
                              : "is-hidden theme-gradient tw:!normal-case tw:tracking-[0.02em]"
                          }
                        >
                          + engajamento
                        </b>
                      </span>
                    </span>
                  </span>{" "}
                  em minutos
                </h1>
                <p className="description tw:!text-[16px] md:tw:!text-[20px] tw:opacity-80">
                  O ViroClip entende seu conteúdo, gera cortes prontos para
                  viralizar e os publica em todas as suas redes sociais com
                  poucos cliques.
                </p>

                <div className="tw:flex tw:items-center tw:gap-x-4 tw:gap-y-3 tw:w-auto tw:flex-col md:tw:flex-row">
                  <div className="tw:flex-grow tw:bg-[#2D313E] tw:rounded-full tw:p-2 tw:flex tw:items-center tw:shadow-lg tw:max-w-[430px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="tw:h-8 tw:w-8 tw:text-gray-400 tw:mx-3 tw:flex-none"
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
                      className="tw:w-full tw:!pl-0 tw:!rounded-none tw:bg-transparent tw:text-gray-700 tw:placeholder-gray-500 tw:text-base tw:!border-none focus:tw:ring-0 tw:outline-none"
                    />
                    <Link
                      className="btn-default tw:flex-none tw:!rounded-full"
                      href="https://app.viroclip.com/signup"
                    >
                      Obter cortes grátis
                    </Link>
                  </div>
                  <span className="tw:text-gray-300 tw:text-[14px]">ou</span>
                  <Link
                    className="rainbow-gradient-btn without-shape-circle tw:flex-none"
                    href="https://app.viroclip.com/signup"
                  >
                    <span>Carregar arquivo</span>
                  </Link>
                </div>
                <div className="inner-shape tw:hidden lg:tw:!block">
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
              <div className="slider-frame tw:!bg-cover before:tw:!bg-cover max-md:tw:!p-0">
                <video
                  className="tw:w-full"
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
          {/* <div className="row">
            <div className="col-lg-12 mt--10">
              <BrandList />
            </div>
          </div> */}
        </div>
      </div>

      <SocialProof />

      <HowItWorks />

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
                  <div className="center-logo tw:!p-[10px] lg:tw:!p-[27px]">
                    <SquareLogo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-rn-cta">
        <div className="container">
          <CtaOne />
        </div>
      </div>

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
                <h2 className="title tw:!font-semibold mb--40">
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
            parentClass="col-xl-4 col-lg-6 col-md-6 col-12 mt--40"
            start={0}
            end={3}
            isBadge={true}
            gap="mt_dec--40"
          />
        </div>
      </div>

      <Features />

      <TestimonialSimple />

      <FAQ />

      <CtaFinal />
    </>
  );
};

export default Home;
