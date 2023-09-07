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
  DialogContent,
  DialogFooter,
  DialogHeader,
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
import { ReactNode, useEffect, useReducer, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import { HiCheck, HiOutlinePlus } from "react-icons/hi";

const USERS_DATA = [
  {
    id: 1,
    src: "https://api.dicebear.com/7.x/notionists/svg?seed=Olivia",
    name: "Olivia Martin",
    email: "m@example.com",
  },
  {
    id: 2,
    src: "https://api.dicebear.com/7.x/notionists/svg?seed=Issabella",
    name: "Issabella Nguyen",
    email: "isabella.nguyen@example.com",
  },
  {
    id: 3,
    src: "https://api.dicebear.com/7.x/notionists/svg?seed=Emma",
    name: "Emma Wilson",
    email: "emma@example.com",
  },
  {
    id: 4,
    src: "https://api.dicebear.com/7.x/notionists/svg?seed=Jackson",
    name: "Jackson Lee",
    email: "p@example.com",
  },
  {
    id: 5,
    src: "https://api.dicebear.com/7.x/notionists/svg?seed=William",
    name: "William Kim",
    email: "will@email.com",
  },
];

export function ChatBoxExample() {
  const [messageText, setMessageText] = useState<string>();
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (messageText) setMessages((prev) => [...prev, messageText]);
    setMessageText(undefined);
    inputRef.current!.value = "";
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-4 justify-between items-center">
        <Avatar
          name="Jackson Lee"
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Willow"
        />
        <div>
          <Text className="font-semibold text-sm leading-tight">
            Jackson Lee
          </Text>
          <Text className="text-secondary-500 text-sm leading-tight">
            p@example.com
          </Text>
        </div>
        <div className="flex-1" />
        <NewMessageDialog />
      </div>
      <div className="space-y-2.5">
        <MessageComponent className="bg-secondary-100 dark:bg-secondary-800">
          Hi, how can I help you today?
        </MessageComponent>
        <div className="flex flex-row-reverse">
          <MessageComponent className="bg-primary-500 dark:bg-primary-300/90 !text-white dark:!text-secondary-900 dark:!font-semibold">
            Hey, I&aposm having trouble with my account.
          </MessageComponent>
        </div>
        <MessageComponent className="bg-secondary-100 dark:bg-secondary-800">
          What seems to be the problem?
        </MessageComponent>
        <div className="flex flex-row-reverse">
          <MessageComponent className="bg-primary-500 dark:bg-primary-300/90 !text-white dark:!text-secondary-900 dark:!font-semibold">
            I can&apost log in.
          </MessageComponent>
        </div>
        {messages &&
          messages.map((m, i) => (
            <div key={i} className="flex flex-row-reverse">
              <MessageComponent className="bg-primary-500 dark:bg-primary-300/90 !text-white dark:!text-secondary-900 dark:!font-semibold">
                {m}
              </MessageComponent>
            </div>
          ))}
      </div>
      <div className="flex gap-2 items-center">
        <InputField
          ref={inputRef}
          placeholder="Type your message..."
          onChange={(e) => setMessageText(e.currentTarget.value)}
          onKeyDown={(e) => e.key == "Enter" && sendMessage()}
        />
        <Button
          size="icon"
          colorScheme="primary"
          isDisabled={messageText == undefined}
          className="!p-2"
          onClick={sendMessage}
        >
          <BiSend size={20} />
        </Button>
      </div>
    </div>
  );
}

function NewMessageDialog() {
  const [selected, mutate] = useReducer((prev: any, cur: any): any => {
    const value = prev?.id == cur ? undefined : cur;

    if (value)
      return {
        ...USERS_DATA?.find((data) => data.id === value),
      };

    return undefined;
  }, undefined);

  console.log(selected);

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger size="fab" variant="outline" className="!p-2">
            <HiOutlinePlus size={16} />
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>New message</TooltipContent>
      </Tooltip>
      <DialogOverlay />
      <DialogContent className="!p-0 dark:!bg-secondary-900">
        <DialogHeader className="!p-4">
          <DialogTitle>New message</DialogTitle>
          <DialogTitle className="!text-sm">
            Invite a user to this thread. This will create a new group message.
          </DialogTitle>
        </DialogHeader>
        <Command className="border-y dark:border-secondary-700 !rounded-none dark:!bg-secondary-900">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {USERS_DATA.map((user, index) => (
                <CommandItem
                  key={index}
                  className="!rounded-lg"
                  onSelect={() => mutate(user.id)}
                >
                  <div className="flex w-full gap-3 items-center">
                    <Avatar name="Jackson Lee" src={user.src} />
                    <div>
                      <Text className="font-semibold text-sm leading-tight">
                        {user.name}
                      </Text>
                      <Text className="text-secondary-500 text-sm leading-tight">
                        {user.email}
                      </Text>
                    </div>
                    <div className="flex-1" />
                    {/* <HiCheck className="text-primary-500 dark:text-primary-400" /> */}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        <DialogFooter className="!p-4 !justify-between items-center">
          {selected ? (
            <Avatar name={selected.name} src={selected.src} />
          ) : (
            <Text className="text-sm dark:text-secondary-500 text-secondary-400">
              Select users to add to this thread.
            </Text>
          )}
          <Button colorScheme="primary" disabled={!selected}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function MessageComponent({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Text
      className={classNames(
        "w-max px-3 py-1.5 rounded-md max-w-[75%] text-sm font-medium dark:text-secondary-100 leading-snug",
        className,
      )}
    >
      {children}
    </Text>
  );
}
