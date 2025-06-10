import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { animalContext } from "./context/AnimalContext";
import { UsefetchAnimals } from "./helpers/FetchAnimals";
import { useReducer } from "react";
import { animalReducer } from "./reducers/AnimalReducer";
function App() {
  const data = UsefetchAnimals();
  // const [animals, dispatch] = useReducer(animalReducer, [])

  return <>
  <animalContext.Provider value={{animals: data.animals, dispatch: () => {}}}>
  <RouterProvider router={router}></RouterProvider>
  </animalContext.Provider>
  </>;
}

export default App;
