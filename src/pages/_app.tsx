import { AppProps } from "next/app";
import { useEffect, useState, } from "react";
import React, { Component } from 'react';
import { Analytics } from '@vercel/analytics/react'
  ;

import '../app/styles/globals.css'
import '../app/styles/cgu.css'
import Head from "next/head";
// import Head from "@/app/head";

import metadataimage from "./../../public/Images/metaDataImage.jpg"
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {

  // const AxeptioInjector = () =>{
  //   useEffect(() =>{
  //     const el = document.createElement("script");
  //     el.setAttribute('src',"https//static.axept.io/sdk-slim.js" )
  //   })
  // }
  useEffect(() => {
    const axeptioSettings = {
      clientId: "644982449930ada889b24ed4",
      cookiesVersion: "photostopper-fr",
    };
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("src", "//static.axept.io/sdk-slim.js");
    script.setAttribute("data-id", "644982449930ada889b24ed4");
    script.setAttribute("async", "true");
    script.setAttribute("type", "text/javascript");
    script.setAttribute('defer', "true");

    if (document.body !== null) {
      document.body.appendChild(script);

    }

    // @ts-ignore
    window.axeptioSettings = axeptioSettings;
    //@ts-ignore
    window._axcb = window._axcb || [];
    //@ts-ignore
    window._axcb.push(function (axeptio: any) {
      axeptio.on("cookies:complete", function (choices: any) {
        
      });
    })


  }, [])

  return (
    <>

      <Head>
        <title>Photostopper</title>
        <link rel="icon" href="https://res.cloudinary.com/dfuhbtvh5/image/upload/v1683281672/logo_pslnmv.png" />
        <meta name="description"
          content=" 🧭 PhotoStopper, l’application pour (re)découvrir la richesse du patrimoine culturel, architectural, historique et naturel des Hauts-de-France." />
        <meta name="title" content=" PhotoStopper - (Re)découvrez les patrimoines des Hauts-de-France" />
        <meta name="keywords"
          content="photostopper, site vitrine, photostopper, autostopper, visite patrimoine, visite arras, Arras, application arras, offisme de tourisme arras" />
        <meta property="og:title" content="PhotoStopper - (Re)découvrez les patrimoines des Hauts-de-France" />
        <meta property="og:description"
          content=" 🧭 PhotoStopper, l’application pour (re)découvrir la richesse du patrimoine culturel, architectural, historique et naturel des Hauts-de-France." />
        <meta property="og:image"
          content="https://imagedelivery.net/hl1WDbLOjbgv1wkNUhhX3w/3a442acc-5f6f-4897-46e0-ab567b813400/w=7952" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PhotoStopper - (Re)découvrez les patrimoines des Hauts-de-France" />
        <meta name="twitter:description"
          content=" 🧭 PhotoStopper, l’application pour (re)découvrir la richesse du patrimoine culturel, architectural, historique et naturel des Hauts-de-France." />
        <meta name="twitter:image"
          content="https://imagedelivery.net/hl1WDbLOjbgv1wkNUhhX3w/3a442acc-5f6f-4897-46e0-ab567b813400/w=7952" />

      </Head>
      <Component {...pageProps} />
      < Analytics />
    </>
  );
}