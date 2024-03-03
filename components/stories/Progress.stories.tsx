import type { Meta, StoryObj } from "@storybook/react";
import ProgressIndicator from "../custom/progress-indicator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Progress Indicator",
  component: ProgressIndicator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 4, step: 1 },
      description: "The value of the progress indicator",
    },
  },
} satisfies Meta<typeof ProgressIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Grouped: Story = {
  args: {
    value: 1,
  },
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return (
      <div className="grid grid-cols-5 gap-4">
        <ProgressIndicator value={0} />
        <ProgressIndicator value={1} />
        <ProgressIndicator value={2} />
        <ProgressIndicator value={3} />
        <ProgressIndicator value={4} />
      </div>
    );
  },
};

export const Single: Story = {
  args: {
    value: 3,
  },
};
