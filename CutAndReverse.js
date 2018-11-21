function solve(text) {
    let firstSubstring = text.substring(0, text.length / 2);
    let secondSubstring = text.substring(text.length / 2);

    console.log([...firstSubstring].reverse().join(''));
    console.log([...secondSubstring].reverse().join(''));
}