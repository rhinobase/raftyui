import { Pagination } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pagination> = {
  title: "Components / Pagination",
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: ({ size }) => (
    <div className="flex h-full items-center justify-center">
      <Pagination
        total={100}
        pageSizeOptions={[10, 20, 30]}
        disabled={false}
        hideOnSinglePage={false}
        pagesize={10}
        showQuickJumper={true}
        showSizeChanger={true}
        showTitle={false}
        size={size}
        className="flex gap-5"
      />
    </div>
  ),
};
