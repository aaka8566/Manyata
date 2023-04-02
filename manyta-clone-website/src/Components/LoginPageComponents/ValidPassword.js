// function takes a string and checks if :
// 1.Password is 8-16 letters
// 2.Password has atleast 1 uppercase , 1 lowercase, 1 number and 1 symbol(@,%,#,$,%,&,*,-")
// returns true if condition are met else false
export default function validPassword(A) {
  A = A.split("");
  let n = A.length;
  if (A.length < 8 || A.length >= 16) {
    return 0;
  }

  let lower = "abcdefghijklmnopqrstuvwxyz";
  let lowerArr = lower.split("");
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperArr = upper.split("");
  let obj = {};
  let obj2 = {};
  for (let i = 0; i <= 25; i++) {
    if (!obj[lowerArr[i]]) {
      obj[lowerArr[i]] = 0;
    }
    if (!obj2[upperArr[i]]) {
      obj2[upperArr[i]] = 0;
    }
  }

  let flag1 = false,
    flag2 = false,
    flag3 = false,
    flag4 = false;

  for (let i = 0; i <= A.length - 1; i++) {
    if (obj[A[i]] == 0) {
      flag1 = true;
      continue;
    }

    if (obj2[A[i]] == 0) {
      flag2 = true;
      continue;
    }

    if (
      A[i] == "@" ||
      A[i] == "#" ||
      A[i] == "%" ||
      A[i] == "&" ||
      A[i] == "!" ||
      A[i] == "$" ||
      A[i] == "*" ||
      A[i] == "&" ||
      A[i] == "-"
    ) {
      flag4 = true;
    }

    if (!isNaN(A[i])) {
      flag3 = true;
    }
  }

  if (flag1 && flag2 && flag3 && flag4) {
    return true;
  } else {
    return false;
  }
}
