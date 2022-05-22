import Head from "next/head";
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
        outline: none;
    }
    abbr {
      text-decoration: none;
    }
    html{ 
      width: 100vw;
        overflow-x: hidden;
    }
    body { 
        background-color: ${theme.dark};
        width: 100vw;
        overflow-x: hidden;
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
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL, obsOptions);
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta
          name="description"
          content="Hey! My name is Marek Fodor and I'm self-taught junior frontend developer. Checkout my personal page!"
        />
        <meta
          name="keywords"
          content="Marek,Fodor,Marek Fodor,Junior Frontend Developer,Frontend Developer,Frontend"
        />
        <meta name="author" content="Marek Fodor" />
        <meta property="og:title" content="Marek Fodor" />
        <meta property="og:description" content="Junior Frontend Developer" />
        <meta property="og:url" content="https://www.marekus.eu/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/MarekFodor.png" />
        <title>Marek Fodor - Frontend Developer</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
