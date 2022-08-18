const nextPermutation = (arr = []) => {
    let i = arr.length - 2;
    while(arr[i + 1] <= arr[i]) {
        i--;
    }
    if(i >= 0) {
        let j = arr.length - 1;
        while(arr[j] <= arr[i]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    reverse(arr, i + 1);
    return arr;
}

const reverse = (arr, start) => {
    let end = arr.length - 1;
    while(start < end) {
        [arr[start], arr[end]]= [arr[end], arr[start]];
        start++;
        end--;
    }
}