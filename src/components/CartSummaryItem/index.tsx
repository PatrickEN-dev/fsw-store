interface CartSummaryItemProps {
  label: string;
  value: string;
  isBold?: boolean;
}

const CartSummaryItem = ({
  label,
  value,
  isBold = false,
}: CartSummaryItemProps) => {
  const textStyle = isBold ? "font-bold" : "text-xs";

  return (
    <div className={`flex items-center justify-between ${textStyle}`}>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default CartSummaryItem;
