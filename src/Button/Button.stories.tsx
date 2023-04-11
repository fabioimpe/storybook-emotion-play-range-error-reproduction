import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Simple: Story = {
  args: {
    label: "Click me!",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Should be enabled by default", async () => {
      const button = canvas.getByRole("button");
      expect(button).toBeEnabled();
    });
  },
};

export default meta;
