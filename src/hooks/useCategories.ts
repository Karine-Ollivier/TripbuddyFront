import { useEffect, useState } from "react";
import {getCategories} from "../api/search-api/categories";

interface Category {
    id: number;
    name: string;
}

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (!categories.length) {
            getCategories().then((categories) => {
                setCategories(categories);
            });
        }
    }, []);

    return categories;
};