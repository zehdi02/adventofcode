// Day started: 12/21/2024, 10:10 PM

// Pair up the smallest number in the left list with the smallest number in the right list
// then the second-smallest left number with the second-smallest right number, and so on.

// Within each pair, figure out how far apart the two numbers are;
// you'll need to add up all of those distances.

// For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4;
// if you pair up a 9 with a 3, the distance apart is 6.

// To find the total distance between the left list and the right list,
// add up the distances between all of the pairs you found.

/* ====================================================================== */

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

    let min1 = 0;
    let min2 = 0;
    let left_index = 0;
    let right_index = 0;
    let distance = 0;
    let distances = [];

    while (left_list.length > 0) {
        min1 = Math.min(...left_list);
        min2 = Math.min(...right_list);

        distance = Math.abs(min1 - min2);
        distances.push(distance);

        // now, we need to remove both left and right elements that were taken account for.
        left_index = left_list.indexOf(min1);
        right_index = right_list.indexOf(min2);

        left_list.splice(left_index, 1);
        right_list.splice(right_index, 1);
    }

    let sum = distances.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    console.log(sum);
});
