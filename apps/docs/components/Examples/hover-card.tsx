import { HoverCard, HoverCardContent, HoverCardTrigger, Text } from "@rafty/ui";

export const hover_card_examples = {
  "hover-card:usage": (
    <HoverCard>
      <HoverCardTrigger asChild>
        <img
          className="block h-[45px] w-[45px] rounded-full"
          src="https://i.pinimg.com/1200x/db/9b/f5/db9bf5ebc394015d62141539ed1bfd7c.jpg"
          alt="Radix UI"
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-[300px] not-prose space-y-4">
        <img
          className="h-14 w-14 rounded-full"
          src="https://i.pinimg.com/1200x/db/9b/f5/db9bf5ebc394015d62141539ed1bfd7c.jpg"
          alt="Radix UI"
        />
        <div className="flex flex-col gap-4">
          <Text>Rafty</Text>
          <Text>@Rafty/ui</Text>
          <Text>
            Components, icons, colors, and templates for building high-quality,
            accessible UI. Free and open-source.
          </Text>
          <div className="flex gap-[15px]">
            <div className="flex gap-[5px]">
              <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                0
              </div>
              <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                Following
              </div>
            </div>
            <div className="flex gap-[5px]">
              <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                2,900
              </div>
              <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                Followers
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
