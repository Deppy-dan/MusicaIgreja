export interface Song {
  id: number;
  artist: string;
  title: string;
  key: string;
  style: string;
  tempo: number;
  category: string,
  lyrics: string,
  chords: string,
  lastPlayed?: string; // Campo opcional
  timesPlayed?: number; // Campo opcional
}