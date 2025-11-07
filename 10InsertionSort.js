const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
};

const arr = [1, 3, 14, 2, 22, 11, 5, 43, 100];
console.log(insertionSort(arr));