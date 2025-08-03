import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const splitValue = Number(value).toFixed(2);
  const [integerValue, floatValue] = splitValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      <span className="text-2xl font-bold">{integerValue}</span>
      <span className="text-xs align-super">{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
