import { StyledText } from "./text-styled";

export const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  logo: "h3",
  subtitle: "h4",
  body1: "p",
  body2: "p",
  caption1: "p",
  caption2: "p",
};

export const Text = ({
  children,
  variant = "body1",
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  ...props
}) => {
  return (
    <StyledText
      $variant={variant}
      $m={m}
      $mx={mx}
      $my={my}
      $mt={mt}
      $mr={mr}
      $mb={mb}
      $ml={ml}
      as={defaultVariantMapping[variant]}
      {...props}
    >
      {children}
    </StyledText>
  );
};
