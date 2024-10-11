function solution(keymap, targets) {
    return targets.map(target => {
        const splitTarget = target.split('')
        let keypressTimes = 0
        for (let i = 0; i < splitTarget.length; i++) {
            let keyIndex = []
            keymap.forEach(key => keyIndex.push(key.indexOf(splitTarget[i])))
            keyIndex = keyIndex.filter(times => times !== -1)
            if (keyIndex.length === 0) return -1
            keypressTimes += Math.min(...keyIndex) + 1
        }
        return keypressTimes
    })
}