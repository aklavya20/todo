import React, { useState, useRef } from "react";

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null); // Use useRef to persist timer across renders

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            timerRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
        }
    };

    const stop = () => {
        if (isRunning) {
            setIsRunning(false);
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const reset = () => {
        stop(); // Ensure the timer stops before resetting
        setTime(0);
    };

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${padZero(mins)}:${padZero(secs)}`;
    }

    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span>{formatTime(time)}</span>
            <div className="controls">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
