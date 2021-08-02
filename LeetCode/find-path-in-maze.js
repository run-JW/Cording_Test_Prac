/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = (maze, entrance) => {
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    const row = maze.length;
    const col = maze[0].length;
    const lenMap = [...maze].map(r => r.map(c => -1));
    const queue = [entrance];
    lenMap[entrance[0]][entrance[1]] = 0;

    console.log(lenMap);
    while (queue.length) {
        const [y, x] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
                if (maze[ny][nx] === "." && lenMap[ny][nx] === -1) {
                    lenMap[ny][nx] = lenMap[y][x] + 1;
                    if (ny === 0 || nx === 0 || ny === row - 1 || nx === col - 1) return lenMap[ny][nx];
                    queue.push([ny, nx]);
                }
            }
        }
    }
    return -1;
};

/**
* Runtime : 292 ms(6.35%) / Memory Usage: 51.6 MB(28.57%)
*/
