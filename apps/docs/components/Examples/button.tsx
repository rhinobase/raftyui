import { Button } from "@rafty/ui";
import {
  HiPhone,
  HiPaperAirplane,
  HiArchiveBox,
  HiBackspace,
} from "react-icons/hi2";

export const button_examples = {
  "button:usage": <Button>Button</Button>,
  "button:size": (
    <div className="flex gap-4 items-center">
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="fab">
        <HiArchiveBox />
      </Button>
      <Button size="icon">
        <HiBackspace />
      </Button>
    </div>
  ),
  "button:colorScheme": (
    <div className="flex gap-4 items-center">
      <Button colorScheme="primary">Button text</Button>
      <Button colorScheme="secondary">Button text</Button>
      <Button colorScheme="error">Button text</Button>
      <Button colorScheme="success">Button text</Button>
    </div>
  ),
  "button:variant": (
    <div className="flex gap-4 items-center">
      <Button variant="solid">Button text</Button>
      <Button variant="outline">Button text</Button>
      <Button variant="ghost">Button text</Button>
    </div>
  ),
  "button:icons": (
    <div className="flex gap-4 items-center">
      <Button leftIcon={<HiPhone />} colorScheme="primary" variant="solid">
        Button text
      </Button>
      <Button
        rightIcon={<HiPaperAirplane />}
        colorScheme="primary"
        variant="solid"
      >
        Button text
      </Button>
    </div>
  ),
  "button:unstyled": <Button isUnstyled>Button text</Button>,
};
