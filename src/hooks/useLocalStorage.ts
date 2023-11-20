const useLocalStorage = () => {
    const get = (key: string): string | null => {
        try {
            return window.localStorage.getItem(key);
        } catch (error) {
            console.warn(`Error getting localStorage item ${key}:`, error);
            return null;
        }
    };

    const set = (key: string, value: string): void => {
        try {
            window.localStorage.setItem(key, value);
        } catch (error) {
            console.warn(`Error setting localStorage item ${key}:`, error);
        }
    };

    return { get, set };
};

export default useLocalStorage;