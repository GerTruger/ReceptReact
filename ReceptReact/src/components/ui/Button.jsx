import { Button as CButton } from "@chakra-ui/react";

export const Button = ({ onClick, ...props }) => (
  <CButton
    colorScheme="teal"
    onClick={onClick}
    {...props}
    mt={8}
    borderRadius={5}
    border={3}
    p={4}
    bg="blue.500"
    color="black"
    fontSize={30}
    fontWeight="semibold"
  >
    {props.children}
  </CButton>
);
