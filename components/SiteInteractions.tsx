"use client";

import { useEffect } from "react";
import { initSite } from "@/lib/site";

/** Starts the page's interactive behaviour (theme, menu, calculator, scorecard, forms, ledger demo, 3D model). */
export default function SiteInteractions() {
  useEffect(() => {
    initSite();
  }, []);
  return null;
}
