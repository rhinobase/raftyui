"use client";
import {
  type AutocompleteApi,
  type AutocompleteCollection,
  type AutocompleteState,
  createAutocomplete,
} from "@algolia/autocomplete-core";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogContent,
  DialogOverlay,
  FieldControl,
  InputField,
  InputGroup,
  Kbd,
  Prefix,
  Suffix,
} from "@rafty/ui";
import { useRouter } from "next/navigation";
import {
  type Dispatch,
  Fragment,
  type SetStateAction,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Highlighter from "react-highlight-words";
import { navigation } from "../lib/navigation";
import type { Result } from "../markdoc/search.mjs";

type EmptyObject = Record<string, never>;

type Autocomplete = AutocompleteApi<
  Result,
  React.SyntheticEvent,
  React.MouseEvent,
  React.KeyboardEvent
>;

function useAutocomplete({
  close,
}: {
  close: (autocomplete: Autocomplete) => void;
}) {
  const id = useId();
  const router = useRouter();
  const [autocompleteState, setAutocompleteState] = useState<
    AutocompleteState<Result> | EmptyObject
  >({});

  function navigate({ itemUrl }: { itemUrl?: string }) {
    if (!itemUrl) {
      return;
    }
    router.push(itemUrl);

    if (
      itemUrl ===
      window.location.pathname + window.location.search + window.location.hash
    ) {
      close(autocomplete);
    }
  }

  const [autocomplete] = useState<Autocomplete>(() =>
    createAutocomplete<
      Result,
      React.SyntheticEvent,
      React.MouseEvent,
      React.KeyboardEvent
    >({
      id,
      placeholder: "Find something...",
      defaultActiveItemId: 0,
      onStateChange({ state }) {
        setAutocompleteState(state);
      },
      shouldPanelOpen({ state }) {
        return state.query !== "";
      },
      navigator: {
        navigate,
      },
      getSources({ query }) {
        return import("../markdoc/search.mjs").then(({ search }) => {
          return [
            {
              sourceId: "documentation",
              getItems() {
                return search(query, { limit: 5 });
              },
              getItemUrl({ item }) {
                return item.url;
              },
              onSelect: navigate,
            },
          ];
        });
      },
    }),
  );

  return { autocomplete, autocompleteState };
}

function LoadingIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  const id = useId();

  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="5.5" strokeLinejoin="round" />
      <path
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
      />
      <defs>
        <linearGradient
          id={id}
          x1="13"
          x2="9.5"
          y1="9"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HighlightQuery({ text, query }: { text: string; query: string }) {
  return (
    <Highlighter
      highlightClassName="group-aria-selected:underline bg-transparent text-primary-600 dark:text-primary-400"
      searchWords={[query]}
      autoEscape={true}
      textToHighlight={text}
    />
  );
}

function SearchResult({
  result,
  autocomplete,
  collection,
  query,
}: {
  result: Result;
  autocomplete: Autocomplete;
  collection: AutocompleteCollection<Result>;
  query: string;
}) {
  const id = useId();

  const sectionTitle = navigation.find((section) =>
    section.links.find((link) => link.href === result.url.split("#")[0]),
  )?.title;
  const hierarchy = [sectionTitle, result.pageTitle].filter(
    (x): x is string => typeof x === "string",
  );

  return (
    <li
      className="aria-selected:bg-secondary-100 dark:aria-selected:bg-secondary-700/30 group block cursor-pointer rounded-lg px-3 py-2"
      aria-labelledby={`${id}-hierarchy ${id}-title`}
      {...autocomplete.getItemProps({
        item: result,
        source: collection.source,
      })}
    >
      <div
        id={`${id}-title`}
        aria-hidden="true"
        className="text-secondary-700 group-aria-selected:text-primary-600 dark:text-secondary-300 dark:group-aria-selected:text-primary-400 text-sm"
      >
        <HighlightQuery text={result.title} query={query} />
      </div>
      {hierarchy.length > 0 && (
        <div
          id={`${id}-hierarchy`}
          aria-hidden="true"
          className="text-secondary-500 dark:text-secondary-400 mt-0.5 truncate whitespace-nowrap text-xs"
        >
          {hierarchy.map((item, index, items) => (
            <Fragment key={item}>
              <HighlightQuery text={item} query={query} />
              <span
                className={
                  index === items.length - 1
                    ? "sr-only"
                    : "text-secondary-300 dark:text-secondary-700 mx-2"
                }
              >
                /
              </span>
            </Fragment>
          ))}
        </div>
      )}
    </li>
  );
}

function SearchResults({
  autocomplete,
  query,
  collection,
}: {
  autocomplete: Autocomplete;
  query: string;
  collection: AutocompleteCollection<Result>;
}) {
  if (collection.items.length === 0) {
    return (
      <p className="text-secondary-700 dark:text-secondary-400 px-4 py-8 text-center text-sm">
        No results for &ldquo;
        <span className="text-secondary-900 break-words dark:text-white">
          {query}
        </span>
        &rdquo;
      </p>
    );
  }

  return (
    <ul {...autocomplete.getListProps()}>
      {collection.items.map((result) => (
        <SearchResult
          key={result.url}
          result={result}
          autocomplete={autocomplete}
          collection={collection}
          query={query}
        />
      ))}
    </ul>
  );
}

const SearchInput = forwardRef<
  React.ElementRef<"input">,
  {
    autocomplete: Autocomplete;
    autocompleteState: AutocompleteState<Result> | EmptyObject;
    onClose: () => void;
  }
>(function SearchInput({ autocomplete, autocompleteState, onClose }, inputRef) {
  const inputProps = autocomplete.getInputProps({ inputElement: null });

  return (
    <FieldControl name="search">
      <InputGroup>
        <Prefix>
          <MagnifyingGlassIcon height={18} width={18} className="stroke-2" />
        </Prefix>
        <InputField
          ref={inputRef}
          size="lg"
          {...inputProps}
          onKeyDown={(event) => {
            if (
              event.key === "Escape" &&
              !autocompleteState.isOpen &&
              autocompleteState.query === ""
            ) {
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }

              onClose();
            } else {
              inputProps.onKeyDown(event);
            }
          }}
        />
        {autocompleteState.status === "stalled" && (
          <Suffix>
            <LoadingIcon className="stroke-secondary-200 text-secondary-400 dark:stroke-secondary-700 dark:text-secondary-500 size-6 animate-spin" />
          </Suffix>
        )}
      </InputGroup>
    </FieldControl>
  );
});

