
class SoundManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  public isMuted: boolean = false;

  constructor() {
    // AudioContext must be initialized after a user interaction
  }

  private init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.3; // Default volume
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.3, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  // --- Sound Generators ---

  // Simple Beep (UI Clicks)
  public playClick() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx!.currentTime;
    this.oscillator('sine', 800, t, 0.05, 0, 0.5);
  }

  // Laser Sound (Shooting)
  public playShoot() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx!.currentTime;
    this.oscillator('sawtooth', 600, t, 0.15, -400, 0.3); // Pitch slide down
  }

  // Correct Answer (Ding / Chord)
  public playCorrect() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx!.currentTime;
    // C Major Chord
    this.oscillator('sine', 523.25, t, 0.3, 0, 0.3); // C5
    this.oscillator('sine', 659.25, t + 0.05, 0.3, 0, 0.3); // E5
    this.oscillator('sine', 783.99, t + 0.1, 0.4, 0, 0.3); // G5
  }

  // Success / Achievement (Chime)
  public playSuccess() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx!.currentTime;
    // Ascending A Major Triad
    this.oscillator('triangle', 440, t, 0.1, 0, 0.2); // A4
    this.oscillator('triangle', 554.37, t + 0.1, 0.1, 0, 0.2); // C#5
    this.oscillator('triangle', 659.25, t + 0.2, 0.4, 0, 0.2); // E5
  }

  // Incorrect Answer (Buzz)
  public playWrong() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx!.currentTime;
    this.oscillator('sawtooth', 150, t, 0.4, -50, 0.5);
  }

  // Level Complete (Fanfare)
  public playWin() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx!.currentTime;
    const melody = [523.25, 659.25, 783.99, 1046.50]; // C E G C
    melody.forEach((freq, i) => {
      this.oscillator('square', freq, t + (i * 0.1), 0.1, 0, 0.2);
    });
    // Final long note
    this.oscillator('sine', 1046.50, t + 0.4, 0.6, 0, 0.3);
  }

  // Explosion / Impact (Noise)
  public playExplosion() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx!.currentTime;
    this.noise(t, 0.2);
  }

  // Locked Level (Thud)
  public playLock() {
    if (this.isMuted) return;
    this.init();
    const t = this.ctx!.currentTime;
    this.oscillator('square', 100, t, 0.1, 0, 0.3);
  }

  // --- Helpers ---

  private oscillator(type: OscillatorType, freq: number, startTime: number, duration: number, slide: number = 0, vol: number = 1) {
    if (!this.ctx || !this.masterGain) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    if (slide !== 0) {
      osc.frequency.linearRampToValueAtTime(freq + slide, startTime + duration);
    }

    gain.gain.setValueAtTime(vol, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  private noise(startTime: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000;

    gain.gain.setValueAtTime(0.5, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(startTime);
  }
}

export const soundManager = new SoundManager();