import type { Meta, StoryObj } from "@storybook/react";
import Note from "../custom/note";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Note",
  component: Note,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    description: { control: "text", description: "Description of the note" },
    type: {
      control: "select",
      options: ["success", "warn", "error"],
      description: "success | warn | error",
      defaultValue: "success",
    },
  },
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success: Story = {
  args: {
    description: "Congrats! You have passed",
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    description: "You have not passed",
    type: "warn",
  },
};

export const Error: Story = {
  args: {
    description: "You have failed",
    type: "error",
  },
};
