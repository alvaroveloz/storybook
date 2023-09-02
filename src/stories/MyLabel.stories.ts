import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
    },
  }

} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    label: "Basic",
    size: "normal",
    allCaps: false,
    color: "primary",
  }
}

export const AllCaps: Story = {
  args: {
    label: "All Caps",
    allCaps: true,
    color: "primary",
  }
}

export const Secondary: Story = {
  args: {
    label: "Secondary",
    allCaps: false,
    color: "secondary",
  }
}

export const CustomColor: Story = {
  args: {
    label: "Custom Color",
    allCaps: false,
    color: "primary",
    fontColor: "red",
  }
}
