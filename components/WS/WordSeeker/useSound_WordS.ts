import { useCallback, useEffect, useState, useMemo } from 'react';

interface UseSoundOptions {
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
  autoplay?: boolean;
  type?: 'correct' | 'complete' | 'incorrect';
}

const useSound = (src: string, options?: UseSoundOptions) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  const volume = options?.volume ?? 0.7;
  const type = options?.type;

  useEffect(() => {
    const newAudio = new Audio(src);
    newAudio.volume = volume;
    if (options?.playbackRate) newAudio.playbackRate = options.playbackRate;
    if (options?.loop) newAudio.loop = options.loop;
    if (options?.autoplay) newAudio.autoplay = options.autoplay;
    setAudio(newAudio);

    const unlockAudio = () => {
      // Unlock HTMLAudioElement
      const playPromise = newAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          newAudio.pause();
          newAudio.currentTime = 0;
        }).catch(() => {});
      }

      // Unlock Web Audio API Context for fallback
      if (!audioContext) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        setAudioContext(ctx);
      } else if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      document.removeEventListener('pointerdown', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
    };

    document.addEventListener('pointerdown', unlockAudio);
    document.addEventListener('keydown', unlockAudio);

    return () => {
      newAudio.pause();
      newAudio.src = '';
      document.removeEventListener('pointerdown', unlockAudio);
      document.removeEventListener('keydown', unlockAudio);
    };
  }, [src, volume, options?.playbackRate, options?.loop, options?.autoplay, audioContext]);

  const playSynthFallback = useCallback(() => {
    if (!audioContext) return;
    
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    const now = audioContext.currentTime;
    
    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.1); // C6
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === 'complete') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
      gain.gain.setValueAtTime(volume, now);
      gain.gain.linearRampToValueAtTime(volume, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    } else if (type === 'incorrect') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.2);
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  }, [audioContext, type, volume]);

  const play = useCallback(() => {
    if (audio) {
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If file fails to play (e.g. 404), use synth fallback
          playSynthFallback();
        });
      }
    } else {
      playSynthFallback();
    }
  }, [audio, playSynthFallback]);

  const stop = useCallback(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [audio]);

  return useMemo(() => ({ play, stop, audio }), [play, stop, audio]);
};

export default useSound;
