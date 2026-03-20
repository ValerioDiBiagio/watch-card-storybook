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
    originalPrice?: string;
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
    originalPrice,
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
                <h6 className="watch-name">{name}</h6>
                <h4 className="watch-reference">{reference}</h4>
                <div className="watch-price-container">
                    {badgeVariant === "discount" && originalPrice && (
                        <span className="watch-price-original">
                            {originalPrice}
                        </span>
                    )}
                    <span className="watch-price">{price}</span>
                </div>
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