let wordArray = ["\0"]
function isWord() {
    let word = document.getElementById("word_box").value
    for (let index = 0; index < wordArray.length; ++index) {
        if (wordArray[index] === word && (word)) {
            document.getElementById("search").value = "The word is in Dictionary"
            index = wordArray.length
        } else if (index === wordArray.length - 1) {
            document.getElementById("search").value = "The word is not in Dictionary"
        }
    }
    wordArray.push(word)
    document.getElementById("word_box").value = ""
}
