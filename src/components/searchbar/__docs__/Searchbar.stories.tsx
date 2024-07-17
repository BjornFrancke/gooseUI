import type { Meta, StoryObj } from "@storybook/react";
import Example from "../../searchbar/__docs__/Example";

const meta: Meta<typeof Example> = {
    title: "Searchbar",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        disabled: false,
        placeholder: "Search...",
        size: "medium",
    },
};
