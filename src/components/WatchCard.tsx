import React from "react";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import "../components/WatchCard.css";

type WatchCardProps = {
    image: string;
    brand: string;
    name: string;
    price: string;
    badgeLabel?: string;
    badgeVariant?: "discount" | "sold-out" | "new-arrival";
    onAddToCart?: () => void;
    disabled?: boolean;
};

export const WatchCard: React.FC<WatchCardProps> = ({
    image,
    brand,
    name,
    price,
    badgeLabel,
    badgeVariant,
    onAddToCart,
    disabled = false
}) => {
    return (
        <div className="watch-card">

            <div className="watch-card-image">
                {badgeLabel && (
                    <Badge
                        label={badgeLabel}
                        variant={badgeVariant}
                    />
                )}

                <img src={image} alt={name} />
            </div>

            <div className="watch-card-content">
                <span className="watch-brand">{brand}</span>
                <h3 className="watch-name">{name}</h3>
                <p className="watch-price">{price}</p>
            </div>

            <div className="watch-card-actions">
                <Button
                    label="Aggiungi al carrello"
                    variant="primary"
                    size="medium"
                    onClick={onAddToCart}
                    disabled={disabled}
                />
            </div>

        </div>
    );
};