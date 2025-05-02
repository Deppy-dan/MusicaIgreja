
import { Song } from './song.ts';

export interface ScheduleMusician extends Musician {
  musicianId: number;
  instrument: string;
  confirmed: boolean;
}

export interface ScheduleMusician {
  
}

export interface Schedule {
  id: number;
  title: string;
  date: string;
  time: string;
  description?: string;
  location: string;
  musicians: ScheduleMusician[];
  songs: Song[];
}
