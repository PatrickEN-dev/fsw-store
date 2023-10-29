import { twMerge } from "tailwind-merge";

interface ISummaryItem {
  label: string;
  value: string;
  isBold?: boolean;
  extraClasses?: string;
}

const SummaryItem = ({
  label,
  value,
  isBold = false,
  extraClasses = "",
}: ISummaryItem) => {
  const textStyle = isBold ? "font-bold" : "text-xs";

  const combinedClasses = twMerge(
    `flex items-center justify-between ${textStyle}`,
    extraClasses,
  );

  return (
    <div className={combinedClasses}>
      <p>{label}</p>
      <span>{value}</span>
    </div>
  );
};

export default SummaryItem;
