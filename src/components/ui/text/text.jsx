import "./text-style.css";

export const TextVariant = {
  normal: "text",
  bold: "text text--bold",
  small: "text text--small",
  smallBold: "text text--small-bold",
};

export const Text = ({
  children,
  variant = TextVariant.normal,
  className = "",
}) => {
  return <p className={`${variant} ${className}`}>{children}</p>;
};
