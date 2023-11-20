import { getSuggestions } from "../api/search-api/suggestions";
import { useState } from "react";
import { useSessionToken } from "./useSessionToken";

interface Suggestion {
    id: number;
    name: string;
}

export const useSuggest = () => {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const sessionToken = useSessionToken()


    const suggest = async (inputValue: string, category: string | undefined) => {
        if (!sessionToken){
            console.error("Session token is not available.");
            return;
        }
        
        try {
            // Utilise la valeur actuelle de locationName comme le paramètre keyword
            const categoryValue = category ?? 'defaultCategoryValue';
            const result = await getSuggestions(inputValue, categoryValue, sessionToken);

            // Mise à jour de l'état des suggestions avec les résultats de la requête
            setSuggestions(result);

        } catch (error) {
            console.error("Erreur lors de la récupération des suggestions :", error);
            setSuggestions([]);
        }
    }

    return { suggest, suggestions };
}
