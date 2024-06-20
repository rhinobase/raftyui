import { Button, Textarea } from "@rafty/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { CommentBox, type CommentType } from "./CommentBox";

const meta: Meta<typeof CommentBox> = {
  title: "Corp / CommentBox ",
};

export default meta;
type Story = StoryObj<typeof CommentBox>;

const COMMENTS: CommentType[] = [
  {
    id: "1",
    by: "John",
    message: "This is sample comment by john.",
    replies: [
      {
        id: "1.1",
        by: "Sam",
        message: "This is a sample reply to john by sam.",
      },
      {
        id: "1.2",
        by: "Chan",
        message:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        replies: [
          {
            id: "1.2.1",
            by: "John",
            message: "This is a sample reply to chan by john.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    by: "Chan",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
];

export const Default: Story = {
  render: () => (
    <div className="border-secondary-300 dark:border-secondary-700 dark:bg-secondary-950 flex min-h-72 flex-col gap-3 rounded-lg border bg-white py-3 pl-3">
      <CommentBox comments={COMMENTS} />
      <div className="w-full space-y-3 pr-3">
        <Textarea placeholder="Write your comment here..." />
        <Button colorScheme="primary" className="w-full">
          Submit
        </Button>
      </div>
    </div>
  ),
};
