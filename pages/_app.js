import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  primary: "#05E9B2",
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
`;

function MyApp({ Component, pageProps }) {
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
