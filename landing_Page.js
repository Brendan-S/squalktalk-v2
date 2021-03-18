let second = document.querySelector(".titlepage div:nth-child(4)"); 
let third = document.querySelector("canvas");

// let third = document.querySelector("canvas").attributes[0].ownerElement.outerHTML;
//this will display the literal value of data-aos which is set to'fade-down'
// let third = second.getAttribute("data-aos");  

window.addEventListener("resize", function(){
    if (window.innerWidth < 10,000){
     
      third.removeAttribute("width");
      third.removeAttribute("height"); 
        
       }
   });

 window.addEventListener("resize", function(){
     if (window.innerWidth < 700){
       second.removeAttribute("data-aos"); 
        }
    });


var colorChange = document.querySelector("#archive"); 
//"#F0A136"

function wordColor(){

colorChange.style.color =  "#EBC829"; 
colorChange.style.transition = "color ease-in-out 1s";

}; 

function colorRemove(){
    
colorChange.style.color = "white"; 
colorChange.style.transition = "color ease-in-out 1s";

}; 