const btn = document.getElementById("btn");
const result = document.getElementById("result");

// Inputs
const height = document.getElementById("height").value;
const weight = document.getElementById("weight").value;
const age = document.getElementById("age").value;

//Values
const age_value = document.querySelector(".age_value");
const height_value = document.querySelector(".height_value");
const weight_value = document.querySelector(".weight_value");



function howManyCM() {
  const a = Number(age);
  const h = Number(height);
  const w = Number(weight);

  if(a ==='' || w ==='' || h ===''){
    alert('Enter inputs number')
    console.log(a, h, w)
    return false;
  } else if(h <=1 || w <=0 || a <=1){
    console.log(a, h, w)
    alert('Enter correct inputs number')
    return false;
  }
  else {
    const res = (h * 0.1) - (w / a)*0.95;
    console.log(a, h, w)
    return Number.parseFloat(res).toFixed(2);
    
  }
  
}

function putResult() {
    if(!howManyCM()){
        result.innerText = "Error!!!" 
        return;
    } else {
        result.innerText = howManyCM() + " cm"
        result.classList.remove('hidden');
    }
    
}



btn.addEventListener("click", putResult);




age_value.textContent = age;
height_value.textContent = height;
weight_value.textContent = weight;

age.addEventListener("input", (event) => {
    age_value.textContent = event.target.value;
});
