import type { animal } from "../models/animal";

// export type Action = {
//   type: ActionType;
//    payload: number;
// }
export enum ActionType {
  FEED,
  UPDATIME,
  HELLO,
  SET_ANIMALS
}

export type Action =
  | { type: ActionType.FEED; payload: number }
  | { type: ActionType.SET_ANIMALS; payload: animal[] }
  | { type: ActionType.HELLO }
  | { type: ActionType.UPDATIME };

export const animalReducer = (animals: animal[], action: Action): animal[] => {
  switch (action.type) {
    case ActionType.FEED:
       return animals.map(a =>
        a.id === action.payload
          ? { ...a, isFed: true, lastFed: new Date().toISOString() }
          : a
      );

  case ActionType.HELLO:
  return animals;   

  case ActionType.SET_ANIMALS:
  return action.payload;


    default:
      return animals;
  }
};
