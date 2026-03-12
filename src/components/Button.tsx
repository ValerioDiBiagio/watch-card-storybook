import React from "react";

type ButtonProps = {
    label: string; // testo mostrato quando il bottone è attivo
    onClick?: () => void; // funzione eseguita al click
    variant?: "primary"; // stile visivo del bottone
    ariaLabel?: string; // etichetta per accessibilità
    size?: "small" | "medium" | "large"; // dimensioni del bottone
    disabled?: boolean; // stato disabilitato (es. prodotto non disponibile)
};

export const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = "primary",
    ariaLabel,
    size = "medium",
    disabled = false
}) => {

    // Se il bottone è disabilitato mostriamo automaticamente "Non disponibile"
    const buttonLabel = disabled ? "Non disponibile" : label;

    return (
        <button
            className={`button button-${variant} button-${size}`} // classi per stile e dimensione
            onClick={onClick}
            aria-label={ariaLabel ?? buttonLabel} // fallback per accessibilità
            disabled={disabled}
        >
            {buttonLabel}
        </button>
    );
};