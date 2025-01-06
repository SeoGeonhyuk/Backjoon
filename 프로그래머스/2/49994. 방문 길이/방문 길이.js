function solution(dirs) {
    var impossibleCount = 0;
    const roadSet = new Set();
    const MAX_MAP_LENGTH = 5;
    let x = 0;
    let y = 0;
    for(let i = 0; i < dirs.length; i++){
        const dir = dirs[i];
        if(dir === "U" && y + 1 <= MAX_MAP_LENGTH) {
            roadSet.add(`${x},${y}to${x},${y + 1}`);
            roadSet.add(`${x},${y + 1}to${x},${y}`);
            y += 1;
        }
        else if(dir === "D" && y - 1 >= -1 * MAX_MAP_LENGTH) {
            roadSet.add(`${x},${y}to${x},${y - 1}`);
            roadSet.add(`${x},${y - 1}to${x},${y}`);
            y -= 1;
        }
        else if(dir === "R" && x + 1 <= MAX_MAP_LENGTH) {
            roadSet.add(`${x},${y}to${x + 1},${y}`);
            roadSet.add(`${x + 1},${y}to${x},${y}`);
            x += 1;
        }
        else if(dir === "L" && x - 1 >= -1 * MAX_MAP_LENGTH) {
            roadSet.add(`${x},${y}to${x - 1},${y}`);
            roadSet.add(`${x - 1},${y}to${x},${y}`);
            x -= 1;
        }
        else {
            impossibleCount += 1;
        }
    }

    return (dirs.length - impossibleCount) - ((dirs.length - impossibleCount) - roadSet.size / 2);
}