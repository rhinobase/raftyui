import { Button } from "@rhino/button";
import { Progress } from "@rhino/progress";
import { PhotoIcon, TrashIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rhino/utils";
import { useDropzone } from "react-dropzone";
import { forwardRef, useEffect, useState } from "react";

type UploadFile = {
  name?: string;
  percent?: number;
  status?: "error" | "warning" | "success" | "primary";
  thumbUrl?: string;
  uid?: string;
  url?: string;
};

export type Upload = Omit<JSX.IntrinsicElements["input"], "size"> & {
  size?: "sm" | "md" | "lg";
  previewFile?: boolean;
  action?: string;
  customRequest?: (file: string) => Promise<string> | string;
  data?: (file: File) => object | object | Promise<object>;
  defaultFileList?: object[];
  fileList?: UploadFile[];
  onChange?: (filelist: File[]) => void;
  onPreview?: (file: File) => void;
  onDrop?: (event: React.DragEvent) => void;
  onRemove?: (file: File) => void | Promise<boolean>;
  progress?: boolean;
  progressValue?: number;
};

export const Upload = forwardRef<HTMLInputElement, Upload>(
  (
    {
      progressValue = 15,
      size = "md",
      previewFile = true,
      progress = true,
      ...props
    },
    forwardedRef
  ) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [files, setFiles] = useState<File[]>();
    useEffect(() => {
      setFiles(acceptedFiles);
    }, [acceptedFiles]);

    console.log(acceptedFiles);
    return (
      <>
        <div
          {...getRootProps()}
          className="flex w-full justify-center cursor-pointer rounded-lg border border-dashed hover:border-primary-500 border-gray-900/25 transition-all duration-500"
        >
          <input
            {...props}
            name="file-upload"
            type="file"
            onChange={(e) => ""}
            {...getInputProps()}
            ref={forwardedRef}
          />
          <label
            htmlFor="file-upload"
            className={classNames(
              size === "sm" && "py-8",
              size === "md" && "py-14",
              size === "lg" && "py-14",
              "relative rounded-md w-full text-center cursor-pointer bg-white font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            )}
          >
            <PhotoIcon
              className={classNames(
                size === "sm" && "h-6 w-6",
                size === "md" && "h-8 w-8",
                size === "lg" && "h-12 w-12",
                "mx-auto text-gray-400 h-12 w-12"
              )}
            />
            <div
              className={classNames(
                size === "sm" && "text-sm",
                "mt-2 flex-col justify-center text-base leading-7 text-gray-400"
              )}
            >
              Upload a file
              <p
                className={classNames(
                  size === "sm" && "hidden",
                  size === "md" && "hidden",
                  size === "lg" && "visible",
                  "text-sm leading-6 text-gray-400"
                )}
              >
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </div>
          </label>
        </div>
        <div
          className={classNames(
            size === "sm" && "px-1",
            "flex w-full mt-1 gap-1 items-center justify-between"
          )}
        >
          {progress && (
            <>
              <Progress
                size="sm"
                minValue={0}
                maxValue={100}
                value={progressValue}
                className="rounded-sm"
              />
              <Button
                colorScheme="error"
                variant="ghost"
                size="sm"
                className="!text-secondary-400 hover:!text-error-500 !p-[1px]"
              >
                <TrashIcon className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
        {previewFile && (
          <div className="w-full overflow-x-auto">
            <div className="flex gap-2 items-center w-max">
              {files &&
                files.map((file, index) => (
                  <div
                    className="relative h-28 w-28 group overflow-hidden border rounded-md p-2"
                    key={index + file.name}
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="h-28 w-28 object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full gap-2 items-center justify-center hidden group-hover:flex bg-black/60 transition-all">
                      <Button
                        size="icon"
                        variant="solid"
                        colorScheme="error"
                        onClick={() => {
                          acceptedFiles.splice(index, 1);
                          setFiles([...acceptedFiles]);
                        }}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </>
    );
  }
);
