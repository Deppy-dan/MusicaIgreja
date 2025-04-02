import api from './api';
import { Song } from '@/types/song';


// Mock data for songs
const songs: Song[] = [
  {
    id: 1,
    title: 'Grandioso És Tu',
    artist: 'Stuart K. Hine',
    key: 'D',
    tempo: 80,
    category: 'Adoração',
    lyrics: 'Senhor meu Deus, quando eu maravilhado\nFico a pensar nas obras de Tuas mãos\nO céu azul de estrelas pontilhado\nO Teu poder mostrando a criação\n\nEntão minh\'alma canta a Ti, Senhor\nQuão grande és Tu, quão grande és Tu\nEntão minh\'alma canta a Ti, Senhor\nQuão grande és Tu, quão grande és Tu',
    chords: 'D        G         D\nSenhor meu Deus, quando eu maravilhado\nD       A        D\nFico a pensar nas obras de Tuas mãos\nD      G      D\nO céu azul de estrelas pontilhado\nD        A       D\nO Teu poder mostrando a criação',
    style: "Desconhecido" // Ou qualquer valor válido para `style`
  },
];


// Funções para interação com a API ou mock data
export const getAllSongs = async (): Promise<Song[]> => {
  try {
    const response = await api.get('/songs');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar músicas da API, usando dados mock:', error);
    return songs;
  }
};

export const getSongById = async (id: number): Promise<Song | undefined> => {
  try {
    const response = await api.get(`/songs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar música da API, usando dados mock:', error);
    return songs.find(song => song.id === id);
  }
};

export const createSong = async (song: Omit<Song, 'id'>): Promise<Song> => {
  try {
    const response = await api.post('/songs', song);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar música na API, usando dados mock:', error);
    const newSong = {
      ...song,
      id: songs.length + 1
    };
    songs.push(newSong);
    return newSong;
  }
};

// Função `addSong` que faltava no código
export const addSong = async (song: Song): Promise<Song> => {
  try {
    const response = await api.post('/songs', song);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar música na API, usando dados mock:', error);
    const newSong = { ...song, id: songs.length + 1 };
    songs.push(newSong);
    return newSong;
  }
};

// Função `updateScheduleWithSongs` adicionada
export const updateScheduleWithSongs = async (scheduleId: number, songIds: number[]): Promise<void> => {
  try {
    const response = await api.put(`/schedules/${scheduleId}/songs`, { songs: songIds });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar o cronograma com as músicas na API:', error);
    throw error;
  }
};

export const updateSong = async (id: number, updates: Partial<Song>): Promise<Song> => {
  try {
    const response = await api.put(`/songs/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar música na API, usando dados mock:', error);
    const index = songs.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Música não encontrada');
    songs[index] = { ...songs[index], ...updates };
    return songs[index];
  }
};

export const deleteSong = async (id: number): Promise<void> => {
  try {
    await api.delete(`/songs/${id}`);
  } catch (error) {
    console.error('Erro ao excluir música na API, usando dados mock:', error);
    const index = songs.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Música não encontrada');
    songs.splice(index, 1);
  }
};