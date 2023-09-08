import { Button, Switch, Text } from "@rafty/ui";

export function CookieSettingsExample() {
  const Content = [
    {
      heading: "Strictly Necessary",
      discription:
        "These cookies are essential in order to use the website and use its features.",
    },
    {
      heading: "Functional Cookies",
      discription:
        "These cookies allow the website to provide personalized functionality.",
    },
    {
      heading: "Performance Cookies",
      discription:
        "These cookies help to improve the performance of the website.",
    },
  ];
  return (
    <>
      <Text className="text-xl font-semibold">Cookie Settings</Text>
      <Text className="text-sm opacity-60 leading-snug">
        Manage your cookie settings here.
      </Text>
      {Content.map((item, index) => (
        <div key={index} className="flex gap-4 py-3 items-center">
          <div>
            <Text className="text-sm">{item.heading}</Text>
            <Text className="text-xs text-secondary-500 dark:text-secondary-400">
              {item.discription}
            </Text>
          </div>
          <Switch defaultChecked={index == 2 ? false : true} />
        </div>
      ))}
      <Button variant="outline" colorScheme="primary" className="!w-full">
        Save preference
      </Button>
    </>
  );
}
