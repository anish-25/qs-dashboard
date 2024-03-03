import type { Meta, StoryObj } from "@storybook/react";
import Card from "../custom/criteria-card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Criteria Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    criteria: {
      type: "string",
      defaultValue: "POST GRADUATION",
    },
    description: {
      type: "string",
      defaultValue: "Enter your descrion here",
    },
    hasMet: {
      type: "boolean",
      defaultValue: true,
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithoutDescription: Story = {
  args: {
    criteria: "POST GRADUATION",
    hasMet: true,
  },
};
export const WithDescription: Story = {
  args: {
    criteria: "SMALL SIZE",
    description: "MORE THAN 5000 STUDENTSs",
  },
};
