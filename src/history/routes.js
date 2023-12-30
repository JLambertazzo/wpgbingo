const routes = [
    {ids: [1,2,3,4,5], url: 'https://bit.ly/history-r1'},
    {ids: [6,7,8,9,10], url: 'https://bit.ly/history-r2'},
    {ids: [11,12,13,14,15], url: 'https://bit.ly/history-r3'},
    {ids: [16,17,18,19,20], url: 'https://bit.ly/history-r4'},
    {ids: [21,22,23,24,25], url: 'https://bit.ly/history-r5'},
    {ids: [26,27,28,29,30], url: 'https://bit.ly/history-r6'},
    {ids: [1,6,11,16,21,26], url: 'https://bit.ly/history-c1'},
    {ids: [2,7,12,17,22,27], url: 'https://bit.ly/history-c2'},
    {ids: [3,8,13,18,23,28], url: 'https://bit.ly/history-c3'},
    {ids: [4,9,14,19,24,29], url: 'https://bit.ly/history-c4'},
    {ids: [5,10,15,20,25,30], url: 'https://bit.ly/history-c5'},
    {ids: [7,12,8,18,13], url: 'https://bit.ly/history-central-loop'},
    {ids: [8,16,21,26,27], url: 'https://bit.ly/history-east-loop'},
    {ids: [1,6,11,17,22,8], url: 'https://bit.ly/history-southeast-loop'},
    {ids: [14,9,15,20], url: 'https://bit.ly/history-west-loop'},
    {ids: [28,29,23,8,16,27], url: 'https://bit.ly/history-north-loop'}
]

const hardcodeRoute = {ids: new Array(30).fill(0).map((_, i) => i + 1), url: 'https://bit.ly/history-hardcore'}