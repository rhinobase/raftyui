import { HoverCard, HoverCardContent, HoverCardTrigger, Text } from "@rafty/ui";
import Image from "next/image";

Image.displayName = "Image";

export const hover_card_examples = {
  "hover-card:usage": (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Image
          width={45}
          height={45}
          className="block h-[45px] w-[45px] cursor-pointer rounded-full"
          src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkyfHxjYXJ0b29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="Rafty UI"
        />
      </HoverCardTrigger>
      <HoverCardContent className="not-prose w-[300px] space-y-4">
        <Image
          width={56}
          height={56}
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
