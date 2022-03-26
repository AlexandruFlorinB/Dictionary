let arrayWord = ["\0"]
function isWord() {
    let word = document.getElementById("word_box").value
    for (let index = 0; index < arrayWord.length; ++index) {
        if (arrayWord[index] === word && (word)) {
            document.getElementById("search").value = "The word is in Dictionary"
            index = arrayWord.length
        } else if (index === arrayWord.length - 1) {
            document.getElementById("search").value = "The word is not in Dictionary"
        }
    }
    arrayWord.push(word)
    document.getElementById("word_box").value = ""
}