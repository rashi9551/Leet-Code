        vertexMap.get(start).push(end);
        vertexMap.get(end).push(start);
    }

    const queue = [source];
    const visited = new Set(queue);

    while (queue.length > 0) {
        const vertex = queue.shift();
        if (vertex === destination) return true;

        const neighbors = vertexMap.get(vertex) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
        if (!vertexMap.has(end)) vertexMap.set(end, []);
        if (!vertexMap.has(start)) vertexMap.set(start, []);
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }

    return false;
};

3
