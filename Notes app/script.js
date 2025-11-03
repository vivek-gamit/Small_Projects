let notes = document.querySelectorAll(".input-box")
let btn = document.querySelector("button")
let textcontainer = document.querySelector(".text-container") 

function showdata(){
    textcontainer.innerHTML = localStorage.getItem("notes");
}
showdata()

function updatedata(){
    localStorage.setItem("notes",textcontainer.innerHTML);
}
btn.addEventListener("click",()=>{
    let inputbox = document.createElement("p")
    let img = document.createElement("img")

    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true" )
    img.src = "./images/delete.png";
    
    textcontainer.appendChild(inputbox)
    inputbox.appendChild(img)
})
textcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatedata()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updatedata()
            }
        })
    }
})