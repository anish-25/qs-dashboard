import type { Meta, StoryObj } from "@storybook/react";
import Header from "../layout/header";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    imageUrl: { control: "text", description: "URL for Logo of university" },
    universityLink: {
      control: "text",
      description: "QS Link of the university",
    },
    universityName: {
      control: "text",
      description: "Name of the university",
    },
    username: { control: "text", description: "Name of the user" },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Menu: Story = {
  args: {
    imageUrl:
      "https://www.topuniversities.com/sites/default/files/profiles/logos/230302115834am362973geu-logo-200x200.jpg",
    universityLink:
      "https://topuniversities.com/universities/graphic-era-deemed-be-university-dehradun#:~:text=Rankings%20%26%20ratings,-RANKINGS&text=Graphic%20Era%20Deemed%20to%20be%20University%20Dehradun%20is%20one%20of,in%20QS%20Sustainability%20Ranking%202024.",
    universityName: "Graphic Era (Deemed) University Dehradun",
    username: "John",
  },
};
