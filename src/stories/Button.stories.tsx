import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import "../components/Button.css";

// Configurazione principale della story
const meta: Meta<typeof Button> = {
    title: "Components/Button", // posizione nel menu di Storybook
    component: Button,
    tags: ["autodocs"], // genera automaticamente la documentazione
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "The Button component is used in product cards to allow users to add items to the cart.",
            },
        },
    },

    // Controlli modificabili dal pannello Controls
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["primary"],
            description: "Defines the visual style of the button.",
        },

        disabled: {
            control: { type: "boolean" },
            description: "Disables the button.",
        },

        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
            description: "Defines the size of the button.",
        },

        label: {
            control: { type: "text" },
            description: "Text displayed inside the button.",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Bottone standard utilizzato nella card prodotto
export const DefaultButton: Story = {
    args: {
        label: "Add to cart",
        size: "medium",
        disabled: false,
    },
};

// Stato quando il prodotto non è disponibile
export const OutOfStockButton: Story = {
    args: {
        label: "Add to cart",
        size: "medium",
        disabled: true,
    },
};

// Variante con dimensione small
export const SmallButton: Story = {
    args: {
        label: "Add to cart",
        variant: "primary",
        size: "small",
    },
};

// Variante con dimensione large
export const LargeButton: Story = {
    args: {
        label: "Add to cart",
        variant: "primary",
        size: "large",
    },
};

// Story dimostrativa con tutte le dimensioni del bottone
export const AllSizesButton: Story = {
    render: () => (
        <div className="allbuttonsize">
            <Button label="Add to cart" size="small" />
            <Button label="Add to cart" size="medium" />
            <Button label="Add to cart" size="large" />
        </div>
    ),
};