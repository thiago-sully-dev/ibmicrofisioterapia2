// import '../styles/globals.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globals';
import theme from '../styles/theme';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  const FB_PIXEL = process.env.PIXEL_FB;

  return (
    <>
    <Script id="facebook-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL}');
          fbq('track', 'PageView');
        `}
      </Script>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
