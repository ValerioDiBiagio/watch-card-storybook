import React from "react";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import "../components/WatchCard.css";

type WatchCardProps = {
    image: string;
    brand: string;
    name: string;
    reference: string;
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
    reference,
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
                <h5 className="watch-brand">{brand}</h5>
                <h3 className="watch-name">{name}</h3>
                <h4 className="watch-reference">{reference}</h4>
                <p className="watch-price">{price}</p>
                <Button
                    label="Add to cart"
                    variant="primary"
                    size="medium"
                    onClick={onAddToCart}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};