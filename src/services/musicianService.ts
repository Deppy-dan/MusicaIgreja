import { Musician } from '@/types/musician';

// Lista de músicos simulada
const musicians: Musician[] = [
  {
    id: 1, // Adicione o ID
    name: 'João Silva', // Adicione o campo de nome também, conforme definido na interface Musician
    email: 'joao.silva@example.com',
    phone: '(11) 98765-4321',
    instruments: ['Guitarra', 'Violão'],
    availability: [
      { day: 'Segunda', period: 'Noite' },
      { day: 'Quarta', period: 'Noite' },
      { day: 'Sexta', period: 'Noite' },
    ],
    skillLevel: 'Avançado',
    joined: '2022-01-15',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    email: 'maria.oliveira@example.com',
    phone: '(11) 91234-5678',
    instruments: ['Piano', 'Teclado'],
    availability: [
      { day: 'Terça', period: 'Noite' },
      { day: 'Quinta', period: 'Noite' },
      { day: 'Sábado', period: 'Tarde' },
    ],
    skillLevel: 'Intermediário',
    joined: '2022-03-10',
  },
  {
    id: 3,
    name: 'Pedro Santos',
    email: 'pedro.santos@example.com',
    phone: '(11) 99876-5432',
    instruments: ['Bateria'],
    availability: [
      { day: 'Segunda', period: 'Noite' },
      { day: 'Quinta', period: 'Noite' },
      { day: 'Domingo', period: 'Manhã' },
    ],
    skillLevel: 'Avançado',
    joined: '2021-11-20',
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana.costa@example.com',
    phone: '(11) 98765-1234',
    instruments: ['Baixo', 'Contrabaixo'],
    availability: [
      { day: 'Quarta', period: 'Noite' },
      { day: 'Sexta', period: 'Noite' },
      { day: 'Sábado', period: 'Tarde' },
    ],
    skillLevel: 'Intermediário',
    joined: '2022-02-05',
  },
];

// Função para buscar músico pelo ID do usuário
export function getMusicianByUserId(userId: number): Musician | null {
  // Logicamente associando um userId a um índice da lista.
  // Este é apenas um exemplo e deve ser ajustado com base no sistema real.
  const musician = musicians[userId] || null;
  return musician;
}

// Função para obter todos os músicos
export function getAllMusicians(): Musician[] {
  return musicians; // Retorna a lista de músicos simulada
}

// Exportação padrão da lista de músicos
export default musicians;