import { useEffect, useRef } from 'react';

const SoundEffects = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    // Initialize Web Audio API
    try {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      gainNodeRef.current = audioContextRef.current.createGain();
      gainNodeRef.current.connect(audioContextRef.current.destination);
      gainNodeRef.current.gain.value = 0.1; // Low volume
    } catch (error) {
      console.log('Web Audio API not supported');
      return;
    }

    const createTone = (frequency: number, duration: number, volume: number = 0.1) => {
      if (!audioContextRef.current || !gainNodeRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, audioContextRef.current.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + duration);

      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + duration);
    };

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('.liquid-glass-btn, button, [role="button"]')) {
        createTone(800, 0.1, 0.03);
      }
    };

    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('.liquid-glass-btn, button, [role="button"]')) {
        createTone(600, 0.05, 0.02);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('mouseenter', handleHover, true);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseenter', handleHover, true);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return null;
};

export default SoundEffects;