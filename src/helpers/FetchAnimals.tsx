import type { animal } from "../models/animal";

export const fetchAnimals = async () => {
    const response = await fetch("https://animals.azurewebsites.net/api/animals");
    const data: animal[] = await response.json()
    if(data.length <= 0) throw new Error ("failed to fetch Animals from animal API") 
    return data
}


