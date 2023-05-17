import { ReactNode, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Router from "next/router";
import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Kbd } from "@rhino/kbd";
import { Button } from "@rhino/button";
const docSearchConfig = {
  appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID ?? "",
  apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY ?? "",
  indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME ?? "",
};

function Hit({ hit, children }: { hit: { url: string }; children: ReactNode }) {
  return <Link href={hit.url}>{children}</Link>;
}

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [modifierKey, setModifierKey] = useState<"⌘" | "Ctrl">();

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useDocSearchKeyboardEvents({ isOpen, onOpen, onClose });

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl"
    );
  }, []);

  return (
    <>
      <Button
        onClick={onOpen}
        isUnstyled
        className="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-secondary-200 dark:md:bg-secondary-800/75 dark:md:ring-white/5 hover:bg-secondary-100 dark:hover:bg-secondary-800 lg:w-96"
      >
        <MagnifyingGlassIcon className="h-5 w-5 flex-none text-secondary-400 group-hover:text-secondary-500 dark:text-secondary-500 md:group-hover:text-secondary-400" />
        <span className="sr-only md:not-sr-only md:ml-2 md:text-secondary-500 md:dark:text-secondary-400">
          Search docs
        </span>
        {modifierKey && (
          <Kbd className="ml-auto hidden md:block">{modifierKey} + K</Kbd>
        )}
      </Button>

      {isOpen &&
        createPortal(
          <DocSearchModal
            {...docSearchConfig}
            initialScrollY={window.scrollY}
            onClose={onClose}
            hitComponent={Hit}
            navigator={{
              navigate({ itemUrl }) {
                Router.push(itemUrl);
              },
            }}
          />,
          document.body
        )}
    </>
  );
}
