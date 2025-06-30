'use client';

import { useEffect } from 'react';

export default function KeySound() {
  useEffect(() => {
    const audio = new Audio('/key-sound.mp3');

    const playSound = () => {
      audio.currentTime = 0;    
      audio.play();
    };

    document.addEventListener('keydown', playSound);

    return () => {
      document.removeEventListener('keydown', playSound);
    };
  }, []);

  return null; // Nothing to render, just handles side effect
}
