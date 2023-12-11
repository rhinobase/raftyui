import { Pagination } from "@rafty/ui";

export const pagination_examples = {
  "pagination:usage": (
    <Pagination
      total={100}
      showTotal={(total) => `Total Data ${total}`}
      className="justify-between"
    />
  ),
  "pagination:show_size_changer": <Pagination total={100} showSizeChanger />,

  "pagination:show_quick_jumper": <Pagination total={100} showQuickJumper />,
  "pagination:size": (
    <Pagination total={100} size="sm" showQuickJumper showSizeChanger />
  ),
  "pagination:Total_Number": (
    <Pagination
      total={100}
      showTotal={(total, range) => `${range} of ${total} items`}
    />
  ),
  "pagination:is_disabled": (
    <Pagination total={100} isDisabled showQuickJumper showSizeChanger />
  ),
};
