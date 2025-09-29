"use client";

import React, { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClientLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    Clarity.init("t8cn2gjcvf");
  }, []);

  return <>{children}</>;
}
