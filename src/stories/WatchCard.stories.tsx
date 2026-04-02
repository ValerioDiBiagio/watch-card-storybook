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
        price: "9.500,00 €",
        badgeLabel: "New",
        badgeVariant: "new-arrival",
    },
};

export const Discount = {
    args: {
        image: "src/assets/image/omega-speedmaster.png",
        brand: "Omega",
        name: "Speedmaster Moonwatch",
        reference: "Ref. 310.30.42.50.01.002",
        price: "7.120,00 €",
        originalPrice: "8.900,00 €",
        badgeLabel: "-20%",
        badgeVariant: "discount",
    },
};

export const SoldOut = {
    args: {
        image: "src/assets/image/longines-hydroconquest.png",
        brand: "Longines",
        name: "Hydroconquest",
        reference: "Ref. L3.782.4.96.6",
        price: "2.000,00 €",
        badgeLabel: "Sold Out",
        badgeVariant: "sold-out",
        disabled: true,
    },
};

export const SimpleCard = {
    args: {
        image: "src/assets/image/breitling-navitimer.png",
        brand: "Breitling",
        reference: "Ref. AB01271A/F570-252S",
        name: "Navitimer 01 Chronograph",
        price: "9.850,00 €",
    },
};

export const AllCards = {
    render: () => {
        const cards = [
            NewArrival.args,
            Discount.args,
            SoldOut.args,
            SimpleCard.args,
        ];

        return (
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {cards.map((card, index) => (
                    <WatchCard key={index} {...card} />
                ))}
            </div>
        );
    },
};