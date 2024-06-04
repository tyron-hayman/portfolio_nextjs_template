import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Workspace`.
 */
export type WorkspaceProps = SliceComponentProps<Content.WorkspaceSlice>;

/**
 * Component for "Workspace" Slices.
 */
const Workspace = ({ slice }: WorkspaceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for workspace (variation: {slice.variation}) Slices
    </section>
  );
};

export default Workspace;
