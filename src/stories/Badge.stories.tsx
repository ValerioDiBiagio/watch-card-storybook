import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge";
import "../components/Badge.css";

// Configurazione principale della storia per il componente Badge
const meta: Meta<typeof Badge> = {
  title: "Components/Badge", // Percorso nel menu di Storybook
  component: Badge, // Componente a cui si riferiscono le storie
  tags: ["autodocs"], // Abilita la documentazione automatica
  parameters: {
    layout: "centered", // Centra il componente nel canvas
    docs: {
      description: {
        component:
          "The Badge component is used to highlight the status of a product such as discounts, availability, or new arrivals.",
      },
    },
  },

  // Definizione dei controlli interattivi visibili nella UI di Storybook
  argTypes: {
    variant: {
      control: { type: "select" }, // Menu a tendina
      options: ["discount", "sold-out", "new-arrival"], // Varianti disponibili
      description: "Defines the visual style of the badge depending on the product status.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "discount" },
      },
    },

    label: {
      control: { type: "text" }, // Campo di testo modificabile
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

// Tipo base per tutte le storie del componente
type Story = StoryObj<typeof Badge>;

// Story che mostra tutte le varianti del badge insieme
export const AllBadges: Story = {
  render: () => (
    <div className="all-badges">
      <Badge label="Discount" variant="discount" />
      <Badge label="Sold Out" variant="sold-out" />
      <Badge label="New Arrival" variant="new-arrival" />
    </div>
  ),
};

// Variante singola: badge di sconto
export const Discount: Story = {
  args: {
    label: "Discount",
    variant: "discount",
  },
};

// Variante singola: prodotto esaurito
export const SoldOut: Story = {
  args: {
    label: "Sold Out",
    variant: "sold-out",
  },
};

// Variante singola: nuovo arrivo
export const NewArrival: Story = {
  args: {
    label: "New Arrival",
    variant: "new-arrival",
  },
};