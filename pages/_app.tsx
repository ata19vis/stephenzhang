import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const key = "sz_tracked";
    try {
      if (typeof window !== "undefined" && !sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path: window.location.pathname }),
        }).catch(() => {});
      }
    } catch {}
  }, []);

  return <Component {...pageProps} />;
}
