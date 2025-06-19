import { useContext} from "react"
import "../styles/Animals.css"
import { animalContext } from "../context/AnimalContext"
import fallBack from "../assets/No_image_available.svg.png"
import { Link } from "react-router-dom"
import kalle from "../assets/3191354-uhd_3840_2160_25fps.mp4"

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
        <div className="relative mx-auto mb-8">
        <video
            src={kalle}
            autoPlay
            loop
            muted
            className="w-[70vw] h-[55vh] object-cover rounded-b-4xl shadow-lg"
        >
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold drop-shadow-lg text-center">
            Welcome to the Zoo!
            </h1>
        </div>
        </div>
        <div id="animals-container" >
                {animals.map((a) => (
                    <div key={a.id} className="animal-container w-[20vw] overflow-hidden flex flex-col items-center gap-4 rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm ">
                        <div className="img-container">
                        <img onError={e => (e.currentTarget.src = fallBack)} src={a.imageUrl} alt={a.name} className="img"></img>
                        </div>
                        <div className="flex flex-row justify-between ">
                        <h1 className="text-5xl">{a.name}</h1>
                        </div>
                        <div className="discription">
                        <p className="">{a.shortDescription}</p>
                        <p>
                            <b>Senast matad:</b> {new Date(a.lastFed).toLocaleTimeString([], { 
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
                        </div>
                        <Link className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 p-2 rounded-1xl" to={`/Animal/${a.id}`}>Läs mer om {a.name}...</Link>
                    </div>
                ))}
        </div>
    </>
}