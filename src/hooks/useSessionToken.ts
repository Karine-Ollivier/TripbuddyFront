import { useMemo } from "react";
import  useLocalStorage from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export const useSessionToken = (): string | null => {
    const { get, set } = useLocalStorage();

    const sessionToken = useMemo(() => {
        const token = get("sessionToken");
        if (!token) {
            const newToken = uuidv4();
            set("sessionToken", newToken);
            return newToken;
        }
        return token;
    }, [get, set]);

    return sessionToken;
};