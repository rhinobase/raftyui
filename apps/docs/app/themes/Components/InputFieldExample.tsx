import {
  CheckIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  InputField,
  InputGroup,
  LeftAddon,
  Prefix,
  RightAddon,
  Suffix,
} from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function InputFieldExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <div className="space-y-3">
      <InputGroup>
        <LeftAddon>
          <PhoneIcon width={16} height={16} className="stroke-2" />
        </LeftAddon>
        <InputField
          isDisabled={isDisabled}
          type="tel"
          placeholder="Phone number"
        />
      </InputGroup>
      <InputGroup>
        <InputField isDisabled={isDisabled} />
        <RightAddon>Email</RightAddon>
      </InputGroup>
      <InputGroup>
        <Prefix>
          <PhoneIcon width={16} height={16} className="stroke-2" />
        </Prefix>
        <InputField isDisabled={isDisabled} />
      </InputGroup>
      <InputGroup>
        <InputField isDisabled={isDisabled} />
        <Suffix>
          <CheckIcon
            width={16}
            height={16}
            className="stroke-2 text-green-500"
          />
        </Suffix>
      </InputGroup>
      <InputField isDisabled={isDisabled} />
    </div>
  );
}
