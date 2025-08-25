"use client";
import { useEffect, useState } from "react";

export default function useFirstVisit(): boolean {
  const [shouldShowSplash, setShouldShowSplash] = useState(false);

  useEffect(() => {
    const shown = localStorage.getItem("kks_splash_shown");
    if (!shown) {
      setShouldShowSplash(true);
      localStorage.setItem("kks_splash_shown", "true");
    }
  }, []);

  return shouldShowSplash;
}
