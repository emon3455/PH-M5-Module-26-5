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