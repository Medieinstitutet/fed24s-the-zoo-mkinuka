import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { animalContext } from "./context/AnimalContext";
import { fetchAnimals } from "./helpers/FetchAnimals";
import { useState, useEffect, useReducer } from "react";
import { ActionType, animalReducer } from "./reducers/AnimalReducer";

function App() {
  const [animals, dispatch] = useReducer(animalReducer, [])
  const [error, setError] = useState<string>("");
  const [apiFetchBoolean, setApiFetchBoolean] = useState<boolean>(false);

   useEffect(() => {
    if (!apiFetchBoolean) {
      fetchAnimals()
        .then(data => dispatch({ type: ActionType.SET_ANIMALS, payload: data }))
        .catch(() => setError("Failed to fetch animals"));
      setApiFetchBoolean(true);
    }
  },);

  return <>
  <animalContext.Provider value={{animals, dispatch}}>
  <RouterProvider router={router}></RouterProvider>
  </animalContext.Provider>
  </>;
}

export default App;
