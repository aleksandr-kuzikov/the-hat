import React, {useEffect, useMemo, useState} from "react";
import './Timer.scss'

export const Timer: React.FC = () => {

    const timetotimer = 20;

    const [intervalId, setIntervalId] = useState<number>(0)
    const [time, setTime] = useState<number>(timetotimer);
    const [running, setRunning] = useState<boolean>(false);

    const pauseClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        if (time == 0) setTime(timetotimer)
        setRunning(prev => !prev)

    }

    useEffect(() => {
        if (running)
            setIntervalId(window.setInterval(() => {
                setTime(prev => prev - 1)
            }, 1000))
        else
            clearInterval(intervalId)

        return () => clearInterval(intervalId)
    }, [running])


    useEffect(() => {
        if (time == 0) {
            clearInterval(intervalId)
            setRunning(false)
        }

    }, [time])


    return(
        <div className="timer">
            <div className="timer__value">{time}</div>
            <a className="timer__control" href="#" onClick={pauseClickHandler}>{running ? '||' : time == 0 ? 'o' : '>'}</a>
        </div>
    )
}