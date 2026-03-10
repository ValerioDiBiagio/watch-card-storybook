import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge";
import "../components/Badge.css";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Badge component is used to highlight the status of a product such as discounts, availability, or new arrivals.",
      },
    },
  },

  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["discount", "sold-out", "new-arrival"],
      description: "Defines the visual style of the badge depending on the product status.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "discount" },
      },
    },

    label: {
      control: { type: "text" },
      description: "Text displayed inside the badge.",
      table: {
        type: { summary: "string" },
      },
    },

    ariaLabel: {
      control: { type: "text" },
      description: "Accessible label for screen readers.",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const AllBadges: Story = {
  render: () => (
    <div className="all-badges">
      <Badge label="Discount" variant="discount" />
      <Badge label="Sold Out" variant="sold-out" />
      <Badge label="New Arrival" variant="new-arrival" />
    </div>
  ),
};

export const Discount: Story = {
  args: {
    label: "Discount",
    variant: "discount",
  },
};

export const SoldOut: Story = {
  args: {
    label: "Sold Out",
    variant: "sold-out",
  },
};

export const NewArrival: Story = {
  args: {
    label: "New Arrival",
    variant: "new-arrival",
  },
};