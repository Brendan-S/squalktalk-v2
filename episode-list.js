

var hoverColor = document.querySelector("#title"); 
var hoverColor2 = document.querySelector("#summary");
var hoverColor3 = document.querySelector("#Episode")

let next = document.querySelector("#next"); 
let previous = document.querySelector("#previous"); 
let home = document.querySelector("#home"); 

let nextID = document.querySelector("#nextID");
let previousID = document.querySelector("#previousID"); 
let homeID = document.querySelector("#homeID");


//////////////////////////////////////////////////////////////////

// var buttons = ["previous", "home", "next", "title", "summary"]; 
// let text = ""; 




window.addEventListener("resize", function(){

    if (window.innerWidth > 521 ){
     
        nextID.setAttribute("onmouseover", "nextColor()")
        nextID.setAttribute("onmouseout", "nextRemove()"); 

        previousID.setAttribute("onmouseover", "previousColor()"); 
        previousID.setAttribute("onmouseout", " previousRemove()"); 

        homeID.setAttribute("onmouseover", "homeColor()"); 
        homeID.setAttribute("onmouseout", "homeRemove()");   

        console.log("add"); 
        
    }else{

        nextID.removeAttribute("onmouseover"); 
        nextID.removeAttribute("onmouseout"); 

        previousID.removeAttribute("onmouseover"); 
        previousID.removeAttribute("onmouseout"); 

        homeID.removeAttribute("onmouseover"); 
        homeID.removeAttribute("onmouseout");
        
        console.log("remove"); 
    }
}); 


  



//    function colorChange(){
       
//         for (i = 0; i< buttons.length; i++){

//             text += "#" + buttons[i]; 
//             document.getElementById("text"); 

//             buttons[i].style.color = "#EBC829";
//             buttons[i].style.transition = "color ease-in-out 1s";   

//             buttons[i].style.top = "29rem";
//             buttons[i].style.transition = "top ease-in-out 1s"; 
//         };
//     };
    
    //  function colorRemove(){

    //     for (i = 0; i< buttons.length; i++){

    //         text += "#" + buttons[i]; 
    //         document.getElementById("text"); 

    //         buttons[i].style.color = "white"; 
    //         buttons[i].style.transition = "color ease-in-out 1s";

    //         buttons[i].style.top = "30rem";
    //         buttons[i].style.transition = "top ease-in-out 1s"; 
    //     }
    //  };







        function colorChange(){
            hoverColor3.style.color = "#EBC829";
            hoverColor3.style.transition = "color ease-in-out 1s"; 

            hoverColor.style.color = "#EBC829";
            hoverColor.style.transition = "color ease-in-out 1s"; 

            hoverColor2.style.color = "#EBC829";
            hoverColor2.style.transition = "color ease-in-out 1s";   

        }





        function colorRemove(){
            hoverColor3.style.color = "white";
            hoverColor3.style.transition = "color ease-in-out 1s"; 

            hoverColor.style.color = "white"; 
            hoverColor.style.transition = "color ease-in-out 1s";

            hoverColor2.style.color = "white"; 
            hoverColor2.style.transition = "color ease-in-out 1s";

        }


        function nextColor(){

            next.style.color = "#EBC829";
            next.style.transition = "color ease-in-out 1s";   

            nextID.style.borderColor = "#EBC829";
            nextID.style.transition = "border-color ease-in-out 2s"; 

            nextID.style.top = "34rem";
            nextID.style.transition = "top ease-in-out 1s"; 
        }

        function nextRemove(){

            next.style.color = "white"; 
            next.style.transition = "color ease-in-out 1s";

            nextID.style.borderColor = "white";
            nextID.style.transition = "border-color ease-in-out 2s"; 

            nextID.style.top = "35rem";
            nextID.style.transition = "top ease-in-out 1s"; 
        }
            

        function previousColor(){

            previous.style.color = "#EBC829";
            previous.style.transition = "color ease-in-out 1s";  

            previousID.style.borderColor = "#EBC829";
            previousID.style.transition = "border-color 1s ease-in-out"; 

            previousID.style.top = "34rem";
            previousID.style.transition = "top 1s ease-in-out"; 
        } 

        function previousRemove(){

            previous.style.color = "white"; 
            previous.style.transition = "color ease-in-out 1s";

            previousID.style.borderColor = "white";
            previousID.style.transition = "border-color ease-in-out 1s";

            previousID.style.top = "35rem";
            previousID.style.transition = "top 1s ease-in-out"; 
        } 


        function homeColor(){

            home.style.color = "#EBC829";
            home.style.transition = "color 1s ease-in-out";

            homeID.style.borderColor = "#EBC829";
            homeID.style.transition = "border-color 1s ease-in-out"; 

            homeID.style.top = "34rem";
            homeID.style.transition = "top 1s ease-in-out";
        } 


        function homeRemove(){

            home.style.color = "white"; 
            home.style.transition = "color 1s ease-in-out";

            homeID.style.borderColor = "white";
            homeID.style.transition = "border-color 1s ease-in-out";

            homeID.style.top = "35rem";
            homeID.style.transition = "top 1s ease-in-out"; 

        }
