import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "Select",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        text: "Select",
        primary: true,
        disabled: false,
        options: ["test1", "test2"],
        size: "small",
        onClick: () => console.log("Button"),
    },
};
