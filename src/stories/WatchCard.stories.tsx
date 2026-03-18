import { WatchCard } from "../components/WatchCard";

export default {
    title: "Components/WatchCard",
    component: WatchCard,
    parameters: {
        layout: "centered",
    },
};

export const NewArrival = {
    args: {
        image: "src/assets/image/rolex-submariner.png",
        brand: "Rolex",
        name: "Submariner Date",
        reference: "Ref. 116610LN von 2012 / LC170",
        price: "€9.500",
        badgeLabel: "New",
        badgeVariant: "new-arrival",
    },
};

export const Discount = {
    args: {
        image: "https://via.placeholder.com/200",
        brand: "Omega",
        name: "Speedmaster",
        reference: "fff",
        price: "€4.200",
        badgeLabel: "-20%",
        badgeVariant: "discount",
    },
};

export const SoldOut = {
    args: {
        image: "https://via.placeholder.com/200",
        brand: "Longines",
        name: "Hydroconquest",
        reference: "fff",
        price: "€3.200",
        badgeLabel: "Sold Out",
        badgeVariant: "sold-out",
        disabled: true,
    },
};

export const SimpleCard = {
    args: {
        image: "https://via.placeholder.com/200",
        brand: "Seiko",
        reference: "fff",
        name: "Presage",
        price: "€950",
    },
};