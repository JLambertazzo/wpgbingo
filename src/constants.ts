// challenge ids (used in routing and object keys)
export const cChallengeIds = ['easier', 'harder', 'history'] as const;

// maximum 5 columns in grid
export const cColumns = ['a', 'b', 'c', 'd', 'e'] as const;
export const cColumnsNumeric = [1, 2, 3, 4, 5] as const;

// maximum 6 rows in grid (normally 5, but oh well)
export const cRows = [1, 2, 3, 4, 5, 6] as const;

// maximum 10 named routes that aren't rows/columns/diagonals
// (e.g. loops and hardcore)
export const cNamedRoutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export const cRoutePrefixes = ['r', 'c', 'd', 'l'] as const;
