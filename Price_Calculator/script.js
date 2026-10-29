function calculateDiscount(price, discountPercent){ //discount:20,40,50..
  return price*(discountPercent/100);
}

function calculateTax(priceAfterDiscount, taxPercent){
  let tax =  priceAfterDiscount * (taxPercent/100);
  return priceAfterDiscount + tax;
}

function calculateFinalPrice(price, discountPercent, taxPercent){
  let discount = calculateDiscount(price,discountPercent);
  let priceAfterDiscount = price - discount;
  let tax = calculateTax(priceAfterDiscount,taxPercent);
  let finalPrice = (price-discount) + tax;
  return finalPrice;
}

function createPriceSummary(price, discountPercent, taxPercent){
  let discount = calculateDiscount(price,discountPercent);
  let priceAfterDiscount = price - discount;
  let tax = calculateTax(priceAfterDiscount,taxPercent);
  let finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);
  return {
    price,
    discount,
    tax,
    finalPrice,
  };
}