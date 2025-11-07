import { useEffect, useRef } from "react";

type WindowWithWebkitAudioContext = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

const INTERACTIVE_SELECTOR = ".liquid-glass-btn, button, [role='button']";

const SoundEffects = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const hoverTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const AudioContextCtor =
      window.AudioContext ||
      (window as WindowWithWebkitAudioContext).webkitAudioContext;

    if (!AudioContextCtor) {
      console.warn("Web Audio API not supported");
      return;
    }

    try {
      audioContextRef.current = new AudioContextCtor();
    } catch (error) {
      console.warn("Unable to initialize audio context", error);
      return;
    }

    const resumeContext = () => {
      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume().catch(() => undefined);
      }
    };

    const createTone = (
      frequency: number,
      duration: number,
      volume: number = 0.1
    ) => {
      if (!audioContextRef.current) return;

      resumeContext();

      const { current: audioContext } = audioContextRef;
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = "sine";

      const now = audioContext.currentTime;
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(volume, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

      oscillator.start(now);
      oscillator.stop(now + duration);
    };

    const getInteractiveTarget = (eventTarget: EventTarget | null) => {
      if (!(eventTarget instanceof Element)) return null;
      return eventTarget.closest(INTERACTIVE_SELECTOR) as HTMLElement | null;
    };

    const handleClick = (event: Event) => {
      const target = getInteractiveTarget(event.target);
      if (!target) return;
      createTone(800, 0.1, 0.03);
    };

    const handleHover = (event: Event) => {
      const target = getInteractiveTarget(event.target);
      if (!target || hoverTargetRef.current === target) return;

      hoverTargetRef.current = target;

      const handleLeave = () => {
        if (hoverTargetRef.current === target) {
          hoverTargetRef.current = null;
        }
        target.removeEventListener("pointerleave", handleLeave);
      };

      target.addEventListener("pointerleave", handleLeave, { once: true });
      createTone(600, 0.05, 0.02);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("pointerenter", handleHover, true);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("pointerenter", handleHover, true);
      audioContextRef.current?.close();
    };
  }, []);

  return null;
};

export default SoundEffects;
