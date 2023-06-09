import type { AppProps } from "next/app";
import { ReactNode, useEffect } from "react";
import { AuthProvider } from "../contexts/Auth";
import { ThemeProvider } from "../contexts/Theme";
import useTheme from "../contexts/Theme/useTheme";
import "../styles/globals.scss";

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <App>
          <Component {...pageProps} />
        </App>
      </ThemeProvider>
    </AuthProvider>
  );
};

interface AppLogicProps {
  children: ReactNode;
}

const App = ({ children }: AppLogicProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.querySelector("body")?.setAttribute("class", theme);
  }, [theme]);

  return <>{children}</>;
};

export default AppWrapper;
