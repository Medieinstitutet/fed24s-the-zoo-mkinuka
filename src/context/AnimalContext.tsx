import { createContext, type Dispatch } from "react";
import type { animal } from "../models/animal";
import type { Action } from "../reducers/AnimalReducer";

interface IAnimalContext {
    animals: animal[]; 
    dispatch: Dispatch<Action>
}

export const animalContext = createContext<IAnimalContext>({
    animals: [],
    dispatch: () => {},
})