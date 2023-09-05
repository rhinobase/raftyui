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
      <h1 className="text-xl font-semibold">Cookie Settings</h1>
      <h5 className="text-sm text-secondary-400 dark:text-secondary-500">
        Manage your cookie settings here.
      </h5>
      {Content.map((item, index) => (
        <div key={index} className="flex gap-4 py-3 items-center">
          <div>
            <h5 className="text-sm">{item.heading}</h5>
            <Text className="text-xs text-secondary-500 dark:text-secondary-400">
              {item.discription}
            </Text>
          </div>
          <Switch />
        </div>
      ))}
      <Button variant="outline" className="!w-full">
        Save preference
      </Button>
    </>
  );
}
