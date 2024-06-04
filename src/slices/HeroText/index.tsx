import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroText`.
 */
export type HeroTextProps = SliceComponentProps<Content.HeroTextSlice>;

/**
 * Component for "HeroText" Slices.
 */
const HeroText = ({ slice }: HeroTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_text (variation: {slice.variation}) Slices
    </section>
  );
};

export default HeroText;
