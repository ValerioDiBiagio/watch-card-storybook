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
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const AllBadges = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
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