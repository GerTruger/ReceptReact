import { Flex } from "@chakra-ui/react";
import { ReceptItem } from "./ReceptItem";

export const ReceptItems = ({ recipes, onClick }) => {
  return (
    <Flex
      gap={6}
      w={["full", "90%"]}
      flexWrap="wrap"
      flexDir={["column", "row"]}
      justify="even"
      alignItems="center"
    >
      {recipes.map(({ recipe }) => (
        <ReceptItem key={recipe.label} recipe={recipe} onClick={onClick} />
      ))}
    </Flex>
  );
};
