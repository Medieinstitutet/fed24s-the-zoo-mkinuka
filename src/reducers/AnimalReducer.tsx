import type { animal } from "../models/animal";

export type Action = {
  type: ActionTypes;
  payload: string;
};

export type ActionTypes = "FEED" | "HELLO" | "SET_ANIMALS";

export const animalReducer = (animals: animal[], action: Action) => {
  switch (action.type) {
    case "FEED":
      // Implemnt logic for Feed action
      return animals;
    case "HELLO":
      // Implement logic for HELLO action
      return animals; // or your updated animals array

    case "SET_ANIMALS":
    //hello
    return animals;
    default:
      return animals;
  }
};
