import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import '../app/styles/globals.css'
import '../app/styles/cgu.css'
import Head from "next/head";
// import Head from "@/app/head";

import metadataimage from "./../../public/Images/metaDataImage.jpg"

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
    <Head>
      <title>Photostopper</title>
      <meta name="description" content="🧭 L'application pour redécouvrir le(s) patrimoine(s) des Hauts-de-France" />
      {/* <meta name="keywords" content="mots clés, pour, ma, page" /> */}
      <meta property="og:title" content="PhotoStopper" />
      <meta property="og:description" content="🧭 L'application pour redécouvrir le(s) patrimoine(s) des Hauts-de-France" />
      <meta property="og:image" content="https://imagedelivery.net/hl1WDbLOjbgv1wkNUhhX3w/3a442acc-5f6f-4897-46e0-ab567b813400/w=7952" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="PhotoStopper" />
      <meta name="twitter:description" content="🧭 L'application pour redécouvrir le(s) patrimoine(s) des Hauts-de-France" />
      <meta name="twitter:image" content="https://imagedelivery.net/hl1WDbLOjbgv1wkNUhhX3w/3a442acc-5f6f-4897-46e0-ab567b813400/w=7952" />

    </Head>
    <Component {...pageProps} />
    </>
    );
}