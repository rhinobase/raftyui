"use client";
import { Button, Text } from "@rafty/ui";
import Script from "next/script";
import cookies from "js-cookie";
import { useState } from "react";

type CookieConcent = {
  defaultValue?: string;
  cookieKey: string;
};

export function CookieConcent({ defaultValue, cookieKey }: CookieConcent) {
  const [isConcentGiven, setConcent] = useState(defaultValue);

  function handleGivenConcent(accept = true) {
    const token = String(Number(accept));
    return () => {
      cookies.set(cookieKey, token);
      setConcent(token);
    };
  }

  // Adding google analytics
  if (isConcentGiven)
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
  // Asking permission
  else if (isConcentGiven == undefined)
    return (
      <div className="dark:bg-secondary-900 fixed bottom-0 z-50 w-full bg-white shadow-[0_-3px_10px_0px_rgba(0,0,0,0.1)] dark:shadow-none">
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-4 px-3 py-3 md:flex-row md:items-center md:px-0 md:py-4">
          <Text className="max-w-xl text-center text-sm leading-snug opacity-60 md:text-left">
            We use cookies to enhance your user experience. By using our
            webiste, you agree to our use of cookies.
          </Text>
          <div className="flex gap-3">
            <Button
              colorScheme="primary"
              size="sm"
              onClick={handleGivenConcent()}
            >
              Accept
            </Button>
            <Button size="sm" onClick={handleGivenConcent(false)}>
              Opt out
            </Button>
          </div>
        </div>
      </div>
    );
}
