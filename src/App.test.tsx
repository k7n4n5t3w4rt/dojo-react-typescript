
import { toggleLetters } from "./Toggle";
import { findAllPermutations } from "./Permutations";

it("should toggle letters", () => {
  let result = toggleLetters("AB".split(""), 0, 1);
  expect(result).toEqual("BA");
});

it("should fine all permutations", () => {
  let result = findAllPermutations("AB");
  expect(result).toEqual(["AB", "BA"]);
});

// it("should display anagrams of given input", () => {
//   const { getByText, getByLabelText } = render(<App />);
//   const nameInput = getByLabelText(/name/i);
//   fireEvent.change(nameInput, { target: { value: "ab" } });
//   fireEvent.click(getByText(/submit/i));
//   const expectedAnagrams = ["ab", "ba"];
//   expectedAnagrams.forEach((anagram) => {
//     expect(document.body.innerHTML).toMatch(anagram);
//   });
// });

// it("should display anagrams of a different input", () => {
//   const { getByText, getByLabelText } = render(<App />);
//   const nameInput = getByLabelText(/name/i);
//   fireEvent.change(nameInput, { target: { value: "cd" } });
//   fireEvent.click(getByText(/submit/i));
//   const expectedAnagrams = ["cd", "dc"];
//   expectedAnagrams.forEach((anagram) => {
//     expect(document.body.innerHTML).toMatch(anagram);
//   });
// });

// it("should display anagrams of a third input", () => {
//   const { getByText, getByLabelText } = render(<App />);
//   const nameInput = getByLabelText(/name/i);
//   fireEvent.change(nameInput, { target: { value: "xy" } });
//   fireEvent.click(getByText(/submit/i));
//   const expectedAnagrams = ["xy", "yx"];
//   expectedAnagrams.forEach((anagram) => {
//     expect(document.body.innerHTML).toMatch(anagram);
//   });
// });
// it("should display anagrams with more than two letters", () => {
//   const { getByText, getByLabelText } = render(<App />);
//   const nameInput = getByLabelText(/name/i);
//   fireEvent.change(nameInput, { target: { value: "xyz" } });
//   fireEvent.click(getByText(/submit/i));
//   const expectedAnagrams = ["xyz", "yxz", "yzx", "zyx", "zxy"];
//   expectedAnagrams.forEach((anagram) => {
//     expect(document.body.innerHTML).toMatch(anagram);
//   });
// });