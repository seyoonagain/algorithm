function solution(board, moves) {
    const cols = Array(board.length).fill(Array(0))
    cols.forEach((col, idx) => cols[idx] = board.map(arr => arr[idx])
                                                .reverse()
                                                .filter(num => num !== 0))
    const indexInOrder = moves.map(colNum => colNum - 1)
    const basket = []
    let burstCount = 0
    indexInOrder.forEach(index => {
        const pickedDoll = cols[index].pop() 
        if(basket[basket.length - 1] === pickedDoll && pickedDoll !== undefined) {
            basket.pop()
            burstCount += 2
        }
        else basket.push(pickedDoll)
    })
    return burstCount
}