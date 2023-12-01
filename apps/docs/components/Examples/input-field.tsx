import {
  HiOutlineCheck,
  HiOutlineMagnifyingGlass,
  HiOutlinePhone,
} from "react-icons/hi2";
import {
  InputField,
  InputGroup,
  LeftAddon,
  Prefix,
  RightAddon,
  Suffix,
} from "@rafty/ui";

export const input_examples = {
  "input-field:usage": <InputField placeholder="Basic usage" />,
  "input-field:size": (
    <div className="space-y-4">
      <InputField size="sm" />
      <InputField size="md" />
      <InputField size="lg" />
    </div>
  ),
  "input-field:variant": (
    <div className="space-y-4">
      <InputField variant="solid" />
      <InputField variant="ghost" />
      <InputField variant="outline" />
    </div>
  ),
  "input-field:required": <InputField isRequired />,
  "input-field:disabled": <InputField isDisabled />,
  "input-field:unstyled": (
    <InputField
      isUnstyled
      className="border-secondary-300 dark:border-secondary-600 w-full rounded-md border bg-transparent p-1 transition-colors duration-300 hover:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:hover:border-cyan-500"
    />
  ),
  "input-field:loading": <InputField isLoading />,
  "input-field:readonly": (
    <InputField defaultValue="This is a sample default value" isReadOnly />
  ),
  "input-field:invalid": <InputField isInvalid />,

  "input-field:left_addon": (
    <InputGroup>
      <LeftAddon>
        <HiOutlinePhone className="stroke-2" />
      </LeftAddon>
      <InputField type="tel" placeholder="Phone number" />
    </InputGroup>
  ),
  "input-field:right_addon": (
    <InputGroup>
      <InputField />
      <RightAddon>
        <HiOutlineMagnifyingGlass className="stroke-2" />
      </RightAddon>
    </InputGroup>
  ),
  "input-field:prefix": (
    <InputGroup>
      <Prefix>
        <HiOutlinePhone className="stroke-2" />
      </Prefix>
      <InputField />
    </InputGroup>
  ),
  "input-field:suffix": (
    <InputGroup>
      <InputField />
      <Suffix>
        <HiOutlineCheck className="stroke-2 text-green-500" />
      </Suffix>
    </InputGroup>
  ),
};
