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

export function InputFieldExample() {
  return (
    <div className="space-y-3">
      <InputGroup>
        <LeftAddon>
          <PhoneIcon width={16} height={16} className="stroke-2" />
        </LeftAddon>
        <InputField type="tel" placeholder="Phone number" />
      </InputGroup>
      <InputGroup>
        <Prefix>
          <PhoneIcon width={16} height={16} className="stroke-2" />
        </Prefix>
        <InputField />
      </InputGroup>
      <InputGroup>
        <InputField />
        <Suffix>
          <CheckIcon
            width={16}
            height={16}
            className="stroke-2 text-green-500"
          />
        </Suffix>
      </InputGroup>
    </div>
  );
}
