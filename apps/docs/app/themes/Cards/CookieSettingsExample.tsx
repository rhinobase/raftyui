import { Button, Switch, Text } from "@rafty/ui";

const SETTINGS = [
  {
    heading: "Strictly Necessary",
    description:
      "These cookies are essential in order to use the website and use its features.",
  },
  {
    heading: "Functional Cookies",
    description:
      "These cookies allow the website to provide personalized functionality.",
  },
  {
    heading: "Performance Cookies",
    description:
      "These cookies help to improve the performance of the website.",
  },
];

export function CookieSettingsExample() {
  return (
    <div className="space-y-4">
      <div>
        <Text className="text-[1.25rem] font-semibold leading-[2rem] leading-snug">
          Cookie Settings
        </Text>
        <Text className="text-[0.875rem] leading-[1.5rem] opacity-60">
          Manage your cookie settings here.
        </Text>
      </div>
      {SETTINGS.map(({ heading, description }, index) => (
        <div key={heading} className="flex items-center justify-between">
          <div>
            <Text className="text-[0.875rem] font-medium leading-[1.5rem]">
              {heading}
            </Text>
            <Text className="max-w-[250px] text-[0.75rem] leading-[1rem] opacity-50">
              {description}
            </Text>
          </div>
          <Switch defaultChecked={index < 2} aria-label={heading} />
        </div>
      ))}
      <Button variant="outline" colorScheme="primary" className="w-full">
        Save preference
      </Button>
    </div>
  );
}
