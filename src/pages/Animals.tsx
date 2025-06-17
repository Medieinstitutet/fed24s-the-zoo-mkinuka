import { useContext} from "react"
import "../styles/Animals.css"
import { animalContext } from "../context/AnimalContext"
import fallBack from "../assets/No_image_available.svg.png"
import { Link } from "react-router-dom"

export const Animals = () => {
    const { animals } = useContext(animalContext)
    
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

    return <>
        <div>
            <img onError={e => (e.currentTarget.src = fallBack)} src="" alt="Hero image" className=""/>
        </div>
        <div id="animals-container" >
                {animals.map((a) => (
                    <div key={a.id} className="animal-container w-[20vw] overflow-hidden flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/20 shadow-lg backdrop-blur-md border border-white/30">
                        <div className="flex flex-row justify-between ">
                        <h1 className="text-5xl">{a.name}</h1>
                        </div>
                        <img onError={e => (e.currentTarget.src = fallBack)} src={a.imageUrl} alt={a.name} className="img"></img>
                        <p className="">{a.shortDescription}</p>
                        <p>
                            Senast matad: {new Date(a.lastFed).toLocaleTimeString([], { 
                                year: 'numeric', 
                                month: '2-digit', 
                                day: '2-digit', 
                                hour: '2-digit', 
                                minute: '2-digit'  
                            })}
                        </p>
                        <div>
                            <p>
                                <b>
                                  {a.name} {getFeedingStatus(a.lastFed)}
                                </b>
                            </p>
                        </div>
                        <Link className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 p-2 rounded-1xl" to={`/Animal/${a.id}`}>Läs mer om {a.name}...</Link>
                    </div>
                ))}
        </div>
    </>
}