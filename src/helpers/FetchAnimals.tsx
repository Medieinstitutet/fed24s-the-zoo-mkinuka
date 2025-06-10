import { useEffect, useState } from "react";
import type { animal } from "../models/animal";

export const UsefetchAnimals = () => {
    const [animals, setAnimals] = useState<animal[]>([]);
    const [apiFetchBoolean, setApiFetchBoolean] = useState<boolean>(false)
    const [error, setError] = useState<string>()


    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await fetch("https://animals.azurewebsites.net/api/animals");
                const data: animal[] = await response.json();
                setAnimals(data);
            } catch (error) {
                setError("failed to fetch Animals from animal API");
            }
        };

        if (!apiFetchBoolean) {
            fetchAnimals();
            setApiFetchBoolean(true);
        }
    }, [apiFetchBoolean]);
        

        return {animals, error}
}
