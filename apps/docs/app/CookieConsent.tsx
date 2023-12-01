"use client";
import { Button, Text } from "@rafty/ui";
import Script from "next/script";
import cookies from "js-cookie";
import { useState } from "react";

type CookieConsent = {
  // undefined - The user hasn't chosen anything
  // 1 - The user has accepted
  // 0 - The user has denied
  defaultValue?: string;
  cookieKey: string;
};

export function CookieConsent({ defaultValue, cookieKey }: CookieConsent) {
  const [isConsentGiven, setConsent] = useState(defaultValue);

  function handleGivenConsent(accept: boolean) {
    const token = String(Number(accept));
    return () => {
      cookies.set(cookieKey, token, !accept ? { expires: 15 } : undefined);
      setConsent(token);
    };
  }

  // Adding google analytics
  if (isConsentGiven == "1") return <GoogleAnalytics />;
  // Asking permission
  else if (isConsentGiven == undefined)
    return <CookieConsentBanner handleGivenConsent={handleGivenConsent} />;

  return <></>;
}

type CookieConsentBanner = {
  handleGivenConsent: (accept: boolean) => () => void;
};

function CookieConsentBanner({ handleGivenConsent }: CookieConsentBanner) {
  return (
    <div className="dark:bg-secondary-900 fixed bottom-0 z-50 w-full bg-white shadow-[0_-3px_10px_0px_rgba(0,0,0,0.1)] dark:shadow-none">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-3 py-3 md:flex-row md:items-center md:py-4 lg:px-0">
        <Text className="max-w-xl text-center text-sm leading-snug opacity-60 md:text-left">
          We only collect analytics essential to ensuring smooth operation of
          our services.
        </Text>
        <div className="flex w-full gap-3 md:w-auto">
          <Button
            colorScheme="primary"
            size="sm"
            className="!w-full md:!w-auto"
            onClick={handleGivenConsent(true)}
          >
            Accept
          </Button>
          <Button
            size="sm"
            className="!w-full md:!w-auto"
            onClick={handleGivenConsent(false)}
          >
            Opt out
          </Button>
        </div>
      </div>
    </div>
  );
}

function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-K1YEVWQFHZ"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-K1YEVWQFHZ');
        `}
      </Script>
    </>
  );
}
