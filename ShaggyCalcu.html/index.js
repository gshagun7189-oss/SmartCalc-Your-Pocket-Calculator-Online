let display = document.getElementById("display");
function appendValue(val){
if(display.value === "0"){
display.value = val;
}
else
{display.value +=val;
}
scrollDisplayToRight();
}
function clearDisplay(){
    display.value = "0";
    scrollDisplayToRight();
}
function calculate(){
    try{
        display.value = eval(display.value);
}
 catch{
    display.value = "Error";
 }
    scrollDisplayToRight();
}
function backspace(){
    let currentValue = display.value;
    if(currentValue.length === 1|| currentValue === "0"){
        display.value = "0";}
        else{
            display.value = currentValue.slice(0,-1);
        }
    scrollDisplayToRight();
    }

function scrollDisplayToRight(){
    setTimeout(() => {
    display.scrollLeft = display.scrollWidth;
    }, 0);
}
display.addEventListener('keydown', function(event) {
  // Allow only numbers and operators
  if(!/[0-9+\-*/.=]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
    event.preventDefault();
  }
});