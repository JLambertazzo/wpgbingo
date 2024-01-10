const routes = [
    {ids: [1,2,3,4,5], url: 'https://bit.ly/history-r1', dist: "19.33 km"},
    {ids: [6,7,8,9,10], url: 'https://bit.ly/history-r2', dist: "37.8 km"},
    {ids: [11,12,13,14,15], url: 'https://bit.ly/history-r3-fix', dist: "30 km"},
    {ids: [16,17,18,19,20], url: 'https://bit.ly/history-r4', dist: "13.69 km"},
    {ids: [21,22,23,24,25], url: 'https://bit.ly/history-r5', dist: "31.4 km"},
    {ids: [26,27,28,29,30], url: 'https://bit.ly/history-r6', dist: "32.7 km"},
    {ids: [1,6,11,16,21,26], url: 'https://bit.ly/history-c1', dist: "31.4 km"},
    {ids: [2,7,12,17,22,27], url: 'https://bit.ly/history-c2', dist: "28.1 km"},
    {ids: [3,8,13,18,23,28], url: 'https://bit.ly/history-c3', dist: "32.2 km"},
    {ids: [4,9,14,19,24,29], url: 'https://bit.ly/history-c4', dist: "54.3 km"},
    {ids: [5,10,15,20,25,30], url: 'https://bit.ly/history-c5', dist: "33.2 km"},
    {ids: [7,12,8,18,13], url: 'https://bit.ly/history-central-loop', dist: "7.25 km"},
    {ids: [8,16,21,26,27], url: 'https://bit.ly/history-east-loop', dist: "36.5 km"},
    {ids: [1,6,11,17,22,8], url: 'https://bit.ly/history-southeast-loop', dist: "29.8 km"},
    {ids: [14,9,15,20], url: 'https://bit.ly/history-west-loop', dist: "25.7 km"},
    {ids: [28,29,23,8,16,27], url: 'https://bit.ly/history-north-loop', dist: "23.19 km"}
]

const hardcodeRoute = {ids: new Array(30).fill(0).map((_, i) => i + 1), url: 'https://bit.ly/history-hardcore', dist: "142 km"}