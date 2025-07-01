'use client';

import { useEffect } from 'react';

export default function KeySound() {
  useEffect(() => {
    const audio = new Audio('/key-sound.mp3');
    audio.preload = 'auto'; // Preload for faster response

    // Allowed keys
    const allowedKeys = ['0', '1', '2', 'Enter'];

    const playSound = (event) => {
      if (allowedKeys.includes(event.key)) {
        audio.currentTime = 0;
        audio.play().catch((err) => {
          // Optional: handle autoplay error (e.g. if user hasn't interacted yet)
          console.warn('Audio play failed:', err);
        });
      }
    };

    document.addEventListener('keydown', playSound);

    return () => {
      document.removeEventListener('keydown', playSound);
    };
  }, []);

  return null;
}
