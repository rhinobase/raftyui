import { RadioGroup, RadioGroupItem } from "@rafty/ui";
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
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <label htmlFor="r1">Default</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <label htmlFor="r2">Comfortable</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <label htmlFor="r3">Compact</label>
          </div>
        </RadioGroup>
        <RadioGroup defaultValue="comfortable" size="sm">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r11" />
            <label htmlFor="r11">Default</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r22" />
            <label htmlFor="r22">Comfortable</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r33" />
            <label htmlFor="r33">Compact</label>
          </div>
        </RadioGroup>
        <RadioGroup defaultValue="comfortable" size="lg">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r111" />
            <label htmlFor="r111">Default</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r222" />
            <label htmlFor="r222">Comfortable</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r333" />
            <label htmlFor="r333">Compact</label>
          </div>
        </RadioGroup>
      </div>
    </>
  ),
};
