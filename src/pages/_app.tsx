import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import RootLayout from "../app/layout/RootLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../app/styles/globals.css'
import '../app/styles/cgu.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);
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
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  

  return (
      <Router>
        <RootLayout>
          <Routes>
            {/* <Route path="/" element={<Component {...pageProps} />} /> */}
            <Route path="/" element={<Component {...pageProps} />} />
            <Route path="/cgu" element={<Component {...pageProps} />} />
          </Routes>
        </RootLayout>
      </Router>
  );
}