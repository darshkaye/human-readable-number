module.exports = function toReadable (number) {
    const numbersMap = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    const hundred = "hundred";

    if (number === 0) { return numbersMap[number]; } 

    let result = '';

    if (number >= 100) {
        result += numbersMap[Math.floor(number / 100)] + " " + hundred + " ";
    }

    let hundredChildrenNumber =  number % 100,
        decendChildrenNumber = number % 10;
    if (hundredChildrenNumber > 0) {
        if (hundredChildrenNumber > 0 && hundredChildrenNumber <= 20) {
            result +=  numbersMap[hundredChildrenNumber];
        } else {
            result += numbersMap[(Math.floor(hundredChildrenNumber / 10)) * 10] + " ";

            if (decendChildrenNumber > 0) {
                result += numbersMap[decendChildrenNumber];
            }
        };
    }

    return result.trim();
}
