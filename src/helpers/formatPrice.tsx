const formatPrice = (price: number): string => {
  if (isNaN(price)) {
    return "Preço inválido";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

export default formatPrice;
