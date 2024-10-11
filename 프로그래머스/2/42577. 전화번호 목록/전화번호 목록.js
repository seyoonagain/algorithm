function solution(phoneBook) {
    phoneBook.sort()
    for(let i = 0; i < phoneBook.length - 1; i++) {
        const prefix = phoneBook[i]
        const phoneNumber = phoneBook[i + 1]
        if (phoneNumber.startsWith(prefix)) return false
    }
    return true
}