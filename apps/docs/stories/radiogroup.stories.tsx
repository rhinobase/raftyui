import { Radio, RadioCard, RadioGroup } from "@rafty/ui";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  title: "Form / RadioGroup",
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <>
      <div className="flex flex-col gap-4">
        <RadioGroup defaultValue="2">
          <div data-cy="radiogroup" className="flex flex-col gap-4">
            <Radio value="1">Radio 1</Radio>
            <Radio value="2">Radio 2</Radio>
            <Radio value="3">Radio 3</Radio>
          </div>
        </RadioGroup>

        <RadioGroup isDisabled>
          <div className="flex flex-col gap-4">
            <Radio value="4">Radio 4</Radio>
            <Radio value="5">Radio 5</Radio>
            <Radio value="6">Radio 6</Radio>
          </div>
        </RadioGroup>
      </div>
    </>
  ),
};

export const Card: Story = {
  render: () => (
    <>
      <RadioGroup defaultValue="ABC">
        <div className="flex gap-4">
          <RadioCard
            aria-label="red"
            value="ABC"
            className="data-[selected=true]:ring-2 data-[selected=true]:ring-red-500 data-[selected=true]:ring-offset-1"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-red-500 text-white">
              ABC
            </div>
          </RadioCard>
          <RadioCard
            aria-label="red"
            value="BCD"
            className="data-[selected=true]:ring-2 data-[selected=true]:ring-orange-500 data-[selected=true]:ring-offset-1"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-orange-500 text-white">
              BCD
            </div>
          </RadioCard>
          <RadioCard
            aria-label="orange"
            value="CDE"
            className="data-[selected=true]:ring-2 data-[selected=true]:ring-yellow-500 data-[selected=true]:ring-offset-1"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-yellow-500 text-white">
              CDE
            </div>
          </RadioCard>
          <RadioCard
            aria-label="red"
            value="DEF"
            className="data-[selected=true]:ring-2 data-[selected=true]:ring-green-500 data-[selected=true]:ring-offset-1"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-green-500">
              DEF
            </div>
          </RadioCard>
        </div>
      </RadioGroup>
    </>
  ),
};

export const Custom: Story = {
  render: () => (
    <>
      <div className="flex gap-4">
        <RadioGroup defaultValue="ABC">
          <div className="flex gap-4">
            <RadioCard
              aria-label="red"
              value="ABC"
              className="data-[selected=true]:ring-primary-500 data-[selected=true]:ring-2"
            >
              <div className="group-data-[selected=true]:bg-primary-50/50 relative flex flex-col gap-2 border p-2">
                <CheckCircleIcon className="text-primary-500 absolute right-2 top-2 hidden h-5 w-5 group-data-[selected=true]:block" />
                <h2 className="font-medium">Heading</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </RadioCard>
            <RadioCard
              aria-label="red"
              value="BCD"
              className="data-[selected=true]:ring-primary-500 data-[selected=true]:ring-2"
            >
              <div className="group-data-[selected=true]:bg-primary-50/50 relative flex flex-col gap-2 border p-2">
                <CheckCircleIcon className="text-primary-500 absolute right-2 top-2 hidden h-5 w-5 group-data-[selected=true]:block" />
                <h2 className="font-medium">Heading</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </RadioCard>
          </div>
        </RadioGroup>
      </div>
    </>
  ),
};

export const RadioTabGroup: Story = {
  render: () => (
    <>
      <div className="flex ">
        <RadioGroup label="Tab Group" defaultValue="ABC">
          <div className="divide-secondary-400 grid w-[500px] grid-cols-4 divide-x overflow-hidden rounded-md">
            <RadioCard
              aria-label="red"
              value="ABC"
              className="bg-secondary-200 data-[selected=true]:bg-primary-500 flex w-full items-center justify-center py-2 outline-none data-[selected=true]:text-white"
            >
              ABC
            </RadioCard>
            <RadioCard
              aria-label="red"
              value="BCD"
              className="bg-secondary-200 data-[selected=true]:bg-primary-500 flex w-full items-center justify-center py-2 outline-none data-[selected=true]:text-white"
            >
              BCD
            </RadioCard>
            <RadioCard
              aria-label="orange"
              value="CDE"
              className="bg-secondary-200 data-[selected=true]:bg-primary-500 flex w-full items-center justify-center py-2 outline-none data-[selected=true]:text-white"
            >
              CDE
            </RadioCard>
            <RadioCard
              aria-label="red"
              value="DEF"
              className="bg-secondary-200 data-[selected=true]:bg-primary-500 flex w-full items-center justify-center py-2 outline-none data-[selected=true]:text-white"
            >
              EFG
            </RadioCard>
          </div>
        </RadioGroup>
      </div>
    </>
  ),
};
