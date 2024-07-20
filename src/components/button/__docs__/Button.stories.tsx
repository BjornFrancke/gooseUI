import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "Button",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        text: "Button",
        primary: true,
        disabled: false,
        size: "small",
        color: "main",
        inverted: false,
        onClick: () => console.log("Button"),
    },
};
export const Secondary: Story = {
    args: {
        text: "Button",
        primary: false,
        disabled: false,
        size: "small",
        color: "main",
        inverted: true,
        onClick: () => console.log("Button"),
    },
};
