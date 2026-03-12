import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import "../components/Button.css";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "The Button component is used in product cards to allow users to add items to the cart.",
            },
        },
    },

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

export const DefaultButton: Story = {
    args: {
        label: "Aggiungi al carrello",
        size: "medium",
        disabled: false,
    },
};

export const OutOfStockButton: Story = {
    args: {
        label: "Aggiungi al carrello",
        size: "medium",
        disabled: true,
    },
};
export const SmallButton: Story = {
    args: {
        label: "Aggiungi al carrello",
        variant: "primary",
        size: "small",
    },
};

export const LargeButton: Story = {
    args: {
        label: "Aggiungi al carrello",
        variant: "primary",
        size: "large",
    },
};

export const AllSizesButton: Story = {
    render: () => (
        <div className="allbuttonsize">
            <Button label="Aggiungi al carrello" size="small" />
            <Button label="Aggiungi al carrello" size="medium" />
            <Button label="Aggiungi al carrello" size="large" />
        </div>
    ),
};