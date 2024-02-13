export const getTotals = (cart) => {
  console.log(cart);

  let totalAmount = 0;
  let totalCost = 0;

  for (let item of cart.values()) {
    totalAmount += item.amount;
    totalCost += item.price * item.amount;
  }

  return { totalAmount, totalCost };
};