type SearchDialog = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function SearchDialog({ open, setOpen }: SearchDialog) {
  const formRef = useRef<React.ElementRef<"form">>(null);
  const panelRef = useRef<React.ElementRef<"div">>(null);
  const inputRef = useRef<React.ElementRef<typeof SearchInput>>(null);

  const close = useCallback(
    (autocomplete: Autocomplete) => {
      setOpen(false);
      autocomplete.setQuery("");
    },
    [setOpen],
  );

  const { autocomplete, autocompleteState } = useAutocomplete({
    close() {
      close(autocomplete);
    },
  });

  useEffect(() => {
    if (open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen(true);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setOpen]);

  return (
    <Dialog open={open} onOpenChange={() => close(autocomplete)}>
      <DialogOverlay className="z-[70]" />
      <DialogContent
        showCloseButton={false}
        className="top-[15%] z-[70] max-w-[370px] -translate-y-0 p-0 lg:max-w-[40rem]"
      >
        <div {...autocomplete.getRootProps({})}>
          <form
            ref={formRef}
            {...autocomplete.getFormProps({
              inputElement: inputRef.current,
            })}
          >
            <SearchInput
              ref={inputRef}
              autocomplete={autocomplete}
              autocompleteState={autocompleteState}
              onClose={() => setOpen(false)}
            />
            <div
              ref={panelRef}
              className="border-secondary-200 dark:border-secondary-400/10 dark:bg-secondary-800 rounded-b-md border-t bg-white px-2 py-3 empty:hidden"
              {...autocomplete.getPanelProps({})}
            >
              {autocompleteState.isOpen && (
                <SearchResults
                  autocomplete={autocomplete}
                  query={autocompleteState.query}
                  collection={autocompleteState.collections[0]}
                />
              )}
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SearchButton({ setOpen }: Pick<SearchDialog, "setOpen">) {
  const [modifierKey, setModifierKey] = useState<string>();

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl",
    );
  }, []);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        className="hidden gap-2 md:flex"
        aria-label="Search docs"
        leftIcon={
          <MagnifyingGlassIcon height={16} width={16} className="stroke-2" />
        }
        rightIcon={
          modifierKey ? (
            <Kbd className="text-xs">{modifierKey} K</Kbd>
          ) : undefined
        }
      >
        Search docs
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="md:hidden"
        aria-label="Search docs"
      >
        <MagnifyingGlassIcon height={16} width={16} className="stroke-2" />
      </Button>
    </>
  );
}
