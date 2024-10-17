let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let box1 = document.querySelector(".main");
let input2 = document.querySelector("#input2");
let btn2 = document.querySelector("#btn2");
let box2 = document.querySelector(".main2");
let eror = document.querySelector("#eror");
let count = 4;
btn.addEventListener("click", function () {
  let values = input.value;
  // input.value = " ";
  if (values == "") {
    eror.innerHTML = "Please Give me a value";
    // count--;
  } else if (values > 10) {
    eror.innerHTML = "Please Give me a number upto (1-10)";
    // count--;
  } else if (values == 0) {
    eror.innerHTML = "0 is not a value";
    // count--;
  } else {
    eror.innerHTML = "";
    box1.style.display = "none";
    box2.style.display = "block";
    count--;
    console.log(count);
  }
});

btn2.addEventListener("click", function () {
  let values1 = input.value;
  let values2 = input2.value;
  // input2.value = " ";
  // console.log(values1);

  if (values2 == "") {
    eror.innerHTML = "Please Give me a value";
  } else if (values2 > 10) {
    eror.innerHTML = "Please Give me a number upto (1-10)";
    count--;
    console.log(count);
  } else if (values2 == 0) {
    eror.innerHTML = "0 is not a value";
    count--;
  } else if (values1 == values2) {
    eror.innerHTML = "Player Two Win";
  } else if (count === 1) {
    eror.innerHTML = "Player One Win";
  }
});
