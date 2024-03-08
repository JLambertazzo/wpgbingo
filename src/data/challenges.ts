import type { tChallenge } from '@/types';
import { default as easierCards } from './easier/cards';
import { default as easierRoutes } from './easier/routes';
import { default as harderCards } from './harder/cards';
import { default as harderRoutes } from './harder/routes';
import { default as historyCards } from './history/cards';
import { default as historyRoutes } from './history/routes';

export const challenges: tChallenge[] = [
  {
    id: 'easier',
    name: 'Easier',
    cards: easierCards,
    routes: easierRoutes,
  },
  {
    id: 'harder',
    name: 'Harder',
    cards: harderCards,
    routes: harderRoutes,
  },
  {
    id: 'history',
    name: 'History Tour',
    cards: historyCards,
    routes: historyRoutes,
  },
];
