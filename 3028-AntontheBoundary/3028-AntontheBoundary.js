    for (let step of nums) {
        position += step;

        if (position === 0) {
            boundaryCount++;
        }
    }

    return boundaryCount;
};
