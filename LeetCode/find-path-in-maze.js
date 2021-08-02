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

// Optimize Function

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

class Position {
    constructor(y, x, distance) {
        this.row = y;
        this.column = x;
        this.distance = distance;
    }
}

const nearestExitOptimize = (maze, entrance) => {
    const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    const [row, col] = [maze.length, maze[0].length];
    const queue = [new Position(entrance[0], entrance[1], 0)]
    maze[entrance[0]][entrance[1]] = '-';
    
    while (queue.length) {
        const dataPoint = queue.shift();

        for (const [dY, dX] of directions) {
            let [newY, newX] = [dataPoint.row + dY, dataPoint.column + dX];
            if (newY >= 0 && newX >= 0 && newY < row && newX < col && maze[newY][newX] === '.') {
                if (newY === 0 || newY === row - 1 || newX === 0 || newX === col - 1) return dataPoint.distance + 1;
                maze[newY][newX] = '-';
                queue.push(new Position(newY, newX, dataPoint.distance + 1));
            }
        }
    }
    return -1;
};

/**
* Rumtime 116 ms(94.44%) / Memory Usage 47.5 MB(92.06%)
*/
