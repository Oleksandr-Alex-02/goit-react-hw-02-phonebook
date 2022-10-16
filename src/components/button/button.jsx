import React, { useCallback } from 'react';
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

function Button() {
    const onClick = useCallback(() => {
        confetti({
            particleCount: 1500,
            spread: 1000
        });
    }, []);

    return (
        <button className="button" onClick={onClick}>
            <span>🎉</span>
            <button type='submit'>Like</button>
        </button>
    );
}

export default Button;