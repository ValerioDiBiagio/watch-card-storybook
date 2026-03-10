import React from "react";

type BadgeProps = {
  label: string;
  ariaLabel?: string;
  variant?: "discount" | "sold-out" | "new-arrival";
};

export const Badge: React.FC<BadgeProps> = ({ label, variant = "discount" }) => {
  return (
    <span className={`badge badge-${variant}`}>
      {label}
    </span>
  );
};