    for (let i = 0; i < str.length; i++) {
        if (str[i] != '9') {
            first += str[i]
            break
        }
    }
    let num1 = Number(str.replaceAll(first===''?'0':first, 9))
    let num2 = Number(str.replaceAll(str[0], 0))
    console.log(num1,num2)
    return num1 - num2
};
