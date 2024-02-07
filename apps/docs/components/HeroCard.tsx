"use client";
import { Calendar, Card, CardContent, classNames } from "@rafty/ui";
import { useState } from "react";
import {
  ChatBoxExample,
  CookieSettingsExample,
  TeamMembersExample,
} from "./Cards";

export function HeroCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("dark w-full", isOpen ? "z-50" : "z-10")}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-[700px]">
        <Card>
          <CardContent>
            <CookieSettingsExample />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <ChatBoxExample onClick={() => setIsOpen((prev) => !prev)} />
          </CardContent>
        </Card>
        <Card className="h-max">
          <CardContent>
            <TeamMembersExample />
          </CardContent>
        </Card>
        <Calendar />
      </div>
    </div>
  );
}
