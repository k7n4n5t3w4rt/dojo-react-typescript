export const toggleLetters = (arr, index1, index2) => {
  if (index1 !== index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  return arr.join("");
};