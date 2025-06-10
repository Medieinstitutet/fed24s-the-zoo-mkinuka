import { useContext, useReducer } from "react"
import "../styles/Animals.css"
import { animalContext } from "../context/AnimalContext"

export const Animals = () => {
    const { animals, dispatch} = useContext(animalContext)

    return <>
        <div id="animals-container" >
                {animals.map((a) => (
                    <div key={a.id} className="animal-container">
                        <h3>{a.name}</h3>
                        <img  src={a.imageUrl} alt={a.name} className="img"></img>
                        <p>{a.longDescription}</p>
                        <p>Last fed {a.lastFed}</p>
                        <button>Feed {a.name}</button>
                    </div>
                ))}
        </div>
    </>
}