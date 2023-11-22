
buttons = document.querySelectorAll(".drum");


buttons.forEach(element => {
    element.addEventListener("click",function (){
        alert("clicked "+ this.innerHTML ); 

    })

    element.addEventListener("keyDown",function (){
        alert("clicked "+ this.innerHTML ); 

    })
});
