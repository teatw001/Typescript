// function showStringData(a: string): string {
//     return a
// }
// function showNumberData(b: number): number {
//     return b
// }
// // Generic
// function showData<T>(a: T): T {
//     return a
// }
// showData<number>(10)
// Hàm Sort
const numArr = [1, 2, 9, 5, 8, 13]
const strArr = ["Hoa", "Duy", "Vu Anh"]

function we17305Sort<T>(arr: T[], callback: (item1: T & (string | number), item2: T & (string | number)) => number): T[] {
    let c;
    for (let i = 0; i < arr.length - 1; i++) {
        c = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (callback(arr[j] as T & (string | number), arr[c] as T & (string | number)) < 0) {
                c = j;
            }
        }
        if (c !== i) {
            let temp = arr[i];
            arr[i] = arr[c];
            arr[c] = temp;
        }
    }
    return arr;
}
we17305Sort(strArr, (a, b) => b.length - a.length);
console.log(strArr);
we17305Sort(numArr, (a, b) => b - a)
console.log(numArr);


