import clsx from "clsx";

const Button = ({ children, variant, type, className, ...props }) => {
  const variantClassName = clsx(
    variant === "primary" &&
      "bg-[var(--button-color)] p-[var(--spacing-200)] text-[var(--spacing-200) rounded-4xl border-black font-medium",
    variant === "button" &&
      "bg-[var(--button-color)] p-[10px] w-[100px] h-[50px] text-[20px] rounded-md border-black font-medium"
  );
  return (
    <button
      type={type}
      className={clsx("button", variantClassName, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
