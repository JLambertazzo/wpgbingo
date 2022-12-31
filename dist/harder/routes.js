const routes = [
    {ids: [1,2,3,4,5], url: 'https://bit.ly/wpg-bingo-first-row'},
    {ids: [6,7,8,9,10], url: 'https://bit.ly/wpg-bingo-second-row'},
    {ids: [11,12,13,14,15], url: 'https://bit.ly/wpg-bingo-third-row'},
    {ids: [16,17,18,19,20], url: 'https://bit.ly/wpg-bingo-fourth-row'},
    {ids: [21,22,23,24,25], url: 'https://bit.ly/wpg-bingo-fifth-row'},
    {ids: [1,6,11,16,21], url: 'https://bit.ly/wpg-bingo-first-column'},
    {ids: [2,7,12,17,22], url: 'https://bit.ly/wpg-bingo-second-column'},
    {ids: [3,8,13,18,23], url: 'https://bit.ly/wpg-bingo-third-column'},
    {ids: [4,9,14,19,24], url: 'https://bit.ly/wpg-bingo-fourth-column'},
    {ids: [5,10,15,20,25], url: 'https://bit.ly/wpg-bingo-fifth-column'},
    {ids: [1,7,13,19,25], url: 'https://bit.ly/wpg-bingo-diagonal-left'},
    {ids: [5,9,13,17,21], url: 'https://bit.ly/wpg-bingo-diagonal-right-fixed'},
    {ids: [15], url: 'https://bit.ly/wpg-bingo-west-loop'},
    {ids: [13,22,23], url: 'https://bit.ly/wpg-bingo-north-loop'},
    {ids: [22], url: 'https://bit.ly/wpg-bingo-east-loop'},
    {ids: [2,8,9,11,13], url: 'https://bit.ly/wpg-bingo-south-loop'},
    {ids: [3,5], url: 'https://bit.ly/wpg-bingo-fountain-uni-loop'},
]

const hardcodeRoute = {ids: new Array(25).fill(0).map((_, i) => i + 1), url: 'https://bit.ly/wpg-bingo-hardcore'}