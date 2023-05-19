import { Button, Progress } from "..";
import {} from "react-aria";
import { TrashIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utils";

export function UploadField({ size = "lg" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <>
      <div className="flex w-full justify-center cursor-pointer rounded-lg border border-dashed hover:border-primary-500 border-gray-900/25 transition-all duration-500">
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
        />
        <label
          htmlFor="file-upload"
          className={classNames(
            size == "sm" && "py-8",
            size == "md" && "py-14",
            size == "lg" && "py-14",
            "relative rounded-md w-full cursor-pointer bg-white font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          )}
        >
          <div className="text-center">
            <svg
              className={classNames(
                size == "sm" && "h-6 w-6",
                size == "md" && "h-8 w-8",
                size == "lg" && "h-12 w-12",
                "mx-auto text-gray-300 h-12 w-12"
              )}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div
              className={classNames(
                size == "sm" && "text-sm",
                "mt-4 flex-col justify-center text-base leading-7 text-gray-400"
              )}
            >
              <p>Upload a file</p>
              <p
                className={classNames(
                  size == "sm" && "hidden",
                  size == "md" && "hidden",
                  size == "lg" && "visible",
                  "text-sm leading-6 text-gray-400"
                )}
              >
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </div>
          </div>
        </label>
      </div>
      <div
        className={classNames(
          size == "sm" && "px-1",
          "flex w-full mt-2 gap-1 items-center justify-between"
        )}
      >
        <Progress size="sm" value={50} />
        <Button variant="ghost" size="icon">
          <TrashIcon className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
