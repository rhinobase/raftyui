import { HiCheck, HiMagnifyingGlassCircle, HiPhone } from "react-icons/hi2";
import {
  InputGroup,
  LeftAddon,
  InputField,
  RightAddon,
  Prefix,
  Suffix,
} from "@rafty/ui";

export const input_group_examples = {
  "input-group:usage": (
    <InputGroup>
      <LeftAddon>+234</LeftAddon>
      <InputField />
      <RightAddon>
        <HiMagnifyingGlassCircle />
      </RightAddon>
    </InputGroup>
  ),
  "input-group:left_addon": (
    <InputGroup>
      <LeftAddon>+234</LeftAddon>
      <InputField />
    </InputGroup>
  ),
  "input-group:right_addon": (
    <InputGroup>
      <InputField />
      <RightAddon>
        <HiMagnifyingGlassCircle />
      </RightAddon>
    </InputGroup>
  ),
  "input-group:prefix": (
    <InputGroup>
      <Prefix>
        <HiPhone />
      </Prefix>
      <InputField />
    </InputGroup>
  ),
  "input-group:suffix": (
    <InputGroup>
      <InputField />
      <Suffix>
        <HiCheck />
      </Suffix>
    </InputGroup>
  ),
};
