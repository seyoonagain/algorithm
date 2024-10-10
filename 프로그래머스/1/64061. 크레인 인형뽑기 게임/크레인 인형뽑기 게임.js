function solution(rows, moves) {
    const cols = Array(rows.length).fill(Array(0))
    cols.forEach((col, idx) => cols[idx] = rows.map(row => row[idx])
                                                .reverse()
                                                .filter(num => num !== 0))
    const indexInOrder = moves.map(colNum => colNum - 1)
    const basket = []
    let burstCount = 0
    indexInOrder.forEach(index => {
        const pickedDoll = cols[index].pop() 
        if(basket.at(-1) === pickedDoll && pickedDoll !== undefined) {
            basket.pop()
            burstCount += 2
        }
        else basket.push(pickedDoll)
    })
    return burstCount
}