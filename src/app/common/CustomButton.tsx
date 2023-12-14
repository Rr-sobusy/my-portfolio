import React from "react";
import { cn } from "@/libs/utils/cn";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  className?: string;
  variant?: keyof typeof btnVariant;
}

//* Button types
const btnVariant = {
  gradient:
    "bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)] text-white hover:shadow-[var(--gradient-from)] hover:shadow-md",
  outlined:
    "border-[3px] border-white text-slate-200 hover:shadow-[#E9EBEC] hover:shadow-sm hover:text-black hover:bg-slate-300 duration-300",
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  variant = "outlined",
  ...rest
}) => {
  const Component = "button";
  return (
    <Component
      {...rest}
      className={cn(
        `${btnVariant[variant]} px-6 py-3 rounded-3xl font-poppins text-sm font-semibold tracking-wide`,
        className
      )}
    >
      {children}
    </Component>
  );
};

export default CustomButton;
