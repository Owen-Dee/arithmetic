/**
 * 给你一个字符串 s，找到 s 中最长的回文子串
    输入：s = "babad"
    输出："bab"
    解释："aba" 同样是符合题意的答案。
 */

function palindrome(str: string) {
    if(!str || str.length === 0) {
        return;
    }

    let res = '';               // 回文字符
    let tempStr = '';           // 临时字符串
    let count = 0;
    let length = str.length;    // 初始字符串的长度
    let pStr = str;             // 用于处理回文字符串
    while(count < length) {
        for (let i = 0; i < pStr.length; i++) {
            tempStr = tempStr + pStr[i];
            if (tempStr === tempStr.split('').reverse().join('') && tempStr.length > res.length) {
                res = tempStr;
            }
        }

        count++;
        tempStr = '';
        pStr = str.substring(count, length);
    }

    return res;
}

export {
    palindrome
}