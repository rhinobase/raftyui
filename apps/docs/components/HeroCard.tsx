"use client";
import { Calendar, Card, CardContent, classNames } from "@rafty/ui";
import {
  ChatBoxExample,
  CookieSettingsExample,
  TeamMembersExample,
} from "../app/themes/Examples";
import { useState } from "react";

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
        <Card>
          <CardContent>
            <TeamMembersExample />
          </CardContent>
        </Card>
        <Calendar />
      </div>
    </div>
  );
}
