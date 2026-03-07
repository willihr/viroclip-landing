"use client";

import React, { useEffect, useRef, useState } from "react";
import Sal from "sal.js";

const statsData = [
  {
    icon: "fa-sharp fa-solid fa-users",
    value: 10,
    suffix: "K+",
    label: "Criadores ativos",
    description: "que confiam no ViroClip",
  },
  {
    icon: "fa-sharp fa-solid fa-scissors",
    value: 1,
    suffix: "M+",
    label: "Cortes gerados",
    description: "prontos para viralizar",
  },
  {
    icon: "fa-sharp fa-solid fa-clock",
    value: 4,
    suffix: "h",
    label: "Economizadas por semana",
    description: "em média por criador",
  },
  {
    icon: "fa-sharp fa-solid fa-star",
    value: 4.9,
    suffix: "/5",
    label: "Avaliação média",
    description: "dos nossos usuários",
  },
];

const AnimatedNumber = ({ value, suffix, isFloat }) => {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value, isFloat]);

  return (
    <span ref={ref}>
      {isFloat ? display.toFixed(1) : display}
      {suffix}
    </span>
  );
};

const Stats = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-section-gap">
      <div className="container">
        <div className="row g-4">
          {statsData.map((stat, index) => (
            <div
              className="col-lg-3 col-sm-6 col-12 sal-animate"
              key={index}
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-delay={`${100 + index * 100}`}
            >
              <div className="text-center tw-p-6 tw-rounded-xl tw-border tw-border-[rgba(255,255,255,0.08)] tw-bg-[rgba(255,255,255,0.03)] hover:tw-bg-[rgba(255,255,255,0.06)] tw-transition-all tw-duration-300">
                <div className="tw-mb-3">
                  <i
                    className={`${stat.icon} tw-text-3xl`}
                    style={{
                      background: "linear-gradient(90deg, #6366f1, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  ></i>
                </div>
                <h3 className="tw-text-4xl tw-font-bold tw-mb-1 theme-gradient">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isFloat={!Number.isInteger(stat.value)}
                  />
                </h3>
                <p className="tw-font-semibold tw-text-base tw-mb-1 tw-text-white">
                  {stat.label}
                </p>
                <p className="tw-text-sm tw-mb-0 tw-text-gray-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
