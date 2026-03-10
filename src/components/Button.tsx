import React from "react";

type ButtonProps = {
    label: string; // testo visibile nel bottone
    onClick?: () => void; // funzione eseguita al click
    variant?: "primary" | "disabled"; // varianti del bottone
    ariaLabel?: string; // accessibilità
};

// Bottone usato nella card prodotto per aggiungere articoli al carrello
export const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = "primary",
    ariaLabel
}) => {
    return (
        <button
            className={`button button-${variant}`}
            onClick={onClick}
            aria-label={ariaLabel ?? label}
            disabled={variant === "disabled"}
        >
            {label}
        </button>
    );
};