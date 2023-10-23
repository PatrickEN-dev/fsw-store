import { ReactNode } from "react";
import { Badge } from "../ui/badge";

interface IBadgeTitleProps {
  children: ReactNode;
  icon: any;
  size: number;
}

const BadgeTitle = ({ children, icon: Icon, size }: IBadgeTitleProps) => {
  return (
    <Badge
      className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
      variant={"outline"}
    >
      {Icon && <Icon size={size} />}

      {children}
    </Badge>
  );
};

export default BadgeTitle;
