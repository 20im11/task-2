"use strict";

// task 1

let a = 5;
while (a < 101) {
  console.log(a);
  a++;
}

// task 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 21];
for (let result of array1) {
  if (result > 0 && result < 10) {
    console.log(result);
  }
}
// task 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let resultN of array2) {
  if (resultN == 5) {
    console.log("არის");
    break;
  }
}

// task 4
let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array3.length; i++) {
  sum += array3[i];
}
console.log(sum);

// task 5
let array4 = [1, 2, 3, 7, 6, 9];
let sum2 = 0;
for (let i = 0; i < array4.length; i++) {
  sum2 += array4[i];
}
console.log(sum2 / array4.length);

// task 6
let array5 = [1, 2, 3, 7, 6, 9];
for (let numbers of array5) {
  if (numbers == 7) {
    continue;
  }
  console.log(numbers);
}

// task 7
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user.studentstatus);

// task 8
let user2 = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};
if (user2.age < 18) {
  console.log("hello");
} else if (user2.name == "Levan") {
  console.log("Hello Levan");
} else if (user2.studentstatus == "active" && user2.age < 25) {
  console.log("Hello world");
} else {
  console.log("error");
}
// // task 9

let array6 = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];
for (let a = 0; a < array6.length; a++) {
  for (let b = 0; b < array6[a].length; b++) {
    let positives = array6[a][b];
    if (positives > 0) {
      console.log(positives);
    }
  }
}

// task 10
let items = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let even of items) {
  if (even % 2 == 0) {
    console.log(even);
  }
}
for (let odd of items) {
  if (odd % 2 == 1) {
    console.log(odd);
  }
}

// task 11
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];
for (let p of users) {
  if (p.status == true) {
    console.log(p.username);
  }
}
