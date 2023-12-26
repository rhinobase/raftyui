"use client";
import {
  CheckIcon,
  PaperAirplaneIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  AvatarGroup,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  InputField,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  classNames,
} from "@rafty/ui";
import { ReactNode, useReducer, useRef } from "react";

const USERS_DATA = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "m@example.com",
  },
  {
    id: 2,
    name: "Issabella Nguyen",
    email: "isabella.nguyen@example.com",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma@example.com",
  },
  {
    id: 4,
    name: "Jackson Lee",
    email: "p@example.com",
  },
  {
    id: 5,
    name: "William Kim",
    email: "will@email.com",
  },
];

type ChatBoxExample = NewMessageDialog;

export function ChatBoxExample({ onClick }: ChatBoxExample) {
  const ref = useRef<HTMLInputElement | null>(null);

  const [messages, dispatch] = useReducer((prev: string[]) => {
    // Checking for reference
    if (!ref.current) return prev;

    // Checking if there is a message
    const value = ref.current.value;
    if (value === "") return prev;

    const tmp = [...prev, value];
    ref.current.value = "";

    return tmp;
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <Avatar
          name={USERS_DATA[3].name}
          src={`https://api.dicebear.com/7.x/notionists/svg?seed=${USERS_DATA[3].name}&backgroundColor=ffdfbf,ffd5dc,c0aede,d1d4f9,b6e3f4`}
        />
        <div>
          <Text className="text-sm font-semibold leading-tight">
            Jackson Lee
          </Text>
          <Text className="text-secondary-500 text-sm leading-tight">
            p@example.com
          </Text>
        </div>
        <div className="flex-1" />
        <NewMessageDialog onClick={onClick} />
      </div>
      <div className="space-y-3">
        <Message className="bg-secondary-100 dark:bg-secondary-800">
          Hi, how can I help you today?
        </Message>
        <div className="flex flex-row-reverse">
          <Message className="bg-primary-500 dark:bg-primary-300/90 dark:text-secondary-900 text-white dark:font-semibold">
            Hey, I&apos;m having trouble with my account.
          </Message>
        </div>
        <Message className="bg-secondary-100 dark:bg-secondary-800">
          What seems to be the problem?
        </Message>
        <div className="flex flex-row-reverse">
          <Message className="bg-primary-500 dark:bg-primary-300/90 dark:text-secondary-900 text-white dark:font-semibold">
            I can&apos;t log in.
          </Message>
        </div>
        {messages?.map((message) => (
          <div key={message} className="flex flex-row-reverse">
            <Message className="bg-primary-500 dark:bg-primary-300/90 dark:text-secondary-900 text-white dark:font-semibold">
              {message}
            </Message>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <InputField
          name="chat input"
          ref={ref}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && dispatch()}
          className="placeholder:text-sm"
        />
        <Button
          size="icon"
          colorScheme="primary"
          className="p-2"
          onClick={dispatch}
          aria-label="Send"
        >
          <PaperAirplaneIcon height={18} width={18} />
        </Button>
      </div>
    </div>
  );
}

type NewMessageDialog = {
  onClick?: () => void;
};

function NewMessageDialog({ onClick }: NewMessageDialog) {
  const [selected, dispatch] = useReducer((prev: number[], cur: number) => {
    const index = prev.findIndex((num) => num === cur);

    if (index === -1) prev.push(cur);
    else prev.splice(index, 1);

    return [...prev].sort();
  }, []);

  return (
    <Dialog onOpenChange={onClick}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger
            size="fab"
            variant="outline"
            className="!p-2"
            aria-label="add people"
          >
            <PlusIcon height={16} width={16} />
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>New message</TooltipContent>
      </Tooltip>
      <DialogOverlay className="z-[70]" />
      <DialogContent className="dark:bg-secondary-900 z-[70] p-0">
        <div className="space-y-2 p-4">
          <DialogTitle>New message</DialogTitle>
          <Text className="text-sm leading-tight opacity-60">
            Invite a user to this thread. This will create a new group message.
          </Text>
        </div>
        <Command className="dark:border-secondary-700 dark:bg-secondary-900 rounded-none border-y">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {USERS_DATA.map((user) => (
                <CommandItem
                  key={user.id}
                  className="rounded-lg"
                  onSelect={() => dispatch(user.id)}
                >
                  <div className="flex w-full items-center gap-3">
                    <Avatar
                      name={user.name}
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${user.name}&backgroundColor=ffdfbf,ffd5dc,c0aede,d1d4f9,b6e3f4`}
                    />
                    <div>
                      <Text className="text-sm font-semibold leading-tight">
                        {user.name}
                      </Text>
                      <Text className="text-secondary-500 text-sm leading-tight">
                        {user.email}
                      </Text>
                    </div>
                    <div className="flex-1" />
                    {selected.includes(user.id) && (
                      <CheckIcon
                        height={16}
                        width={16}
                        className="opacity-60"
                      />
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="flex items-center justify-between p-4">
          {selected.length > 0 ? (
            <AvatarGroup>
              {selected.map((user_index) => {
                const name = USERS_DATA[user_index - 1]?.name;
                return (
                  <Avatar
                    key={user_index}
                    name={name}
                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${name}&backgroundColor=ffdfbf,ffd5dc,c0aede,d1d4f9,b6e3f4`}
                  />
                );
              })}
            </AvatarGroup>
          ) : (
            <Text className="dark:text-secondary-500 text-secondary-400 text-sm">
              Select users to add to this thread.
            </Text>
          )}
          <DialogClose asChild>
            <Button
              colorScheme="primary"
              disabled={!selected.length}
              aria-label="add"
            >
              Continue
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Message({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Text
      className={classNames(
        "text-secondary-800 dark:text-secondary-100 max-w-[75%] rounded-md px-3 py-1.5 text-sm font-medium leading-snug",
        className,
      )}
    >
      {children}
    </Text>
  );
}
