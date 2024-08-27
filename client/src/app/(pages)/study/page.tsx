"use client";

import styles from "./page.module.css";
import Stopwatch from "../../(components)/stopwatch/stopwatch";
import Sidebar from "../../(components)/sidebar/sidebar";
import Categories from "../../(components)/categories/categories";
import React, { useState, useEffect } from "react";

const categories = new Map();  // key: category name, value: index of that category's time in times
categories.set("school", 0);
categories.set("other", 1);

const defaultTimes = [0, 0];

export default function Page() {
    // array representing total milliseconds studied for each category
    const [times, setTimes] = useState(defaultTimes)

    // when studying, represents the time in the category before the session started
    const [oldTime, setOldTime] = useState(0);

    // the time elapsed in the current session
    const [sessionTime, setSessionTime] = useState<number>(0);

    // the start time of the current session
    const [start, setStart] = useState<number>(0);
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);

    /**
     * if the stopwatch is currently active, ask for confirmation before closing page
     * TODO: automatically pause the session and save data upon page close instead of asking for confirmation
     */
    useEffect(() => {
        const handleBeforeUnload = (e: Event) => {
            e.preventDefault();
        };

        if (currentCategory) {
            window.addEventListener("beforeunload", handleBeforeUnload);

            return () => {
                window.removeEventListener("beforeunload", handleBeforeUnload);
            }
        }
    }, [currentCategory]);

    /**
     * When currently studying, compare current time to start time every 0.1 seconds
     * And update times
     */
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (currentCategory) {
            interval = setInterval(() => {
                const newSessionTime = Date.now() - start.valueOf();
                setSessionTime(newSessionTime);
                const newTimes = [...times];
                const categoryIdx = categories.get(currentCategory);
                newTimes[categoryIdx] = oldTime + newSessionTime;
                setTimes(newTimes);
            }, 100);
        }
        return () => {
            clearInterval(interval);
        };
    }, [currentCategory, sessionTime]);

    /**
     * If currently studying and a new category is selected, switch categories.
     * If currently studying and the same category is selected, stop studying.
     * If not studying, start studying with the selected category. 
     * @param category String representing the category to toggle to / off.
     */
    function toggleStudy(category: string) {
        console.log(category);
        if (currentCategory == category) {
            endStudy();
        } else if (currentCategory) {
            endStudy();
            startStudy(category);
        } else {
            startStudy(category);
        }
    }

    /**
     * Start studying in a specific catgory. 
     * Only call if not studying in any categories currently.
     * @param category String representing the category to start studying in
     */
    function startStudy(category: string) {
        setStart(Date.now());
        setOldTime(times[categories.get(category)])
        setCurrentCategory(category);
    }

    /**
     * Stop studying in the current category.
     */
    function endStudy() {
        if (currentCategory == null) {
            throw Error("Tried to end study session but currentCategory was null.");
        }
        const newTime = categories.get(currentCategory) + Math.floor(sessionTime / 1000) * 1000;
        const newTimes = [...times];
        const categoryIdx = categories.get(currentCategory);
        newTimes[categoryIdx] = newTime;
        setTimes(newTimes);
        setCurrentCategory(null);
    }

    /**
     * Get the current time and return either "evening", "morning", or "afternoon".
     * @returns String: "evening", "morning", or "afternoon"
     */
    function getTimeOfDay() {
        const hour = (new Date()).getHours();
        if (hour <= 3 || hour >= 18) {
            return "evening";
        }
        if (hour >= 4 && hour <= 11) {
            return "morning";
        } else {
            return "afternoon";
        }
    }

    /**
     * Sum up all the times to get the total number of milliseconds studied.
     * @returns Number representing the sum of the times array
     */
    function getTotalMilliseconds() {
        let milliseconds = 0;
        times.forEach((time) => {
            milliseconds += time;
        });
        return milliseconds;
    }

    return (
        <div id={styles.body}>
            <Sidebar selected={"study"} />
            <div id={styles.content}>
                <div id={styles.hero}>
                    <h1 id={styles.greeting}>good {getTimeOfDay()}, naomi</h1>
                </div>
                <main id={styles.main}>
                    <Stopwatch time={getTotalMilliseconds()} active={(categories != null)} sessionTime={sessionTime} endStudy={endStudy} />
                    <Categories toggleStudyFunction={toggleStudy} categories={categories} times={times} currentCategory={currentCategory}/>
                </main>
            </div>

        </div>
    );
}
