
        map.get(rod).add(color);
    }

    let count = 0;

    for (let colors of map.values()) {
        if (colors.has('R') && colors.has('G') && colors.has('B')) {
            count++;
        }
    }
        }
            map.set(rod, new Set());
