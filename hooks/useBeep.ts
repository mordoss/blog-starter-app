import { useState, useEffect } from 'react';

const beepURL = '/assets/sounds/beep.mp3';

export const useBeep = () => {
    const [audio, setAudio] = useState<HTMLAudioElement>(null);

    useEffect(() => {
        setAudio(new Audio(beepURL));
    }, []);

    const playSound = () => {
        audio.play();
    };

    return playSound;
};
