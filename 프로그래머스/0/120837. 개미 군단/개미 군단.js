const solution = hp => {
    let generalAnts = 0
    let soldierAnts = 0
    let workerAnts = 0
    let leftHP = hp
    
    generalAnts += Math.trunc(leftHP / 5)
    leftHP -= generalAnts * 5
    soldierAnts = Math.trunc(leftHP / 3)
    leftHP -= soldierAnts * 3
    workerAnts = Math.trunc(leftHP / 1)
    
    return generalAnts + soldierAnts + workerAnts
}