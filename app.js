let btn = document.querySelector(".btn");
let box = document.querySelector(".box");

btn.addEventListener("click", function () {
  console.log(box.getBoundingClientRect().left);
});

console.log(window.innerHeight);
console.log(window.innerWidth);

window.addEventListener("resize", function () {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
});
