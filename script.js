let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector(".task-list");
let li = document.querySelector("li");
let dark = document.querySelector(".dark")
btn.addEventListener('click',()=>{
    let newtask = document.createElement("li");
    newtask.innerText = inp.value;
    ul.appendChild(newtask);
    newtask.classList.add("newtastclass")
    newtask.addEventListener('click',()=>{
        newtask.classList.toggle("newtask")
    })

    let check = document.createElement("i");
    check.classList.add("fa-regular" , "fa-square-check");
    newtask.prepend(check);
    check.addEventListener('click', ()=>{
        check.classList.toggle("check")
    })

    let Dbtn = document.createElement("i");
    Dbtn.classList.add("fa-solid" , "fa-trash");
    newtask.appendChild(Dbtn);
    Dbtn.addEventListener('click',()=>{
        newtask.remove();
    })

    inp.value = '';

})

inp.addEventListener('keydown',(event)=>{
   if(event.key === 'Enter'){
    let newtask = document.createElement("li");
    newtask.innerText = inp.value;
    ul.appendChild(newtask);
    newtask.classList.add("newtastclass")
    newtask.addEventListener('click',()=>{
        newtask.classList.toggle("newtask")
    })

    let check = document.createElement("i");
    check.classList.add("fa-regular" , "fa-square-check");
    newtask.prepend(check);
    check.addEventListener('click', ()=>{
        check.classList.toggle("check")
    })

    let Dbtn = document.createElement("i");
    Dbtn.classList.add("fa-solid" , "fa-trash");
    newtask.appendChild(Dbtn);
    Dbtn.addEventListener('click',()=>{
        newtask.remove();
    })

    inp.value = '';
   }
})


    