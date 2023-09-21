import { HoverCard, HoverCardContent, HoverCardTrigger, Text } from "@rafty/ui";

export const hover_card_examples = {
  "hover-card:usage": (
    <HoverCard>
      <HoverCardTrigger asChild>
        <img
          className="block h-[45px] w-[45px] rounded-full cursor-pointer"
          src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkyfHxjYXJ0b29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Rafty UI"
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-[300px] not-prose space-y-4">
        <img
          className="h-14 w-14 rounded-full"
          src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkyfHxjYXJ0b29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Rafty UI"
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
