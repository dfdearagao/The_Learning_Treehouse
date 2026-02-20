
// Simple synth to avoid external assets
// Initialize context lazily to handle browser autoplay policies
let audioContext: AudioContext | null = null;

const getContext = () => {
    if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContext;
};

const createOscillator = (type: OscillatorType, freq: number, duration: number, startTime: number = 0) => {
    const ctx = getContext();
    if (ctx.state === 'suspended') ctx.resume();
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);
    
    // Smooth attack and release
    gain.gain.setValueAtTime(0, ctx.currentTime + startTime);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + startTime);
    osc.stop(ctx.currentTime + startTime + duration);
};

export const playSound = (type: 'click' | 'pop' | 'success' | 'error' | 'complete' | 'hover') => {
    const ctx = getContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});

    switch (type) {
        case 'click':
            // High pitch pip
            createOscillator('sine', 800, 0.1);
            break;
            
        case 'hover':
            // Very subtle tick
            createOscillator('triangle', 400, 0.05);
            break;

        case 'pop':
            // Pitch drop for bubble effect
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
            break;

        case 'success':
            // Major Triad Arpeggio (C-E-G)
            createOscillator('sine', 523.25, 0.3, 0);
            createOscillator('sine', 659.25, 0.3, 0.1);
            createOscillator('sine', 783.99, 0.6, 0.2);
            break;

        case 'error':
            // Low sawtooth buzz
            createOscillator('sawtooth', 150, 0.3);
            createOscillator('sawtooth', 130, 0.3, 0.1);
            break;

        case 'complete':
            // Fanfare
            createOscillator('triangle', 523.25, 0.2, 0); // C5
            createOscillator('triangle', 659.25, 0.2, 0.15); // E5
            createOscillator('triangle', 783.99, 0.2, 0.3); // G5
            createOscillator('triangle', 1046.50, 0.8, 0.45); // C6
            break;
    }
};
