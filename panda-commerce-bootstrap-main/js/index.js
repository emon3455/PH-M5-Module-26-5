// task-2
let h2= document.getElementsByTagName("h2");

for (const tag of h2) {
    tag.style.color="lightblue";
}

// task-3
document.getElementById("backpack").style.backgroundColor="pink";
document.getElementById("backpack").style.padding="1rem";


// task-4
let cards = document.getElementsByClassName("card");
for (const card of cards) {
    card.style.borderRadius = "30px";
}

// task-5:
function clickMe(){
    console.log("Slider button clicked");
}


// task-6:
// let btns = document.getElementsByClassName("btn");
// for (const btn of btns) {
//     btn.addEventListener("click", function(event){
//         event.target.parentNode.removeChild(event.target);
//     });
// }


// task-7:
document.getElementById("exampleInputEmail1").addEventListener("keyup",function(event){
    let message = event.target.value;

    if(message=="email"){
        document.getElementById("submitButton").removeAttribute("disabled",false);
    }
    else{
        document.getElementById("submitButton").setAttribute("disabled",true);
    }
});

// task-8:
let img = document.getElementById("img1");

img.addEventListener("mouseover", function(){

    if(img.src !="http://127.0.0.1:5500/panda-commerce-bootstrap-main/images/shoes/shoe-2.png"){
        img.src= " http://127.0.0.1:5500/panda-commerce-bootstrap-main/images/shoes/shoe-2.png";
    }
    else{
        img.src= " http://127.0.0.1:5500/panda-commerce-bootstrap-main/images/shoes/shoe-1.png";
    }

});