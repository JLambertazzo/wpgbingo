import { cChallengeIds, cColumns, cColumnsNumeric, cNamedRoutes, cRows } from './constants';

export type tChallengeId = (typeof cChallengeIds)[number];

type tCardIdColumn = (typeof cColumns)[number];
type tCardIdRow = (typeof cRows)[number];

export type tCardId = `${tCardIdColumn}${tCardIdRow}` | '*';

type tCardIdColumnNumeric = (typeof cColumnsNumeric)[number];
type tRouteNamesNumeric = (typeof cNamedRoutes)[number];

type tRouteIdRows = `r${tCardIdRow}`;
type tRouteIdColumns = `c${tCardIdColumnNumeric}`;
type tRouteIdDiagonals = 'd1' | 'd2';
type tRouteIdNamed = `n${tRouteNamesNumeric}`;
type tRouteIdHardcore = 'hc';

export type tRouteId = tRouteIdRows | tRouteIdColumns | tRouteIdDiagonals | tRouteIdNamed | tRouteIdHardcore;

export type tCard = {
  id: tCardId;
  name: string;
  desc: string;
  img: string;
  lat?: number; // for future mapping feature?
  lon?: number; // for future mapping feature?
};

export type tRoute = {
  id: tRouteId;
  button?: string; // only if a button is required
  name?: string; // only if a button is required
  cards: tCardId[];
  url: string;
  dist: number;
};

export type tChallenge = {
  id: tChallengeId;
  name: string;
  cards: tCard[];
  routes: tRoute[];
};

export type tWallEntry = {
  name: string;
  date: string;
  img: string;
  url: string;
};

export type tWall = Record<tChallengeId, tWallEntry[]>;
