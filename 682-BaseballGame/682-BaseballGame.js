            arr.pop()
        } else if (operations[i] === '+') {
            arr.push(arr[l - 2] + arr[l - 1])
        }
        else {
            arr.push(Number(operations[i]))
        }
    }
    return arr.reduce((acc,curr)=>{return acc+curr},0)
};
