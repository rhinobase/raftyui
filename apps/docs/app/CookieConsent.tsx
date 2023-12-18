"use client";
import { Button, Text } from "@rafty/ui";
import cookies from "js-cookie";
import Script from "next/script";
import { MouseEventHandler, useState } from "react";

// Cookie name for analytics consent
const CONSENT_COOKIE_NAME = "rccn";

// undefined - The user hasn't chosen anything
// 1 - The user has accepted
// 0 - The user has denied
export function CookieConsent() {
  const [isConsentGiven, setConsent] = useState(
    cookies.get(CONSENT_COOKIE_NAME),
  );

  function handleGivenConsent(
    accept: boolean,
  ): MouseEventHandler<HTMLButtonElement> {
    const token = String(Number(accept));
    return () => {
      cookies.set(
        CONSENT_COOKIE_NAME,
        token,
        !accept ? { expires: 15 } : undefined,
      );
      setConsent(token);
    };
  }

  // Adding google analytics
  if (isConsentGiven === "1") return <GoogleAnalytics />;

  // Asking permission
  if (isConsentGiven === undefined)
    return <CookieConsentBanner handleGivenConsent={handleGivenConsent} />;

  // The user has denied the request
  return <></>;
}

type CookieConsentBanner = {
  handleGivenConsent: (accept: boolean) => MouseEventHandler<HTMLButtonElement>;
};

function CookieConsentBanner({ handleGivenConsent }: CookieConsentBanner) {
  return (
    <div
      role="dialog"
      className="dark:bg-secondary-900 fixed bottom-2 right-2 left-2 z-[100] bg-white shadow-[0_-3px_10px_0px_rgba(0,0,0,0.1)] dark:shadow-none md:left-auto md:bottom-3 md:right-3 md:w-[340px] rounded-lg p-4"
      style={{ pointerEvents: "auto" }}
    >
      <div className="space-y-4">
        <Text className="text-center text-sm leading-snug opacity-60 md:text-left">
          We only collect analytics essential to ensuring smooth operation of
          our services.
        </Text>
        <div className="flex w-full gap-4 md:justify-end">
          <Button
            size="sm"
            className="!w-full md:!w-auto"
            onClick={handleGivenConsent(false)}
          >
            Opt out
          </Button>
          <Button
            colorScheme="primary"
            size="sm"
            className="!w-full md:!w-auto"
            onClick={handleGivenConsent(true)}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

function GoogleAnalytics() {
  const MEASUREMENT_ID = "G-8XZ5Q7H2DG";

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
