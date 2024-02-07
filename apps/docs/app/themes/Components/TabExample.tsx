import { Tab, TabContent, TabList, TabTrigger } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function TabExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <Tab defaultValue="tab1">
      <TabList>
        <TabTrigger disabled={isDisabled} value="tab1">
          Tab1
        </TabTrigger>
        <TabTrigger disabled={isDisabled} value="tab2">
          Tab2
        </TabTrigger>
      </TabList>
      <TabContent value="tab1" className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. necessitatibus
        blanditiis enim nemo commodi temporibus nostrum dolor suscipit.
      </TabContent>
      <TabContent value="tab2" className="p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ex
        nostrum accusamus, harum aperiam consectetur assumenda excepturi.
      </TabContent>
    </Tab>
  );
}
