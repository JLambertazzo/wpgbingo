import type { tRoute } from '@/types';

const routes: tRoute[] = [
  { id: 'r1', cards: ['a1', 'b1', 'c1', 'd1', 'e1'], url: 'https://bit.ly/history-r1', dist: 19.3 },
  { id: 'r2', cards: ['a2', 'b2', 'c2', 'd2', 'e2'], url: 'https://bit.ly/history-r2', dist: 37.8 },
  { id: 'r3', cards: ['a3', 'b3', 'c3', 'd3', 'e3'], url: 'https://bit.ly/history-r3-fix', dist: 30 },
  { id: 'r4', cards: ['a4', 'b4', 'c4', 'd4', 'e4'], url: 'https://bit.ly/history-r4', dist: 13.7 },
  { id: 'r5', cards: ['a5', 'b5', 'c5', 'd5', 'e5'], url: 'https://bit.ly/history-r5', dist: 31.4 },
  { id: 'r6', cards: ['a6', 'b6', 'c6', 'd6', 'e6'], url: 'https://bit.ly/history-r6', dist: 32.7 },
  {
    id: 'c1',
    cards: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
    url: 'https://bit.ly/history-c1',
    dist: 31.4,
  },
  {
    id: 'c2',
    cards: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'],
    url: 'https://bit.ly/history-c2',
    dist: 28.1,
  },
  {
    id: 'c3',
    cards: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'],
    url: 'https://bit.ly/history-c3',
    dist: 32.2,
  },
  {
    id: 'c4',
    cards: ['d1', 'd2', 'd3', 'c4', 'd5', 'd6'],
    url: 'https://bit.ly/history-c4',
    dist: 54.3,
  },
  {
    id: 'c5',
    cards: ['e1', 'e2', 'e3', 'e4', 'e5', 'e6'],
    url: 'https://bit.ly/history-c5',
    dist: 33.2,
  },
  {
    id: 'n1',
    button: 'N',
    name: 'North Loop',
    cards: ['c6', 'd6', 'c5', 'c2', 'a4', 'b6'],
    url: 'https://bit.ly/history-north-loop',
    dist: 23.2,
  },
  {
    id: 'n2',
    button: 'W',
    name: 'West Loop',
    cards: ['d3', 'd2', 'e3', 'e4'],
    url: 'https://bit.ly/history-west-loop',
    dist: 25.7,
  },
  {
    id: 'n3',
    button: 'SE',
    name: 'Southeast Loop',
    cards: ['a1', 'a2', 'a3', 'b4', 'b5', 'c2'],
    url: 'https://bit.ly/history-southeast-loop',
    dist: 29.8,
  },
  {
    id: 'n4',
    button: 'E',
    name: 'East Loop',
    cards: ['c2', 'a4', 'a5', 'a6', 'b6'],
    url: 'https://bit.ly/history-east-loop',
    dist: 36.5,
  },
  {
    id: 'n5',
    button: 'C',
    name: 'Central Loop',
    cards: ['b2', 'b3', 'c2', 'c3', 'c4'],
    url: 'https://bit.ly/history-central-loop',
    dist: 7.3,
  },
  {
    id: 'hc',
    button: 'Hardcore',
    name: 'Hardcore',
    cards: ['*'],
    url: 'https://bit.ly/history-hardcore',
    dist: 142,
  },
];

export default routes;