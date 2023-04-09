import {
  Center,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";

export const ReceptKeuze = ({ recipe, onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center
      gap="1"
      maxW="960px"
      mx="auto"
      sm="30em"
      md="48em"
      lg="62em"
      xl="80em"
      display="flexbox"
      lineHeight={1.9}
      align={"center"}
    >
      <Heading fontSize={"1xl"} color="black" lineHeight={1.3}>
        <Text fontSize="6xl">{recipe.label}</Text>
      </Heading>

      <Image
        src={recipe.image}
        w={300}
        h={300}
        borderRadius={"2xl"}
        alt={recipe.alt}
      ></Image>
      <Stack mt="6" spacing="5">
        <Text as="b">
          <Text fontSize="3xl">{recipe.mealType}</Text>
          <Button color={"black"} onClick={onOpen} mr={4}>
            <Text fontSize="3xl">Dish :</Text>
          </Button>
          <Stack mt="6" spacing="3">
            {" "}
            <Tag>{recipe.dishType}</Tag>
          </Stack>
          <Text fontSize="3xl">Ingredients :</Text>
          <Stack mt="6" spacing="3">
            {" "}
            <Tag> {recipe.ingredientLines}</Tag>
          </Stack>
          <Text fontSize="3xl">Health Labels :</Text>
          <Stack mt="6" spacing="3">
            {" "}
            <Tag w={"fit-content"}>{recipe.healthLabels}</Tag>
          </Stack>
          <Stack mt="6" spacing="3">
            <Text fontSize="3xl">Diet :</Text>
            <Tag> {recipe.dietLabels}</Tag>
          </Stack>
          <Text fontSize="3xl">Cautions :</Text>
          <Stack mt="6" spacing="3">
            <Tag w={"fit-content"}>{recipe.cautions}</Tag>
          </Stack>
          <Text fontSize="3xl">Servings :</Text>
          <Stack mt="6" spacing="3">
            {" "}
            <Tag>{recipe.yield}</Tag>
          </Stack>{" "}
          <Stack mt="6" spacing="3">
            <Text fontSize="3xl">Total cooking time :</Text>
            <Tag> {recipe.totalTime} min</Tag>
          </Stack>
        </Text>
      </Stack>

      <Center>
        <Stack mt="6" spacing="3">
          <Button onClick={() => onClick()} variant="ghost">
            Click to Return
          </Button>
        </Stack>
      </Center>
      <Modal size={["full", "md"]} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your dish =</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            height={["full", "fit-content"]}
            display="flex"
            justifyContent="center"
            alignItems={["center", "flex-start"]}
            flexDir="column"
          >
            <Text>{recipe.dishType}</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              RETURN
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};
