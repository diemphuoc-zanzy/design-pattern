function defaultPrice(originalPrice: number): number {
  return originalPrice;
}

function dayPrice(originalPrice: number): number {
  return originalPrice * 0.6;
}

function promotionPrice(originalPrice: number): number {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

function preOrderPrice(originalPrice: number): number {
  return originalPrice * 0.8;
}

function blackFridayPrice(originalPrice: number): number {
  return originalPrice * 0.6;
}

export const TypePromotion = {
  default: defaultPrice,
  day: dayPrice,
  preOrder: preOrderPrice,
  blackFriday: blackFridayPrice,
  promotion: promotionPrice,
};
