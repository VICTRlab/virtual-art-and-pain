import { useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function Timer({ expiryTimestamp, handleExpire }) {

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: handleExpire });

    const mins = minutes < 10 ? "0" + parseInt(minutes) : parseInt(minutes);
    const secs = seconds < 10 ? "0" + parseInt(seconds) : parseInt(seconds);

    return (
        <div>
            <div>
                <span>{mins}</span>:<span>{secs}</span>
            </div>
        </div>
    );
}