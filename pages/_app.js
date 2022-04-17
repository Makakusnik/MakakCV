import { useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

export const devices = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const theme = {
  primary: "#1096E1",
  lightDark: "#292929",
  mediumDark: "#1E1E1E",
  balls: "#40085A",
  dark: "#171717",
  light: "#EDEDED",
  text: "#FFFFFF",
};

const GlobalStyles = createGlobalStyle`
    * {
        list-style: none;
        border:none;
        padding: 0;
        margin: 0;
        list-style-type: none;
        box-sizing: border-box;
    }
    abbr {
      text-decoration: none;
    }
    body { 
        background-color: ${theme.dark};
        width:100%;
    }

    [data-inviewport="popRight"] {
      transition: right 0s linear, opacity 0s linear;
      right: 30px;
      opacity: 0;
    }
    [data-inviewport="popRight"].is-inViewport {
      transition: right 0.3s 0.4s ease, opacity 0.3s 0.4s ease;
      right: 0;
      opacity: 1;
    }
    [data-inviewport="popLeft"] {
      transition: left 0s linear, opacity 0s linear;
      left: 30px;
      opacity: 0;
    }
    [data-inviewport="popLeft"].is-inViewport {
      transition: left 0.3s 0.4s ease, opacity 0.3s 0.4s ease;
      left: 0;
      opacity: 1;
    }

    
`;

const inViewport = (entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {
      root: document.querySelector("#__next"),
      threshold: 0.5,
    }; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
    console.log(ELs_inViewport);
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL, obsOptions);
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
