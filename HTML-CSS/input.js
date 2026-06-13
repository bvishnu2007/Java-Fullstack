let greeting = ["Good morning", "Good afternoon", "Good evening", "Good night"];
let num =0;

function greet_afternoon() {
            let text = document.getElementById("greet");
            text.innerText = greeting[num];
            num += 1;
            if(num>3(num=0));
        }
 function turn_on() { 
            let light = document.getElementById("light");
            light.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        }
  function turn_off() {            let light = document.getElementById("light");
            light.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        }            
function change_color() {
            let colour = document.getElementById("cap");
            colour.style.backgroundColor = "red"
            let text1 = document.getElementById("data");
            text1.innerHTML = "The background color is red";
            let text2 = document.getElementById("data1");
            text2.innerHTML = "The background color is red";
        }
