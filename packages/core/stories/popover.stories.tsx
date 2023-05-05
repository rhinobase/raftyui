import { Meta, StoryObj } from "@storybook/react";
import {
  FieldControl,
  FieldLabel,
  InputField,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Select,
  Option,
} from "../src";
import { Button } from "../src";

const meta: Meta<typeof Popover> = {
  title: "Components / Popover",
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Variants: Story = {
  render: () => (
    <>
      <Popover>
        <PopoverTrigger variant="ghost" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="center"
          className="flex !max-w-xs flex-col divide-y rounded-md"
        >
          <div className="px-3 py-2 text-lg font-semibold">Canvas settings</div>
          <div className="flex items-center gap-4 px-3 py-2.5">
            <FieldControl orientation="row" name="width">
              <FieldLabel className="!text-xs">Width</FieldLabel>
              <InputField className="!px-2 !py-1 !text-sm" />
            </FieldControl>
            <FieldControl orientation="row" name="scale">
              <FieldLabel className="!text-xs">Scale</FieldLabel>
              <InputField
                className="!px-2 !py-1 !text-sm"
                defaultValue="100%"
              />
            </FieldControl>
            <Button variant="ghost" size="icon" disabled>
              {/* <HiArrowsPointingOut /> */}
            </Button>
          </div>
          <div className="px-3 py-2.5">
            <FieldControl name="vision">
              <FieldLabel className="!text-xs">Vision preview</FieldLabel>
              <Select defaultValue="none">
                <Option value="none">None</Option>
              </Select>
            </FieldControl>
          </div>
          <div className="px-3 py-2.5">
            <FieldControl name="text_zoom">
              <FieldLabel className="!text-xs">Text zoom preview</FieldLabel>
              <div className="flex items-center gap-2.5">
                <InputField
                  className="!px-2 !py-1 !text-sm"
                  defaultValue="16px"
                />
                <Button size="sm">9px</Button>
                <Button size="sm">24px</Button>
                <Button size="sm">32px</Button>
                <Button size="sm">Reset</Button>
              </div>
            </FieldControl>
          </div>
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    </>
  ),
};
