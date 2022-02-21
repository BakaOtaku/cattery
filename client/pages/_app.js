import React, { useEffect } from "react";
import Head from 'next/head';

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@utils/theme";
import Near from "@contexts/nearContext";
import User from "@contexts/userContext";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>~Cattery~</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />

      <Near>
        <User>
          <Component {...pageProps} />
        </User>
      </Near>
    </ThemeProvider>
  );
}

export default App;
