import { Input, Center } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Center h="10vh" flexDir="column">
    <Input
      // variant="flushed"
      onChange={onChange}
      {...props}
      w={300}
      mb={50}
      color="black"
      fontSize={30}
      borderRadius={10}
      border="solid"
      placeholder="Search for recipes...."
    />
  </Center>
);
