import { Pagination } from "@rafty/ui";

export const pagination_examples = {
  "pagination:usage": (
    <Pagination
      total={100}
      pageSize={10}
      showTotal={(total) => `Total Data ${total}`}
      className="justify-between"
    />
  ),
  "pagination:showSizeChanger": (
    <Pagination total={100} pageSize={10} showSizeChanger />
  ),

  "pagination:showQuickJumper": (
    <Pagination total={100} showQuickJumper pageSize={10} />
  ),
  "pagination:size": (
    <Pagination
      total={100}
      pageSize={10}
      size="sm"
      showQuickJumper
      showSizeChanger
    />
  ),
  "pagination:total_number": (
    <Pagination
      total={100}
      pageSize={10}
      showTotal={(total, range) => `${range} of ${total} items`}
    />
  ),
  "pagination:isDisabled": (
    <Pagination
      total={100}
      isDisabled
      showQuickJumper
      pageSize={10}
      showSizeChanger
    />
  ),
};
