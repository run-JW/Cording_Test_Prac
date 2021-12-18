/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            if (i < s.length - 1) {
                if (s[i + 1] === 'V') {
                    result += 4;
                    i++;
                    continue;
                } else if (s[i + 1] === 'X') {
                    result += 9;
                    i++;
                    continue;
                } else {
                    result += 1;
                    continue;
                }
            } else {
                result += 1;
                continue;
            }
        }

        if (s[i] === 'X') {
            if (i < s.length - 1) {
                if (s[i + 1] === 'L') {
                    result += 40;
                    i++;
                    continue;
                } else if (s[i + 1] === 'C') {
                    result += 90;
                    i++;
                    continue;
                } else {
                    result += 10;
                    continue;
                }

            } else {
                result += 10;
                continue;
            }
        }

        if (s[i] === 'C') {
            if (i < s.length - 1) {
                if (s[i + 1] === 'D') {
                    result += 400;
                    i++;
                    continue;
                } else if (s[i + 1] === 'M') {
                    result += 900;
                    i++;
                    continue;
                } else {
                    result += 100;
                    continue;
                }
            } else {
                result += 100;
                continue;
            }
        }

        if (s[i] === 'V') {
            result += 5;
            continue;
        }

        if (s[i] === 'L') {
            result += 50;
            continue;
        }

        if (s[i] === 'D') {
            result += 500;
            continue;
        }

        if (s[i] === 'M') {
            result += 1000;
        }
    }

    return result;
};
