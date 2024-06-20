import { Avatar, Button, eventHandler, useBoolean } from "@rafty/ui";
import type { PropsWithChildren } from "react";

export type CommentType = {
  id: string;
  message: string;
  by: string;
  replies?: CommentType[];
};

export type CommentBox = {
  comments: CommentType[];
};

export function CommentBox({ comments }: CommentBox) {
  return (
    <div className="flex max-h-[400px] flex-1 flex-col gap-2 overflow-y-auto pl-1 pr-4">
      {comments.length > 0 ? (
        <CommentsRender comments={comments} />
      ) : (
        <NoCommentsBanner />
      )}
    </div>
  );
}

type CommentsRender = {
  comments: CommentType[];
};

function CommentsRender(props: CommentsRender) {
  return props.comments.map((comment, index) => (
    <CommentItem
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      key={index}
      comment={comment}
    >
      {comment.replies && <CommentsRender comments={comment.replies} />}
    </CommentItem>
  ));
}

type CommentItem = PropsWithChildren<{
  comment: CommentType;
}>;

function CommentItem(props: CommentItem) {
  const [isReplyVisible, toggleReplyVisible] = useBoolean();

  const handleToggleReplyVisible = eventHandler(() => toggleReplyVisible());

  return (
    <div>
      <div className="flex w-full items-start gap-2.5">
        <Avatar name={props.comment.by} />
        <div className="w-full">
          <p className="text-primary-600 dark:text-primary-200 text-sm font-medium">
            {props.comment.by}
          </p>
          <p>{props.comment.message}</p>
          <div className="mt-1.5 flex w-full gap-3">
            <Button
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-300 text-xs font-medium transition-all ease-in-out"
              isUnstyled
            >
              Reply
            </Button>
            <Button
              className="text-secondary-600 dark:text-secondary-400 text-xs font-medium transition-all ease-in-out hover:text-red-500 dark:hover:text-red-300"
              isUnstyled
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-1 pl-[46px]">
        {isReplyVisible && (
          <div className="mt-2 w-full space-y-2">{props.children}</div>
        )}
        {props.children && (
          <Button
            isUnstyled
            className="text-secondary-500 text-xs transition-all ease-in-out hover:text-black dark:hover:text-white"
            onClick={handleToggleReplyVisible}
            onKeyDown={handleToggleReplyVisible}
          >
            {isReplyVisible ? "Hide" : "Show"} replies
          </Button>
        )}
      </div>
    </div>
  );
}

function NoCommentsBanner() {
  return (
    <div className="flex w-full flex-1 select-none items-center justify-center">
      <p className="text-secondary-400 dark:text-secondary-600 text-sm">
        No commments available
      </p>
    </div>
  );
}
