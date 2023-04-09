import { useState } from "react";
import { ReceptItems } from "./ReceptItems";
import { TextInput } from "./ui/TextInput";
import { data as recepten } from "../utils/data.js";

export const ReceptInput = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");
  const recipes = recepten.hits;
  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  // console.log(recipes);

  console.log(recipe);

  const receptenMatch = recepten.hits.filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase() || "");
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <TextInput onChange={handleChange} w={180} border="solid" h={10} />
      <ReceptItems onClick={onClick} recipes={receptenMatch} />
    </>
  );
};
