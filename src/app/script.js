const axeptioSettings = {
  clientId: "644982449930ada889b24ed4",
  cookiesVersion: "photostopper-fr",
};
const script = document.createElement("script");
script.async = true;
script.src = "https//static.axept.io/sdk-slim.js";
script.setAttribute("data-id", "axeptio-sdk");
script.setAttribute("data-version", "latest");
script.setAttribute("data-cookieconsent", "ignore");
script.setAttribute("data-sdk-type", "notice");
script.setAttribute("data-sdk-instance", "axeptio");
document.body.appendChild(script);

// @ts-ignore
window.axeptioSettings = axeptioSettings;