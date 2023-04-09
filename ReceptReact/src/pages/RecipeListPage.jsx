import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { ReceptInput } from "../components/ReceptInput";
import { ReceptKeuze } from "../components/ReceptKeuze";

export const RecipeListPage = () => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = "Winc Recipe Checker";

  return (
    <div className="app">
      {userRecipe ? (
        <ReceptKeuze recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading size="2xl" mb={-30} color="blue.200">
            <Center h="30vh" flexDir="column">
              {greeting}
            </Center>
          </Heading>
          <ReceptInput onClick={setUserRecipe} />
        </>
      )}
    </div>
  );
};
