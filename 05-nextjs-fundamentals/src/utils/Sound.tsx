/**
 * @example
 * ```ts
 * const sound = new Sound();
 * sound.play();
 * sound.isPlaying; // true
 * sound.setFrequency(440);
 * sound.setGain(0.5);
 * sound.dispose();
 * ```
 *
 * Note that there's no `stop` function, only `dispose`. A sound can be
 * started and stopped only once. To start a new sound, create a new
 * instance of `Sound`. You can however call `setFrequency` and `setGain`
 * multiple times while a sound is playing.
 */
export default class Sound {
  private context: AudioContext;
  private oscillator: OscillatorNode;
  private gainNode: GainNode;
  private hasOscillatorStarted: boolean = false;

  constructor() {
    this.context = new AudioContext();

    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);

    this.oscillator = this.context.createOscillator();
    this.oscillator.connect(this.gainNode);
  }

  /** 0 … ∞ */
  public setFrequency(frequency: number) {
    this.oscillator.frequency.setTargetAtTime(
      frequency,
      this.context.currentTime,
      0.001
    );
  }

  /** 0 … 1 */
  public setGain(gain: number) {
    this.gainNode.gain.setTargetAtTime(gain, this.context.currentTime, 0.001);
  }

  public play() {
    this.oscillator.connect(this.context.destination);
    this.oscillator.start();
    this.hasOscillatorStarted = true;
  }

  public get isPlaying(): boolean {
    return this.hasOscillatorStarted;
  }

  public dispose() {
    if (this.hasOscillatorStarted) {
      this.oscillator.stop(this.context.currentTime);
      this.oscillator.disconnect();
    }
    this.context.close();
  }
}
