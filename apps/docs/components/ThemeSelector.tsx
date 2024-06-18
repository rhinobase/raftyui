"use client";
import { MoonIcon, SunIcon, TvIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  classNames,
} from "@rafty/ui";
import { useTheme } from "next-themes";

const THEMES = {
  light: SunIcon,
  dark: MoonIcon,
  system: TvIcon,
} as const;

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  // Current theme icon
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
        <TriggerIcon height={18} width={18} className="stroke-2" />
      </MenuTrigger>
      <MenuContent className="z-[60] gap-0.5">
        {Object.entries(THEMES).map(([name, Icon]) => (
          <MenuItem
            key={name}
            onClick={() => setTheme(name)}
            className={classNames(
              theme === name &&
                "bg-secondary-200/70 text-primary-500 dark:bg-secondary-700/60 dark:text-primary-400",
              "capitalize",
            )}
          >
            <Icon height={18} width={18} className="stroke-2" />
            {name}
          </MenuItem>
        ))}
      </MenuContent>
    </Menu>
  );
}
