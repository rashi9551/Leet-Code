    let total = 0
    let firstPair = x > y ? 'ab' : 'ba';

    total += helper(firstPair, Math.max(x, y))
    total += helper(firstPair.split('').reverse().join(''), Math.min(x, y))
    return total
};

