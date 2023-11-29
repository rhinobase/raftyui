import { useTheme } from "next-themes";
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  classNames,
} from "@rafty/ui";
import { BsMoon, BsSun, BsTv } from "react-icons/bs";

const THEMES = {
  light: BsSun,
  dark: BsMoon,
  system: BsTv,
} as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const TriggerIcon = THEMES[theme as keyof typeof THEMES];

  return (
    <Menu>
      <MenuTrigger
        size="icon"
        variant="ghost"
        aria-label="Change Theme"
        title="Change Theme"
        className="hidden md:block"
      >
        <TriggerIcon size={18} className="stroke-[0.5]" />
      </MenuTrigger>
      <MenuContent className="!z-50 !gap-0.5">
        {Object.entries(THEMES).map(([name, Icon]) => (
          <MenuItem
            key={name}
            onClick={() => setTheme(name)}
            className={classNames(
              theme === name &&
                "!bg-secondary-200/70 !text-primary-500 dark:!bg-secondary-700/60 dark:!text-primary-400",
              "!capitalize",
            )}
          >
            <Icon size={18} className="stroke-[0.5]" />
            {name}
          </MenuItem>
        ))}
      </MenuContent>
    </Menu>
  );
}
