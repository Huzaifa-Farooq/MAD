const str = "comsats University Islamabad";
const str2 = "  Huzaifa  ";

console.log(`original strings. str: ${str} str2: ${str2}`);

console.log("Length:", str.length);
console.log("Char at 1:", str.charAt(1));
console.log("Char code at 1:", str.charCodeAt(1));
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Trim:", str.trim());
console.log("str.trimStart:", str.trimStart());
console.log("str.trimEnd:", str.trimEnd());
console.log("Index of i:", str.indexOf("i"));
console.log("Last index of i:", str.lastIndexOf("i"));
console.log("Includes pakistan:", str.includes("pakistan"));
console.log("Includes comsats:", str.includes("comsats"));
console.log("Starts with Comsats:", str.startsWith("Comsats"));
console.log("Ends with car:", str.endsWith("car"));
console.log("Slice(3,6):", str.slice(3,6));
console.log("Substring(3,6):", str.substring(3,6));
console.log("Split:", str2.split(" "));
console.log("Replace Islamabad with ISB:", str.replace("Islamabad", "ISB"));
console.log("Replace All i with z :", str.replaceAll("i", "z"));
console.log("repeat 2 times:", str.repeat(2));
console.log("str.padStart:", str.padStart(20, ""));
console.log("str.padEnd:", str.padEnd(20, "-"));
console.log("Search Word Ali:", str.search("Ali"));
console.log("Compare str and str2:", str.localeCompare(str2));
console.log("str.valueOf:", str.valueOf());
console.log("str.toString:", str.toString());


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ["ali", "ahmed", "abdullah"];

console.log(`original arrays. arr: ${arr} arr2: ${arr2}`);
console.log("Concat:", arr.concat(arr2));
console.log("CopyWithin(0, 3, 5):", arr.copyWithin(0, 3, 5));
console.log("Fill(0, 3, 5):", arr.fill(0, 3, 5));
console.log("Slice(3, 6):", arr.slice(3, 6));
console.log("Pop:", arr.pop(), arr);
console.log("Push(11, 12):", arr.push(11, 12), arr);
console.log("Flat:", [1, 2, [3, 4]].flat());
console.log("Sort:", arr2.sort());
console.log("Reverse:", arr2.reverse());
console.log("Index of 5:", arr.indexOf(5));
console.log("Last Index of 5:", arr.lastIndexOf(5));
console.log("Includes 5:", arr.includes(5));
console.log("Join:", arr2.join("-"));
console.log("toString:", arr.toString());
function square(x) {
  return x * x;
}
function is_even(x) {
  return x % 2 === 0;
}
function sum(x, y) {
  return x + y;
}
console.log("map", arr.map(square));
console.log("filter", arr.filter(is_even));
console.log("reduce", arr.reduce(sum, 0));

