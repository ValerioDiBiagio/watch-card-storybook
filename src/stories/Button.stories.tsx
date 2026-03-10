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
            options: ["primary", "disabled"],
            description: "Defines the visual state of the button.",
        },

        label: {
            control: { type: "text" },
            description: "Text displayed inside the button.",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const AddToCart: Story = {
    args: {
        label: "Aggiungi al carello",
        variant: "primary",
    },
};

export const Disabled: Story = {
    args: {
        label: "Non disponibile",
        variant: "disabled",
    },
};