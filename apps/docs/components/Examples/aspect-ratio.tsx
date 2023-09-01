import { AspectRatio } from "@rafty/ui";
export const aspect_ratio_examples = {
  "aspect-ratio:usage": (
    <div className="shadow-blackA7 w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]">
      <AspectRatio ratio={16 / 9}>
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        />
      </AspectRatio>
    </div>
  ),
};