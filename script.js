let addbtn = document.querySelector("#add-btn");
let list = document.querySelector("#todo-list");
let removebtn = document.querySelector("#remove-btn");
let input = document.querySelector("#input");
let updatefirstEl = document.querySelector("#updatefirst-btn");
let removefirstEl = document.querySelector("#removefirst-btn");
let deleteIcons = document.querySelectorAll(".delete-icon");

    const delFun = () => {
        list.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("delete-icon")) {
                if (confirm("Are you sure to delete this item from the item list?")) {
                    evt.target.parentElement.remove();
                }
            }
        });
    };


delFun();


let currentVal = "";



input.addEventListener("input", (e) =>{
    currentVal = e.target.value;
})

let createNewNodes = () =>{
    let newEl = document.createElement("li");
    let textNode = document.createTextNode(currentVal);
    newEl.appendChild(textNode);
    newEl.id = "item " + (list.childElementCount +1);
  let icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-trash", "delete-icon");

  newEl.appendChild(icon)
   return newEl;
}

addListitem = () =>{
    if(currentVal !== undefined && currentVal !== null && currentVal !== ""){
       let newEl =  createNewNodes();
       list.appendChild(newEl);
       input.value = '';
       currentVal = '';      
    }else{
        alert("Enter a valid todo List items")
    }
}



input.addEventListener("keyup", (e) =>{
    if(e.keyCode === 13){
        addListitem(); 
    }
})

addbtn.addEventListener("click", addListitem)

removebtn.addEventListener("click", () =>{
    let lastChild = list.lastChild;
    if(lastChild){
        lastChild.remove();
    }else{
        alert("List is empty")
    }
})

updatefirstEl.addEventListener("click", () =>{
    let firstEl = list.firstElementChild;
    let newEl = createNewNodes();

    list.replaceChild(newEl , firstEl);
    input.value = '';
    currentVal = '';  
})

removefirstEl.addEventListener("click", () =>{
    let firstEl = list.firstElementChild;
    list.removeChild(firstEl)
});

function TODOListFormBackend () {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        console.log('Response Recived')
    }

    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    http.send();
};

TODOListFormBackend();