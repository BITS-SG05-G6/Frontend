export function formatMoney(amount, currency) {
  if (currency === "VND") {
    return new Intl.NumberFormat("vi-VN").format(amount) + " VND";
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }
}
