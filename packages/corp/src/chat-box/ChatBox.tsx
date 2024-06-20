"use client";
import { DocumentDuplicateIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Text, classNames } from "@rafty/ui";
import { useCopyToClipboard } from "@uidotdev/usehooks";

export enum SENDER {
  user = 0,
  other = 1,
}

export type ChatType = {
  id: string;
  message: string;
  by: string;
  sender: SENDER;
  time: string;
};

export type ChatBox = {
  data: ChatType[];
};

export function ChatBox({ data }: ChatBox) {
  return (
    <div className="flex-1 overflow-hidden overflow-y-auto px-3.5 pt-2.5">
      {data.length === 0 ? (
        <NoDataFound />
      ) : (
        <div className="space-y-3">
          {data.map((chat) => (
            <ChatBoxCard key={chat.id} chat={chat} />
          ))}
        </div>
      )}
    </div>
  );
}

type ChatBoxCard = {
  chat: ChatType;
};

function ChatBoxCard({ chat }: ChatBoxCard) {
  const [, copyToClipboard] = useCopyToClipboard();
  const isUser = chat.sender === SENDER.user;

  return (
    <div
      className={classNames(
        "flex items-center justify-between",
        isUser && "flex flex-row-reverse",
      )}
    >
      <div
        className={classNames(
          "group flex items-center gap-2",
          isUser && "flex flex-row-reverse",
        )}
      >
        <div
          className={classNames(
            "flex gap-2",
            isUser && "flex flex-row-reverse",
          )}
        >
          <Avatar name={chat.by} size="sm" />
          <div
            className={classNames(
              "flex max-w-[90%] items-center gap-3 rounded-md px-3.5 py-1.5",
              "bg-secondary-100/70 dark:bg-secondary-800",
            )}
          >
            <div>
              <p className="text-primary-600 dark:text-primary-200 text-xs font-semibold capitalize">
                {chat.by}
              </p>
              <p className="font-medium">
                {chat.message}
                <span className="text-secondary-400 dark:text-secondary-600 ml-2 text-[0.7rem]">
                  {chat.time}
                </span>
              </p>
            </div>
          </div>
        </div>
        <Button
          size="fab"
          title="copy"
          className="invisible group-hover:visible"
          onClick={() => copyToClipboard(chat.message)}
        >
          <DocumentDuplicateIcon className="size-4 stroke-2" />
        </Button>
        <Button
          size="fab"
          title="delete"
          className="invisible group-hover:visible"
        >
          <TrashIcon className="size-4 stroke-2" />
        </Button>
      </div>
    </div>
  );
}

function NoDataFound() {
  return (
    <Text className="flex h-full items-center justify-center" isMuted>
      No message here yet
    </Text>
  );
}
