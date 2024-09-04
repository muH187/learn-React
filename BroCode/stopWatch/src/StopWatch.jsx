import React, { useState, useRef, useEffect } from 'react';

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);  // Fixed typo here
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(new Date().getTime() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    function start() {
        setIsRunning(true);  // Fixed typo here
        startTimeRef.current = new Date().getTime() - elapsedTime;
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);  // Fixed typo here
    }

    function stop() {
        setIsRunning(false);  // Fixed typo here
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <>
            <div className="stop-watch">
                <div className="display">
                    <h1>{formatTime()}</h1>
                </div>
                <div className="controls">
                    <button className="start" onClick={start}>Start</button>
                    <button className="reset" onClick={reset}>Reset</button>
                    <button className="stop" onClick={stop}>Stop</button>
                </div>
            </div>
        </>
    );
}

export default StopWatch;
