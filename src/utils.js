export const priceStr = (price) => {
    return price ? `${price.toFixed(2)} €`: null;
}