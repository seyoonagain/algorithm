function solution(progresses, speeds) {
    const completeDays = progresses.map((percentage, idx) => Math.ceil((100 - percentage) / speeds[idx]))
    let releaseDay = completeDays[0]
    const releaseFn = []
    let countFn = 0
    completeDays.forEach((day, idx) => {
        if(releaseDay >= day) countFn++
        else {
            releaseFn.push(countFn)
            countFn = 1
            releaseDay = day
        }
        if(idx === completeDays.length - 1) releaseFn.push(countFn)
    })
    return releaseFn
}