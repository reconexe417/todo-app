const inputbox = document.getElementById("input-box")
const list = document.getElementById("list")

function addtask(){
    if(inputbox.value !== ''){
        let li = document.createElement("li");
        li.innerHTML = inputbox.value
        list.appendChild(li); //appendChild() inserts an element inside another element.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span) //putting the span inside the <li>.
    }
    else if(inputbox.value === ''){
        window.alert("Add a task!")
         
    }
    inputbox.value = ''; //After adding the task, clear the input box
    savedata()
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ //e is an event object passed to the function by the browser.
        e.target.classList.toggle("checked"); //e.target tells you which element was actually clicked. classList Allows JavaScript to interact with the CSS classes of an HTML element.
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false)

function savedata(){
    localStorage.setItem("data", list.innerHTML) //saves the data (localStorage is a browser feature that lets websites store data on the user's device)
}

function showtask(){
    list.innerHTML = localStorage.getItem("data");
}
showtask();