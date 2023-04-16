import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
const GA_TRACKING_ID = "G-KVQPS7V7HZ";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
