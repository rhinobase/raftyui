import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PageJumper } from "./PageJumper";
import { PageSizeSelect } from "./PageSizeSelect";
import { Pagination } from "./Pagination";
import { PaginationButtons } from "./PaginationButtons";

const meta: Meta<typeof Pagination> = {
  title: "Corp / Pagination",
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
  render: ({ size, isDisabled }) => {
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
        <div className="flex items-center gap-1">
          <span className="text-secondary-700 dark:text-secondary-200">
            Rows per page :
          </span>
          <PageSizeSelect />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-secondary-700 dark:text-secondary-200">Page :</p>
          <PageJumper />
        </div>
        <p className="text-secondary-700 dark:text-secondary-200">
          Total Items : {count}
        </p>
        <PaginationButtons />
      </Pagination>
    );
  },
};

export const JumperAndButtons: Story = {
  render: ({ size, isDisabled }) => {
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
        <div className="flex items-center gap-1">
          <p className="text-secondary-700 dark:text-secondary-200">Page :</p>
          <PageJumper />
        </div>
        <PaginationButtons />
      </Pagination>
    );
  },
};

export const pageSizes: Story = {
  render: ({ size, isDisabled }) => {
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
  render: ({ size, isDisabled }) => {
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
  render: ({ size, isDisabled }) => {
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
