let input = document.querySelector("#inputbox");
let string = "";
let buttons = document.querySelectorAll(".buttons button");

Array.from(buttons).forEach(function(button){
    button.addEventListener("click",function(e){
        console.log(e.target.innerHTML);
        if(e.target.innerHTML === "="){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML === "AC"){
            string = "";
            input.value = "0";
        }
        else if(e.target.innerHTML === "DEL"){
            string = string.slice(0,-1);
            input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})