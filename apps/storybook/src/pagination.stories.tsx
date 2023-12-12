import {
  PageJumper,
  PageSizeSelect,
  Pagination,
  PaginationButtons,
} from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components / Pagination",
  args: {
    size: "md",
    isDisabled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: function Render({ size, isDisabled }) {
    const [pagination, setPagination] = useState({
      current: 1,
      limit: 10,
    });
    const count = 100;
    const pages = count / pagination.limit;

    return (
      <Pagination
        isDisabled={isDisabled}
        size={size}
        pages={pages}
        pageLimit={pagination.limit}
        currentPage={pagination.current}
        onChange={(page, pageLimit) =>
          setPagination((prev) => {
            if (prev.limit !== pageLimit)
              return { current: 1, limit: pageLimit };
            return {
              current: page,
              limit: pageLimit,
            };
          })
        }
      >
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <div className="w-[100px]">
            <PageSizeSelect />
          </div>
        </div>
        <PageJumper />
        <div>Total Items : {count}</div>
        <PaginationButtons />
      </Pagination>
    );
  },
};

export const JumperAndButtons: Story = {
  render: function Render({ size, isDisabled }) {
    const [pagination, setPagination] = useState({
      current: 1,
      limit: 10,
    });

    return (
      <Pagination
        isDisabled={isDisabled}
        size={size}
        pages={10}
        pageLimit={pagination.limit}
        currentPage={pagination.current}
        onChange={(page, pageLimit) =>
          setPagination((prev) => {
            if (prev.limit !== pageLimit)
              return { current: 1, limit: pageLimit };
            return {
              current: page,
              limit: pageLimit,
            };
          })
        }
      >
        Page : <PageJumper />
        <PaginationButtons />
      </Pagination>
    );
  },
};

export const pageSizes: Story = {
  render: function Render({ size, isDisabled }) {
    const [pagination, setPagination] = useState({
      current: 1,
      limit: 10,
    });

    return (
      <Pagination
        isDisabled={isDisabled}
        size={size}
        pages={10}
        pageLimit={pagination.limit}
        currentPage={pagination.current}
        onChange={(page, pageLimit) =>
          setPagination((prev) => {
            if (prev.limit !== pageLimit)
              return { current: 1, limit: pageLimit };
            return {
              current: page,
              limit: pageLimit,
            };
          })
        }
      >
        <PageSizeSelect
          pageSizes={[
            { label: "10 / Page", value: 10 },
            20,
            50,
            { label: "100 / Page", value: 100 },
          ]}
        />
      </Pagination>
    );
  },
};

export const pageSizesWithNumbersOnly: Story = {
  render: function Render({ size, isDisabled }) {
    const [pagination, setPagination] = useState({
      current: 1,
      limit: 10,
    });

    return (
      <Pagination
        isDisabled={isDisabled}
        size={size}
        pages={10}
        pageLimit={pagination.limit}
        currentPage={pagination.current}
        onChange={(page, pageLimit) =>
          setPagination((prev) => {
            if (prev.limit !== pageLimit)
              return { current: 1, limit: pageLimit };
            return {
              current: page,
              limit: pageLimit,
            };
          })
        }
      >
        <PageSizeSelect pageSizes={[10, 20, 30]} />
      </Pagination>
    );
  },
};

export const pageSizesWithLabelsOnly: Story = {
  render: function Render({ size, isDisabled }) {
    const [pagination, setPagination] = useState({
      current: 1,
      limit: 10,
    });

    const pageSizes = [
      {
        label: "10 / Page",
        value: 10,
      },
      {
        label: "20 / Page",
        value: 20,
      },
      {
        label: "30 / Page",
        value: 30,
      },
    ];

    return (
      <Pagination
        isDisabled={isDisabled}
        size={size}
        pages={10}
        pageLimit={pagination.limit}
        currentPage={pagination.current}
        onChange={(page, pageLimit) =>
          setPagination((prev) => {
            if (prev.limit !== pageLimit)
              return { current: 1, limit: pageLimit };
            return {
              current: page,
              limit: pageLimit,
            };
          })
        }
      >
        <PageSizeSelect pageSizes={pageSizes} />
      </Pagination>
    );
  },
};
