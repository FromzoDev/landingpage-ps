import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import '../app/styles/globals.css'
import '../app/styles/cgu.css'
import Head from "next/head";
// import Head from "@/app/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
      const axeptioSettings = {
        clientId: "6446b06518bd08d972384011",
        cookiesVersion: "phtostopper-fr",
      };
      const script = document.createElement("script");
      script.async = true;
      script.src = "//static.axept.io/sdk-slim.js";
      script.setAttribute("data-id", "axeptio-sdk");
      script.setAttribute("data-version", "latest");
      script.setAttribute("data-cookieconsent", "ignore");
      script.setAttribute("data-sdk-type", "notice");
      script.setAttribute("data-sdk-instance", "axeptio");
      document.body.appendChild(script);
 
      // @ts-ignore
      window.axeptioSettings = axeptioSettings;
    }, []);


  return (
    <>
    <Component {...pageProps} />
    </>
    );
}