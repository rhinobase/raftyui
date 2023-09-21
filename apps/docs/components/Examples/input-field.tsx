import { CheckIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  InputField,
  InputGroup,
  LeftAddon,
  Prefix,
  RightAddon,
  Suffix,
} from "@rafty/ui";
import { HiMagnifyingGlassCircle, HiPhone, HiCheck } from "react-icons/hi2";

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
      className="w-full rounded-md border border-gray-300 bg-transparent p-1 transition-colors duration-300 hover:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:border-gray-600 dark:hover:border-cyan-500"
    />
  ),
  "input-field:loading": <InputField isLoading />,
  "input-field:readonly": <InputField isReadOnly />,
  "input-field:invalid": <InputField isInvalid />,

  "input-field:left_addon": (
    <InputGroup>
      <LeftAddon>
        <HiPhone />
      </LeftAddon>
      <InputField type="tel" placeholder="Phone number" />
    </InputGroup>
  ),
  "input-field:right_addon": (
    <InputGroup>
      <InputField />
      <RightAddon>
        <HiMagnifyingGlassCircle />
      </RightAddon>
    </InputGroup>
  ),
  "input-field:prefix": (
    <InputGroup>
      <Prefix>
        <HiPhone />
      </Prefix>
      <InputField />
    </InputGroup>
  ),
  "input-field:suffix": (
    <InputGroup>
      <InputField />
      <Suffix>
        <HiCheck className="text-green-500" />
      </Suffix>
    </InputGroup>
  ),
};
