import StudyCategory from "../studyCategory/studyCategory";
import styles from "./categories.module.css";
import React, { useState, useEffect } from "react";

interface CategoriesProps {
    toggleStudyFunction: Function,
    categories: Map<string, number>,
    times: Array<number>,
    currentCategory: string | null,
}

export default function Categories({ toggleStudyFunction, categories, times, currentCategory }: CategoriesProps) {
    // All categories, listed in order of their corresponding idx in the times array
    const [orderedCategories, setOrderedCategories] = useState(new Array(categories.size));

    /**
     * Populate orderedCategories from categories
     */
    useEffect(() => {
        const newOrderedCategories: string[] = new Array(categories.size);
        categories.forEach((categoryIdx, categoryName) => {
            newOrderedCategories[categoryIdx] = categoryName;
        });
        setOrderedCategories(newOrderedCategories);
    }, []);

    return (
        <div id={styles.categories}>
            <ul id={styles.categoryList}>
                { orderedCategories.map((categoryName) => {
                    if (categoryName !== undefined) {
                        const categoryIdx = categories.get(categoryName);
                        if (categoryIdx !== undefined) {
                            return (
                                <li key={categories.get(categoryName)}>
                                    <StudyCategory 
                                        name={categoryName} 
                                        milliseconds={times[categoryIdx]} 
                                        selected={currentCategory == categoryName}
                                        toggleStudyFunction={toggleStudyFunction} 
                                    />
                                </li>
                            );
                        }
                    } 
                    return null;
                }) }
            </ul>
        </div>
    );
}