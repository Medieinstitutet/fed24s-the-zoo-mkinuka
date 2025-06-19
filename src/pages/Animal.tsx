import { useContext } from "react"
import { animalContext } from "../context/AnimalContext"
import { useParams } from "react-router-dom";
import fallBack from "../assets/No_image_available.svg.png"
import "../styles/Animal.css"
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
        
            if (diff > 4 * 60 * 60 * 1000) {
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
        
        <div className="animalInfo-container flex flex-row justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center gap-20">
            <h1 className="text-black text-5xl">{animal.name}</h1>
            <img src={animal.imageUrl} alt={animal.name} onError={e => (e.currentTarget.src = fallBack)} className="animalInfo-img"/>
            </div>
            <div className="">
            <h3 className="text-7xl text-black font-semibold">Information</h3>
            <p className="long-desc text-black font-bold tracking-wide text-3xl pt-8">{animal.longDescription}</p>
            </div>
            <div className="flex-col h-[30rem]">
            <div className="addInfo flex-col justify-center items-center text-black">
                <p className="text-3xl"><b>Namn:</b> {animal.name}</p>
                <p className="text-3xl"><b>Födelseår:</b> {animal.yearOfBirth}</p>
                <p className="text-3xl"><b>Mediciner:</b> {animal.medicine}</p>
            </div>
            <div className="flex-col">
                <button onClick={ () => dispatch({type: ActionType.FEED, payload: animal.id })} disabled={!canFeed(animal.lastFed)} className={`px-4 py-2 rounded transition  ${canFeed(animal.lastFed) ? "bg-green-500 hover:bg-green-600 cursor-pointer" : "bg-gray-400 cursor-not-allowed" }`} >Mata {animal.name}</button>
                                        <p>
                                            <b>Senast matad:</b> {new Date(animal.lastFed).toLocaleTimeString([], { 
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