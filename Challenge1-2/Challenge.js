//Challenge 1  We need a sum of all the numbers
// "1,3,545,6767,8,9-9,9994_33$$33,33!334";
const newStringofNums = "1,3,545,6767,8,9-9,9994_33$$33,33!334";
console.log("CHALLENGE 1");
function sumDigitsFromString(newStringofNums) {
  var strArr = newStringofNums.split(""),
    strTemp = "";
  var sum = 0;
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i] >= "0" && strArr[i] <= "9") {
      strTemp += strArr[i];
    } else if (strArr[i] == ",") {
      sum += parseInt(strTemp);
      //    console.log(strTemp+" "+sum)
      strTemp = "";
    }
  }
  sum += parseInt(strTemp);
  return sum;
}

console.log("Sum of numbers  = ", sumDigitsFromString(newStringofNums));
console.log();

//Challenge 2 We need to check the number of male and female users in both active aswell as inactive status
//Axios preferred

//npm install axios first to run the program so as to install the package.json file

const axios = require("axios");
var maleactive = 0;
var femaleactive = 0;
var maleinactive = 0;
var femaleinactive = 0;
var data;

let response = axios
  .get("https://gorest.co.in/public/v2/users")
  .then((resp) => {
    data = resp.data;


    for (var i = 0; i < data.length; i++) {
      var value = data[i].status;
      if (value === "active") {
        if (data[i].gender === "female") {
          femaleactive++;
        } else {
          maleactive++;
        }
      }
    }
    console.log("CHALLENGE 2");
    console.log("FEMALE ACTIVE = ", femaleactive);
    console.log("MALE ACTIVE = ", maleactive);

    for (var i = 0; i < data.length; i++) {
      var value = data[i].status;
      if (value === "inactive") {
        if (data[i].gender === "female") {
          femaleinactive++;
        } else {
          maleinactive++;
        }
      }
    }
    console.log("FEMALE INACTIVE = ", femaleinactive);
    console.log("MALE INACTIVE = ", maleinactive);
  });
