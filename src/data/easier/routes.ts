import type { tRoute } from '@/types';

const routes: tRoute[] = [
  { id: 'r1', cards: ['a1', 'b1', 'c1', 'd1', 'e1'], url: 'https://t.ly/pGrv', dist: 30.3 },
  { id: 'r2', cards: ['a2', 'b2', 'c2', 'd2', 'e2'], url: 'https://t.ly/fyJB', dist: 24.4 },
  { id: 'r3', cards: ['a3', 'b3', 'c3', 'd3', 'e3'], url: 'https://t.ly/R2AH7', dist: 14.6 },
  { id: 'r4', cards: ['a4', 'b4', 'c4', 'd4', 'e4'], url: 'https://t.ly/OQl7', dist: 27.1 },
  { id: 'r5', cards: ['a5', 'b5', 'c5', 'd5', 'e5'], url: 'https://t.ly/3l1w', dist: 41.9 },
  { id: 'c1', cards: ['a1', 'a2', 'a3', 'a4', 'a5'], url: 'https://t.ly/5bsF', dist: 30.2 },
  { id: 'c2', cards: ['b1', 'b2', 'b3', 'b4', 'b5'], url: 'https://t.ly/YgcA', dist: 24.7 },
  { id: 'c3', cards: ['c1', 'c2', 'c3', 'c4', 'c5'], url: 'https://t.ly/PNBp', dist: 24.4 },
  { id: 'c4', cards: ['d1', 'd2', 'd3', 'd4', 'd5'], url: 'https://t.ly/4scx', dist: 26.0 },
  { id: 'c5', cards: ['e1', 'e2', 'e3', 'e4', 'e5'], url: 'https://t.ly/a2uY', dist: 25.8 },
  { id: 'd1', cards: ['a1', 'b2', 'c3', 'd4', 'e5'], url: 'https://t.ly/n0uj', dist: 34.2 },
  { id: 'd2', cards: ['e1', 'd2', 'c3', 'b4', 'a5'], url: 'https://t.ly/yRjz', dist: 26.4 },
  {
    id: 'n1',
    button: 'N',
    name: 'North Loop',
    cards: ['a1', 'b1', 'c1', 'a2', 'c2', 'a3', 'b3', 'c3'],
    url: 'https://t.ly/sHLy',
    dist: 34.9,
  },
  {
    id: 'n2',
    button: 'W',
    name: 'West Loop',
    cards: ['c1', 'd1', 'e1', 'c2', 'e2', 'c3', 'd3', 'e3'],
    url: 'https://t.ly/erR8',
    dist: 52.1,
  },
  {
    id: 'n3',
    button: 'S',
    name: 'South Loop',
    cards: ['a3', 'b3', 'c3', 'a4', 'c4', 'a5', 'b5', 'c5'],
    url: 'https://t.ly/LhWq',
    dist: 31.4,
  },
  {
    id: 'n4',
    button: 'E',
    name: 'East Loop',
    cards: ['c3', 'd3', 'e3', 'c4', 'e4', 'c5', 'd5', 'e5'],
    url: 'https://t.ly/G4FH',
    dist: 37.3,
  },
  {
    id: 'hc',
    button: 'Hardcore',
    name: 'Hardcore',
    cards: ['*'],
    url: 'https://bit.ly/wpg-bingo-hardcore-easier',
    dist: 131,
  },
];

export default routes;
