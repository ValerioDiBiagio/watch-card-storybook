import React from "react";

// Definizione delle props accettate dal componente Badge
type BadgeProps = {
  label: string; // Testo visibile all'interno del badge
  ariaLabel?: string; // Etichetta opzionale per accessibilità (screen reader)
  variant?: "discount" | "sold-out" | "new-arrival"; // Variante visiva del badge
};

// Componente Badge: mostra uno stato del prodotto (es. sconto, esaurito, nuovo)
export const Badge: React.FC<BadgeProps> = ({
  label,
  ariaLabel,
  variant = "discount",
}) => {
  return (
    <span
      className={`badge badge-${variant}`}
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
    >
      {label}
    </span>
  );
};