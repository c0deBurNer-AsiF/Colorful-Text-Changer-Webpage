const heading=document.getElementById("heading");

const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const btn4=document.getElementById("btn4");
const btn5=document.getElementById("btn5");
const btn6=document.getElementById("btn6");

const buttons=[btn1, btn2,btn3,btn4,btn5,btn6];

function resetAllButtonText()
{
    /*buttons.forEach(button =>{
        button.innerText="Try it";
    });*/

    for (i of buttons)
    {
        i.innerText="Try it";
    }
}




btn1.addEventListener('click',()=>{
  
    const gradientValue="linear-gradient(to left, #ea5a6f, #de791e,#fccf3a)"
    heading.style.backgroundImage=gradientValue;
    heading.style.color="transparent";

    resetAllButtonText();

    btn1.innerText="Using"

   
});

btn2.addEventListener('click',()=>{
  
    heading.style.backgroundImage="linear-gradient(to left,#276148,#33c58e,#63fdee )";
    heading.style.color="transparent";

    resetAllButtonText();

    btn2.innerText="Using";
   
});

btn3.addEventListener('click',()=>{
  
    heading.style.backgroundImage="linear-gradient(to left, #f02fc2,#6094ea)";
    heading.style.color="transparent";

    resetAllButtonText();

    btn3.innerText="Using"
   
});

btn4.addEventListener('click',()=>{
  
    heading.style.backgroundImage="linear-gradient(to left, #363553, #903775,#e8458b)";
    heading.style.color="transparent";
   

    resetAllButtonText();

    btn4.innerText="Using"
});

btn5.addEventListener('click',()=>{
  
    heading.style.backgroundImage="linear-gradient(to left, #17ead9, #6078ea)";
    heading.style.color="transparent";

    resetAllButtonText();

    btn5.innerText="Using"
   
});

btn6.addEventListener('click',()=>{
  
    heading.style.color="white";

    resetAllButtonText();

    btn6.innerText="Using"
   
});
