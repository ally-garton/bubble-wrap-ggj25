import { useState, useEffect } from 'react';

import bubble from '../assets/bubble.png';
import noBubble from '../assets/no-bubble.png';

import popAudioFile from '../assets/ashton-pop.mp3';
import rizzAudioFile from '../assets/jam-rizz.mp3';

export default function Bubble() {
    const [bubbleSource, setBubbleSource] = useState(bubble);
    const [bubbleClass, setBubbleClass] = useState('bubble bubble-image');

    const [popAudio] = useState(new Audio(popAudioFile));
    const [rizzAudio] = useState(new Audio(rizzAudioFile));

    const getRandom = Math.floor(Math.random() * 20);

    const bubblePop = () => {
        if (getRandom == 10) {
            rizzAudio.play().catch((error) => console.error("Error! Audio could not be played.", error));
        } else {
            popAudio.play().catch((error) => console.error("Error! Audio could not be played.", error));
        }

        setBubbleClass("bubble no-bubble-image");
        setBubbleSource(noBubble);
    }

    const noPop = () => {
        return;
    }

    useEffect(() => {
        return () => {
            popAudio.pause();
            rizzAudio.pause();
        };
    }, [popAudio, rizzAudio]);

    return (
        <>
            <img className={bubbleClass} src={bubbleSource} onClick={bubbleClass.includes('no-bubble-image') ? noPop : bubblePop} />
        </>
    )
}