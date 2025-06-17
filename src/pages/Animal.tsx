import { useContext } from "react"
import { animalContext } from "../context/AnimalContext"
import { useParams } from "react-router-dom";
import fallBack from "../assets/No_image_available.svg.png"
import "../styles/animal.css"
import { ActionType } from "../reducers/AnimalReducer";




export const Animal = () => {
    const { animals, dispatch } = useContext(animalContext);
    const { id } = useParams();
    
    const animal = animals.find(a => a.id === Number(id));
    if(!animal) return <p>Djuret hittades inte</p>

          const getFeedingStatus = (lastFed: string) => {
            const fedTime = new Date(lastFed).getTime();
            const now = Date.now();
            const diff = now - fedTime;
        
            if (diff > 5 * 60 * 60 * 1000) {
                return "måste matas nu!";
            } else if (diff > 3 * 60 * 60 * 1000) {
                return "snart hungrig";
            } else {
                return "är mätt just nu, kom tillbaka senare";
            }
        };

        const canFeed = (lastFed:string) => {
            const fedTime = new Date(lastFed).getTime();
            const now = Date.now();
            return now - fedTime > 4 * 60 * 60 * 1000;
        }
    
    return <>
        
        <div className="animalInfo-container flex flex-col items-center">
            <div className="flex flex-col justify-center items-center gap-20">
            <h1 className="text-black text-5xl">{animal.name}</h1>
            <img src={animal.imageUrl} alt={animal.name} onError={e => (e.currentTarget.src = fallBack)} className="animalInfo-img"/>
            </div>
            <div className="info-box flex flex-row justify-between">
            <div>
            <h3 className="text-4xl text-black font-semibold">Information</h3>
            <p className="long-desc text-black font-bold tracking-wide">{animal.longDescription}</p>
            </div>
            <div className="addInfo flex-col justify-center items-center text-black">
                <p className="text-2xl"><b>Namn:</b> {animal.name}</p>
                <p className="text-2xl"><b>Födelseår:</b> {animal.yearOfBirth}</p>
                <p className="text-2xl"><b>Mediciner:</b> {animal.medicine}</p>
                <button onClick={ () => dispatch({type: ActionType.FEED, payload: animal.id })} disabled={!canFeed(animal.lastFed)} className={`px-4 py-2 rounded transition  ${canFeed(animal.lastFed) ? "bg-green-500 hover:bg-green-600 cursor-pointer" : "bg-gray-400 cursor-not-allowed" }`} >Mata {animal.name}</button>
                                        <p>
                                            Senast matad: {new Date(animal.lastFed).toLocaleTimeString([], { 
                                                year: 'numeric', 
                                                month: '2-digit', 
                                                day: '2-digit', 
                                                hour: '2-digit', 
                                                minute: '2-digit'  
                                            })}
                                        </p>
                <p>
                    <b>{animal.name} {getFeedingStatus(animal.lastFed)}</b>
                </p>
            </div>
            </div>

        </div>
    </>
}