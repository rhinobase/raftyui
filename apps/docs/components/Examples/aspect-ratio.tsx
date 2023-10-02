import { AspectRatio } from "@rafty/ui";
import Image from "next/image";

export const aspect_ratio_examples = {
  "aspect-ratio:usage": (
    <AspectRatio ratio={3 / 4} className="overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
    </AspectRatio>
  ),
};
