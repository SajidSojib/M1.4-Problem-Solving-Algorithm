/**
 * * Selection Sort
 * * Selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.
 * * Time Complexity: O(n^2)
 */


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            // let temp = arr[i];
            // arr[i] = arr[min];
            // arr[min] = temp;

            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));