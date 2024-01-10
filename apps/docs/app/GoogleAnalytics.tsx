import Script from "next/script";

const MEASUREMENT_ID = "G-K1YEVWQFHZ";
export function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
