import { HiPlus, HiOutlineUserGroup, HiOutlinePencilSquare } from "react-icons/hi2";
import { Example, Examples, Grid } from "@rhinobase/storybook/components";
import { Button } from "./Button";

export default {
  title: "New/Button",
  component: Button,
};

export function Default() {
  return (
    <Grid>
      <Examples title="Button style">
        <Example title="Solid">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary">Button text</Button>
            <Button colorScheme="secondary">Button text</Button>
            <Button colorScheme="error">Button text</Button>
          </div>
        </Example>
        <Example title="Outline">
          <div className="flex flex-col gap-1">
            <Button variant="outline" colorScheme="primary">
              Button text
            </Button>
            <Button variant="outline" colorScheme="secondary">
              Button text
            </Button>
            <Button variant="outline" colorScheme="error">
              Button text
            </Button>
          </div>
        </Example>
        <Example title="Ghost">
          <div className="flex flex-col gap-1">
            <Button variant="ghost" colorScheme="primary">
              Button text
            </Button>
            <Button variant="ghost" colorScheme="secondary">
              Button text
            </Button>
            <Button variant="ghost" colorScheme="error">
              Button text
            </Button>
          </div>
        </Example>
      </Examples>

      <Examples title="State">
        <Example title="Default">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary">Button text</Button>
            <Button colorScheme="secondary">Button text</Button>
            <Button colorScheme="error">Button text</Button>
            <Button colorScheme="primary" variant="outline">
              Button text
            </Button>
            <Button colorScheme="secondary" variant="outline">
              Button text
            </Button>
            <Button colorScheme="error" variant="outline">
              Button text
            </Button>
            <Button colorScheme="primary" variant="ghost">
              Button text
            </Button>
            <Button colorScheme="secondary" variant="ghost">
              Button text
            </Button>
            <Button colorScheme="error" variant="ghost">
              Button text
            </Button>
          </div>
        </Example>
        <Example title="Active">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary" active>
              Button text
            </Button>
            <Button colorScheme="secondary" active>
              Button text
            </Button>
            <Button colorScheme="error" active>
              Button text
            </Button>
            <Button colorScheme="primary" variant="outline" active>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="outline" active>
              Button text
            </Button>
            <Button colorScheme="error" variant="outline" active>
              Button text
            </Button>
            <Button colorScheme="primary" variant="ghost" active>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="ghost" active>
              Button text
            </Button>
            <Button colorScheme="error" variant="ghost" active>
              Button text
            </Button>
          </div>
        </Example>
        <Example title="Disabled">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary" disabled>
              Button text
            </Button>
            <Button colorScheme="secondary" disabled>
              Button text
            </Button>
            <Button colorScheme="error" disabled>
              Button text
            </Button>
            <Button colorScheme="primary" variant="outline" disabled>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="outline" disabled>
              Button text
            </Button>
            <Button colorScheme="error" variant="outline" disabled>
              Button text
            </Button>
            <Button colorScheme="primary" variant="ghost" disabled>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="ghost" disabled>
              Button text
            </Button>
            <Button colorScheme="error" variant="ghost" disabled>
              Button text
            </Button>
          </div>
        </Example>
        <Example title="Loading">
          <div className="flex flex-col gap-1">
            <Button colorScheme="primary" loading>
              Button text
            </Button>
            <Button colorScheme="secondary" loading>
              Button text
            </Button>
            <Button colorScheme="error" loading>
              Button text
            </Button>
            <Button colorScheme="primary" variant="outline" loading>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="outline" loading>
              Button text
            </Button>
            <Button colorScheme="error" variant="outline" loading>
              Button text
            </Button>
            <Button colorScheme="primary" variant="ghost" loading>
              Button text
            </Button>
            <Button colorScheme="secondary" variant="ghost" loading>
              Button text
            </Button>
            <Button colorScheme="error" variant="ghost" loading>
              Button text
            </Button>
          </div>
        </Example>
      </Examples>

      <Examples title="Size">
        <Example title="Small (sm)">
          <Button size="sm">Button text</Button>
        </Example>
        <Example title="Medium (md)">
          <Button>Button text</Button>
        </Example>
        <Example title="Large (lg)">
          <Button size="lg">Button text</Button>
        </Example>
        <Example title="Icon (icon)">
          <Button size="icon">
            <HiPlus />
          </Button>
        </Example>
        <Example title="Fab (fab)">
          <Button size="fab">
            <HiPlus />
          </Button>
        </Example>
      </Examples>

      <Examples title="Icons">
        <Example title="Default">
          <Button>Button text</Button>
        </Example>
        <Example title="Icon left">
          <Button leftIcon={HiOutlineUserGroup}>Button text</Button>
        </Example>
        <Example title="Icon right">
          <Button rightIcon={HiOutlinePencilSquare}>Button text</Button>
        </Example>
      </Examples>
    </Grid>
  );
}
