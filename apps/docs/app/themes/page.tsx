"use client";
import {
  Button,
  Calendar,
  DatePicker,
  InputField,
  PasswordField,
  RangePicker,
  Tag,
  TagField,
  Textarea,
} from "@rafty/ui";
import { useState } from "react";
import Masonry from "react-responsive-masonry";

enum ColorTheme {
  ORANGE = "orange",
  GREEN = "green",
}

export default function Home() {
  const [theme, setTheme] = useState<ColorTheme>();

  return (
    <div className={`max-w-7xl mx-auto p-4 w-full `} id="demotheme">
      <h1 className="text-4xl font-semibold">
        Beautifully designed components built using Rafty UI and Tailwind CSS
      </h1>
      <div className="p-3 flex items-center gap-4 justify-end">
        Themes
        <Button
          size="icon"
          className="!bg-orange-500"
          onClick={() => setTheme(ColorTheme.ORANGE)}
        />
        <Button
          size="icon"
          className="!bg-green-500"
          onClick={() => setTheme(ColorTheme.GREEN)}
        />
        <Button
          size="icon"
          className="!bg-blue-500"
          onClick={() => setTheme(ColorTheme.ORANGE)}
        />
        <Button
          size="icon"
          className="!bg-red-500"
          onClick={() => setTheme(ColorTheme.ORANGE)}
        />
      </div>
      <Masonry columnsCount={3} gutter="70px" className="mt-10">
        <DatePicker />

        <div className="h-22 w-22"></div>

        <InputField variant="solid" placeholder="Enter a Value" />
        <PasswordField />

        <TagField />
        <Tag>Tag sample text</Tag>
        <RangePicker />

        <Textarea placeholder="placeholder" />
        <Calendar />
      </Masonry>
    </div>
  );
}
