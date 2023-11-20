import { useEffect, useState, useMemo } from "react";
import {getItineraries} from "../api/back-api/itineraries";

interface itinerary {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
}

export const useItineraries = () => {
    const [itineraries, setItineraries] = useState<itinerary[]>([]);
    const token = useMemo(() => window.localStorage.getItem('token'), [])

    useEffect(() => {
        if (!itineraries.length && token) {
            getItineraries(token).then((itineraries) => {
                console.log(itineraries);
                setItineraries(itineraries);
            });
        }
    }, []);

    return itineraries;
};