"use client";
import {
  ArrowDownTrayIcon,
  DocumentDuplicateIcon,
  PaperAirplaneIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  InputField,
  InputGroup,
  Suffix,
  Text,
  eventHandler,
} from "@rafty/ui";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useReducer, useState } from "react";

type DataType = { id: string; message: string; by: string };

export function ChatBox() {
  const [items, dispatch] = useReducer(
    (prev: DataType[], cur: DataType | string | null) => {
      if (cur == null) return [];
      if (typeof cur === "string") {
        const index = prev.findIndex((item) => item.id === cur);
        if (index > -1) {
          prev.splice(index, 1);
        }
      } else {
        prev.push(cur);
      }
      return [...prev];
    },
    [],
  );

  const onDownload = () => {
    // Convert the data array into a CSV string
    const csvString = [
      ["message", "by"], // Specify your headers here
      ...items.map((item) => [item.message, item.by]), // Map your data fields accordingly
    ]
      .map((row) => row.join(","))
      .join("\n");

    // Create a Blob from the CSV string
    const blob = new Blob([csvString], { type: "text/csv" });

    // Generate a download link and initiate the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "download.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const deleteMessage = () => dispatch(null);

  const hasHeaderButtonDisabled = items.length === 0;

  return (
    <div className="dark:border-secondary-700 border-secondary-300 flex h-[500px] w-full flex-col rounded-lg border">
      <ChatBoxHeader
        onDelete={deleteMessage}
        onDownload={onDownload}
        isDisabled={hasHeaderButtonDisabled}
      />
      <div className="flex-1 overflow-hidden overflow-y-auto px-3.5 py-2.5">
        {items.length === 0 ? (
          <NoDataFound />
        ) : (
          <div className="space-y-3">
            {items.map((chat) => (
              <ChatBoxCard
                key={chat.id}
                chat={chat}
                onMessageDelete={dispatch}
              />
            ))}
          </div>
        )}
      </div>
      <MessageSend
        onMessageSent={(message) => {
          let id = "0";
          if (items.length > 0) {
            const index = items.length - 1;
            id = String(Number(items[index].id) - 1);
          }
          dispatch({ id, by: "me", message });
        }}
      />
    </div>
  );
}

type ChatBoxHeader = {
  onDelete: () => void;
  onDownload: () => void;
  isDisabled: boolean;
};

function ChatBoxHeader({ onDelete, onDownload, isDisabled }: ChatBoxHeader) {
  return (
    <div className="dark:border-secondary-700 border-secondary-300 flex items-center justify-between border-b px-3.5 py-2.5">
      <h2 className="text-lg font-semibold">Chat</h2>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          isDisabled={isDisabled}
          onClick={onDownload}
        >
          <ArrowDownTrayIcon className="size-4 stroke-2" />
        </Button>
        <Button
          variant="ghost"
          colorScheme="error"
          size="icon"
          isDisabled={isDisabled}
          onClick={onDelete}
        >
          <TrashIcon className="size-4 stroke-2" />
        </Button>
      </div>
    </div>
  );
}

type ChatBoxCard = {
  chat: DataType;
  onMessageDelete: (id: string) => void;
};

function ChatBoxCard({ chat, onMessageDelete }: ChatBoxCard) {
  const [, copyToClipboard] = useCopyToClipboard();

  const handleMessageDelete = eventHandler(() => onMessageDelete(chat.id));

  return (
    <div className="group flex items-center gap-3">
      <Avatar name={chat.by} size="sm" />
      <div className="space-y-1">
        <p className="text-sm font-medium capitalize">{chat.by}</p>
        <p className="text-xs">{chat.message}</p>
      </div>
      <div className="flex-1" />
      <Button
        size="icon"
        variant="ghost"
        title="copy"
        className="invisible group-hover:visible"
        onClick={() => copyToClipboard(chat.message)}
      >
        <DocumentDuplicateIcon className="size-3.5" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="invisible group-hover:visible"
        onClick={handleMessageDelete}
        onKeyDown={handleMessageDelete}
      >
        <TrashIcon className="size-3.5" />
      </Button>
    </div>
  );
}

type MessageSend = {
  onMessageSent: (value: string) => void;
};

function MessageSend({ onMessageSent }: MessageSend) {
  const [value, setValue] = useState("");

  const handleMessageSend = eventHandler(() => {
    onMessageSent(value);
    setValue("");
  });

  return (
    <div className="flex items-center gap-2 px-3.5 pb-3.5 pt-1.5">
      <InputGroup>
        <InputField
          placeholder="Type a message..."
          value={value}
          className="leading-[1.5rem] placeholder:text-[0.875rem]"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleMessageSend}
        />
        <Suffix className="pointer-events-auto">
          <Button
            size="icon"
            className="p-1"
            variant="ghost"
            disabled={value === ""}
            onClick={handleMessageSend}
            onKeyDown={handleMessageSend}
            colorScheme={value === "" ? "secondary" : "primary"}
          >
            <PaperAirplaneIcon className="size-4 stroke-2" />
          </Button>
        </Suffix>
      </InputGroup>
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
