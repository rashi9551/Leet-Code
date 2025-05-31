        const map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
    for (let i = 0; i < points.length; i++) {


            const dx = points[i][0] - points[j][0];
            const dy = points[i][1] - points[j][1];
            const dist = dx * dx + dy * dy;

            map.set(dist, (map.get(dist) || 0) + 1);
        }
        console.log(map)

        for (const count of map.values()) {
            result += count * (count - 1);
        }
    }

