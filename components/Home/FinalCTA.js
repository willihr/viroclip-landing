"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Sal from "sal.js";

const FinalCTA = () => {
  useEffect(() => {
    Sal();
  }, []);

  return (
    <div className="rainbow-cta-area rainbow-section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div
              className="text-center"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
              style={{
                background:
                  "linear-gradient(135deg, rgba(128,90,245,0.15) 0%, rgba(205,153,255,0.1) 100%)",
                borderRadius: "16px",
                padding: "60px 40px",
                border: "1px solid rgba(128,90,245,0.2)",
              }}
            >
              <h4 className="subtitle mb--10">
                <span className="theme-gradient">
                  Comece grátis agora
                </span>
              </h4>
              <h2
                className="title mb--20"
                style={{ fontSize: "36px", fontWeight: "700" }}
              >
                Transforme 1 vídeo em semanas de conteúdo
              </h2>
              <p
                className="description b1 mb--30"
                style={{ maxWidth: "540px", margin: "0 auto 30px" }}
              >
                Junte-se a milhares de criadores que já economizam horas de
                edição e multiplicam seu alcance nas redes sociais.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  className="btn-default"
                  href="https://app.viroclip.com/signup"
                >
                  Começar Grátis
                  <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                </Link>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  opacity: 0.5,
                  marginTop: "16px",
                  marginBottom: 0,
                }}
              >
                Sem cartão de crédito. Cancele quando quiser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
