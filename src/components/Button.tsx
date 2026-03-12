import React from "react";

type ButtonProps = {
    label: string;
    onClick?: () => void;
    variant?: "primary";
    ariaLabel?: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = "primary",
    ariaLabel,
    size = "medium",
    disabled = false
}) => {

    const buttonLabel = disabled ? "Non disponibile" : label;

    return (
        <button
            className={`button button-${variant} button-${size}`}
            onClick={onClick}
            aria-label={ariaLabel ?? buttonLabel}
            disabled={disabled}
        >
            {buttonLabel}
        </button>
    );
};