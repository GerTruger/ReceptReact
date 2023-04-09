import {
  Center,
  Image,
  Text,
  Card,
  CardBody,
  Button,
  Tag,
  Stack,
  Divider,
} from "@chakra-ui/react";

export const ReceptItem = ({ recipe, onClick }) => {
  return (
    <Center
      gap={7}
      cursor={"pointer"}
      onClick={() => onClick(recipe)}
      display="flexbox"
      ml={50}
    >
      <Card
        display="flexbox"
        bg={"white"}
        borderRadius={"2xl"}
        w="s"
        h="35rem"
        onClick={() => onClick(recipe)}
        cursor="pointer"
        _hover={{ transform: "scale(1.01)" }}
        shadow="  10px 10px rgba(0, 0, 0, 0.2)"
      >
        <CardBody>
          <Image
            src={recipe.image}
            w={303}
            h={250}
            borderWidth={1}
            alt={recipe.alt}
            bgColor="none"
            borderRadius={"2xl"}
            _hover={{ transform: "scale(1.1)" }}
          />
          <Text w={300} Text fontSize={"2xl"} fontWeight={"400"}>
            {recipe.label}
          </Text>{" "}
          <Center>
            <Button onClick={() => onClick()}>{recipe.mealType}</Button>
          </Center>
        </CardBody>
        <Divider />
        <>
          <Stack mt="6" spacing="3">
            <Text w={"fit-content"} fontSize={"1xl"}>
              <Tag w={"fit-content"}>Diet : {recipe.dietLabels}</Tag>
            </Text>
            <Tag w={"fit-content"}>Dish : {recipe.dishType}</Tag>
            <Tag w={"fit-content"}>Cautions : {recipe.cautions}</Tag>
          </Stack>
        </>
      </Card>
    </Center>
  );
};
