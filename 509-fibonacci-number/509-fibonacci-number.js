const fib = (n) => {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    let starter = [0,1]
    for (let i = 1; i < n; i++){
        starter.push(starter[i] + starter[i-1])
    }
    return starter[starter.length-1]
}