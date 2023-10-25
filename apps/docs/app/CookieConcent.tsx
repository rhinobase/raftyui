import { Button, Text } from "@rafty/ui";
import Script from "next/script";

// export const CONCENT_COOKIE_NAME = "rccn";

export function CookieConcent() {
  // TODO: Fix this rendering
  const isConcentGiven = true; // cookies[CONCENT_COOKIE_NAME];

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
  else
    return (
      <div className="fixed z-50 bottom-0 bg-white dark:bg-secondary-900 w-full shadow-[0_-3px_10px_0px_rgba(0,0,0,0.1)] dark:shadow-none">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-4xl mx-auto px-3 py-3 md:px-0 md:py-4 gap-4">
          <Text className="text-sm opacity-60 max-w-xl leading-snug text-center md:text-left">
            We use cookies to enhance your user experience. By using our
            webiste, you agree to our use of cookies.
          </Text>
          <Button colorScheme="primary">Got it!</Button>
        </div>
      </div>
    );
}
