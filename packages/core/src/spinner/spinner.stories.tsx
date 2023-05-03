import { Spinner } from "./Spinner";

const config = {
  title: "Components / Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "select" },
  },
};
export default config;

export function Sizes(args: Spinner) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-[calc(100vh-40px)]">
      <div className="flex items-center gap-3">
        sm: <Spinner size="sm" {...args} />
      </div>
      <div className="flex items-center gap-3">
        md: <Spinner size="md" {...args} />
      </div>
      <div className="flex items-center gap-3">
        lg: <Spinner size="lg" {...args} />
      </div>
    </div>
  );
}

Sizes.args = {
  inheritParent: true,
};
