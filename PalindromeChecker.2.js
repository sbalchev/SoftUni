function solve(input) {

    let palindromes = [];

    for (let word of input) {
        let newWord = word.split(' ').join('');
        if (isPalindrome(newWord)) {
            palindromes.push(newWord);
        }
    }

    if (palindromes.length > 0) {

        console.log(palindromes.join(', '));
    } else {
        console.log('No palindromes found')
    }

    function isPalindrome(word) {
        let reversedString = word

            .replace(/\s+/g, '')
            .split('')
            .reverse()
            .join('');

        return reversedString === word;

    }
}

