import { InputField } from "../src/input-field/InputField";
import { FieldControl, FieldLabel } from "../src/field";
import { Button } from "../src/button";

const config = {
  title: "Forms/Input Field",
  component: InputField,
};
export default config;

export function Default() {
  return (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4 className="font-bold">Input Field</h4>
        <FieldControl name="ss">
          <InputField placeholder="Enter Text" />
        </FieldControl>

        <h4 className="font-bold">Input Field isDisabled</h4>

        <FieldControl name="ss" disabled>
          <InputField placeholder="Enter Text" />
        </FieldControl>

        <h4 className="font-bold">Input Field required</h4>

        <FieldControl name="ss" required>
          <FieldLabel>Name</FieldLabel>
          <InputField placeholder="Enter Text" />
        </FieldControl>

        <h4 className="font-bold">Input Field `row` orientation</h4>

        <FieldControl name="ss" required orientation="row">
          <FieldLabel>Name</FieldLabel>
          <InputField placeholder="Enter Text" />
        </FieldControl>

        <h4 className="font-bold">Input Field isReadOnly</h4>

        <FieldControl name="ss" readOnly>
          <InputField placeholder="Enter Text" />
        </FieldControl>

        <h4 className="font-bold">Input Field isInvalid</h4>
        <FieldControl name="ss" invalid>
          <InputField placeholder="Enter Text" />
        </FieldControl>

        <h4 className="font-bold">Clearable</h4>
        <FieldControl name="">
          <InputField allowClear />
        </FieldControl>
      </div>
    </>
  );
}
export function Size() {
  return (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4 className="font-bold">Input Field Size `sm`</h4>
        <div className="flex items-center gap-2">
          <FieldControl name="">
            <InputField sizes="sm" />
          </FieldControl>
          <Button size="sm">Button</Button>
        </div>
        <h4 className="font-bold">Input Field Size `md`</h4>
        <div className="flex items-center gap-2">
          <FieldControl name="">
            <InputField />
          </FieldControl>
          <Button>Button</Button>
        </div>
        <h4 className="font-bold">Input Field Size `lg`</h4>
        <div className="flex items-center gap-2">
          <FieldControl name="">
            <InputField sizes="lg" />
          </FieldControl>
          <Button size="lg">Button</Button>
        </div>
      </div>
    </>
  );
}
