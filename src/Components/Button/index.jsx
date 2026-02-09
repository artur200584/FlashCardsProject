import clsx from "clsx";

const Button = ({ children, variant, type }) => {
  const variantClassName = clsx(
    variant === "primary" &&
      "bg-[var(--button-color)] p-[var(--spacing-200)] text-[var(--spacing-200) rounded-[var(--radius-full)] rounded-4xl border-black font-medium"
  );
  return (
    <button type={type} className={clsx("button", variantClassName)}>
      {children}
    </button>
  );
};

export default Button;
