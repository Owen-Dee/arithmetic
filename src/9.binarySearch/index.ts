function binarySearch(arrs: number[], target: number) {
    if (!arrs || arrs.length === 0) {
        return -1;
    }
    let left = 0;
    let right = arrs.length - 1;
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target > arrs[middle]) {
            left = middle + 1;
        } else if (target < arrs[middle]) {
            right = middle -1;
        } else {
            return middle;
        }
    }

    return -1;
}

export {
    binarySearch
}