import {
  ArrowDownTrayIcon,
  PaperAirplaneIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, InputField, InputGroup, Suffix } from "@rafty/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ChatBox, type ChatType, SENDER } from "./ChatBox";

const meta: Meta<typeof ChatBox> = {
  title: "Corp / ChatBox",
};

export default meta;
type Story = StoryObj<typeof ChatBox>;

const DATA: ChatType[] = [
  {
    id: "1",
    by: "me",
    message: "hello",
    sender: SENDER.user,
    time: "10:15 PM",
  },
  {
    id: "2",
    by: "Ram",
    message: "hello",
    sender: SENDER.other,
    time: "10:16 PM",
  },
  {
    id: "3",
    by: "me",
    message: "hiii",
    sender: SENDER.user,
    time: "10:17 PM",
  },
  {
    id: "4",
    by: "Ram",
    message: "how r u",
    sender: SENDER.other,
    time: "10:17 PM",
  },
  {
    id: "5",
    by: "me",
    message: "dkdkfk fj  de",
    sender: SENDER.user,
    time: "10:18 PM",
  },
  {
    id: "6",
    by: "me",
    message: "hello",
    sender: SENDER.user,
    time: "10:15 PM",
  },
  {
    id: "7",
    by: "Ram",
    message: "hello",
    sender: SENDER.other,
    time: "10:16 PM",
  },
  {
    id: "8",
    by: "me",
    message: "hiii",
    sender: SENDER.user,
    time: "10:17 PM",
  },
  {
    id: "9",
    by: "Ram",
    message: "how r u",
    sender: SENDER.other,
    time: "10:17 PM",
  },
  {
    id: "10",
    by: "me",
    message: "dkdkfk fj  de",
    sender: SENDER.user,
    time: "10:18 PM",
  },
];

export const Default: Story = {
  render: () => {
    const [data, setData] = useState(DATA);

    const onDownload = () => {
      // Convert the data array into a CSV string
      const csvString = [
        ["ID", "MESSAGE", "BU", "SENDER", "TIME"], // Specify your headers here
        ...data.map(({ by, id, message, sender, time }) => [
          id,
          message,
          by,
          sender,
          time,
        ]), // Map your data fields accordingly
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

    return (
      <div className="dark:border-secondary-700 border-secondary-300 flex h-[500px] w-full flex-col rounded-lg border">
        <div className="dark:border-secondary-700 border-secondary-300 flex items-center justify-between border-b px-3.5 py-2.5">
          <h2 className="text-lg font-semibold">Chat</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={onDownload}>
              <ArrowDownTrayIcon className="size-4 stroke-2" />
            </Button>
            <Button
              variant="ghost"
              colorScheme="error"
              size="icon"
              onClick={() => setData([])}
            >
              <TrashIcon className="size-4 stroke-2" />
            </Button>
          </div>
        </div>
        <ChatBox data={data} />
        <div className="flex items-center gap-2 p-3.5">
          <InputGroup>
            <InputField
              placeholder="Type a message..."
              className="leading-[1.5rem] placeholder:text-[0.875rem]"
            />
            <Suffix className="pointer-events-auto">
              <Button size="icon" className="p-1" variant="ghost">
                <PaperAirplaneIcon className="size-4 stroke-2" />
              </Button>
            </Suffix>
          </InputGroup>
        </div>
      </div>
    );
  },
};
