const solution = letter => {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--",
                       "-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    return letter.split(' ').reduce((acc, char) => acc + String.fromCharCode(morseCode.indexOf(char) + 97), '')
}