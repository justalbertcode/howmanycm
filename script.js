const btn = document.getElementById("btn");
const result = document.getElementById("result");
const man = document.getElementById("man");
const woman = document.getElementById("woman");

// Inputs
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const age = document.getElementById("age");

//Values
const age_value = document.querySelector(".age_value");
const height_value = document.querySelector(".height_value");
const weight_value = document.querySelector(".weight_value");

let a = Number(age.value)
let h = Number(height.value);
let w = Number(weight.value);

function howManyCM() {
  const res = ((h * 0.09) - (w / a) - (a/99) + Math.random());
  return Number.parseFloat(res).toFixed(1);
}

function putResult() {
<<<<<<< HEAD
=======
  if(man.checked){
    console.log("man")
  }
>>>>>>> 1d1f32df451a700aca246cb5d72fe161566dae8d
  if(woman.checked){
    result.innerText = "Oops, it's 0 cm, because you are woman";
    result.classList.remove("hidden");
    return;
  }
  if(h/w >=4){
    result.innerText = "It's unreal (0^0)";
    result.classList.remove("hidden");
    return;
  }
  if(a>90){
    result.innerText = "Be glad that it hasn't dried up yet)";
    result.classList.remove("hidden");
    return;
  }
  result.innerText = howManyCM() + " cm";
  result.classList.remove("hidden");
}

age_value.textContent = age.value;
height_value.textContent = height.value;
weight_value.textContent = weight.value;
<<<<<<< HEAD
=======

age.addEventListener("input", (event) => {
  age_value.textContent = event.target.value;
  a = Number(event.target.value);
});

height.addEventListener("input", (event) => {
  height_value.textContent = event.target.value;
  h = Number(event.target.value)
});
weight.addEventListener("input", (event) => {
  weight_value.textContent = event.target.value;
  w = Number(event.target.value)
});
>>>>>>> 1d1f32df451a700aca246cb5d72fe161566dae8d

age.addEventListener("input", (event) => {
  age_value.textContent = event.target.value;
  a = Number(event.target.value);
});

height.addEventListener("input", (event) => {
  height_value.textContent = event.target.value;
  h = Number(event.target.value)
});
weight.addEventListener("input", (event) => {
  weight_value.textContent = event.target.value;
  w = Number(event.target.value)
});

btn.addEventListener("click", putResult);

<<<<<<< HEAD
=======
if(man.checked){
  console.log("man")
}
>>>>>>> 1d1f32df451a700aca246cb5d72fe161566dae8d
