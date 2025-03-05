function maxKelements(nums: number[], k: number): number {
    const pq = new MaxPriorityQueue();

    for (const num of nums) pq.enqueue(num)

    let score = 0

    for (let i = 0; i < k; i++) {
        const maxNum = pq.dequeue()
