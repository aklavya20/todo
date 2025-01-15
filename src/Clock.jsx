import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId); // Cleanup the interval on unmount
        };
    }, []); // Empty dependency array ensures this runs only once

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridim = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridim}`;
    }

    function padZero(number) {
        return number < 10 ? `0${number}` : number; 
    }

    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}