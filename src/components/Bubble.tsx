import React from "react";
import { useState, useEffect } from 'react';

import bubble from '../assets/bubble.png';
import noBubble from '../assets/no-bubble.png';

import popAudioFile from '../assets/ashton-pop.mp3';
import rizzAudioFile from '../assets/jam-rizz.mp3';

interface BubbleProps {
    onBubbleRizz: () => void;
    onBubblePop: () => void;

    imageSource: string;
    imageClass: string;
}

const Bubble: React.FC<BubbleProps> = React.memo(({ onBubbleRizz, onBubblePop, imageSource, imageClass }) => {
    const [bubbleSource, setBubbleSource] = useState(imageSource);
    const [bubbleClass, setBubbleClass] = useState(imageClass);

    const [popAudio] = useState(new Audio(popAudioFile));
    const [rizzAudio] = useState(new Audio(rizzAudioFile));

    const bubblePop = () => {
        const chanceOfRizz = Math.random() <= 0.1;

        if (chanceOfRizz) {
            rizzAudio.play().catch((error) => console.error("Error! Audio could not be played.", error));
            onBubbleRizz();
        } else {
            popAudio.play().catch((error) => console.error("Error! Audio could not be played.", error));
            onBubblePop();
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
});

export default Bubble;