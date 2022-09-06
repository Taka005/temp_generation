const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
let temp_data = ["35.7", "35.8", "35.9","36.0", "36.1","36.2","36.3","36.4", "36.5", "36.6", "36.7", "36.8", "36.9", "37.0"]; 

form.addEventListener("submit", function (event){
    event.preventDefault();
    const temp = input.value;
  
    for(i=0;i<temp;i++){
        const random = Math.floor(Math.random() * temp_data.length);
        const li = document.createElement("li");
        li.innerText = temp_data[random];
        li.classList.add("list-group-item")  

        li.addEventListener("click", function (event){
            event.preventDefault();
            li.remove();
        });
        
        ul.appendChild(li);
    }
});