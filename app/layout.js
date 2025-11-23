import React from "react";
import { Sora } from "@next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { MetaPixel } from "./tracking";
import ClientLayout from "./ClientLayout";

import "bootstrap/scss/bootstrap.scss";

// ========= Plugins CSS START =========
import "../public/css/plugins/feature.css";
import "../public/css/plugins/fontawesome-all.min.css";
import "../public/css/plugins/animation.css";
import "../node_modules/sal.js/dist/sal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";
// ========= Plugins CSS END =========

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import "../public/scss/style.scss";

export const metadata = {
  title: "Transforme Vídeos em Cortes Virais para Redes Sociais | ViroClip",
  description:
    "Economize tempo e maximize seu alcance! A IA do ViroClip analisa seus vídeos e cria dezenas de cortes virais, prontos para postar no TikTok, Reels e Shorts. Aumente seu engajamento. Teste grátis!",
  openGraph: {
    siteName: "ViroClip",
    url: "https://viroclip.com",
    title: "Transforme Vídeos em Cortes Virais para Redes Sociais | ViroClip",
    description:
      "Economize tempo e maximize seu alcance! A IA do ViroClip analisa seus vídeos e cria dezenas de cortes virais, prontos para postar no TikTok, Reels e Shorts. Aumente seu engajamento. Teste grátis!",
    images: [],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-W68LHCNX" />
        <MetaPixel />
      </head>
      <body className={sora.className} suppressHydrationWarning={true}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
