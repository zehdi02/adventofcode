/* 
Here are the same example lists again:
3   4
4   3
2   5
1   3
3   9
3   3

For these example lists, here is the process of finding the similarity score:
    The first number in the left list is 3. It appears in the right list three times, so the similarity score increases by 3 * 3 = 9.
    The second number in the left list is 4. It appears in the right list once, so the similarity score increases by 4 * 1 = 4.
    The third number in the left list is 2. It does not appear in the right list, so the similarity score does not increase (2 * 0 = 0).
    The fourth number, 1, also does not appear in the right list.
    The fifth number, 3, appears in the right list three times; the similarity score increases by 9.
    The last number, 3, appears in the right list three times; the similarity score again increases by 9.
    So, for these example lists, the similarity score at the end of this process is 31 (9 + 4 + 0 + 0 + 9 + 9). 
*/

let left_list = [];
let right_list = [];

const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    let lines = data.trim().split("\n");

    lines.forEach((line) => {
        let [left, right] = line.trim().split(/\s+/).map(Number);
        left_list.push(left);
        right_list.push(right);
    });

    let similarity_score = 0;
    let similarity_scores = [];

    for (let i=0; i<left_list.length; i++) {
        let left_value = left_list[i];
        let right_founded = right_list.filter(e => e === left_value);
        let right_occurences = right_founded.length;

        similarity_score = left_value * right_occurences;
        similarity_scores.push(similarity_score);
    }

    let sum = similarity_scores.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    console.log(sum);
});
