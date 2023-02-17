function getElementValueByID(id){
    const elemenet = document.getElementById(id);
    const value = elemenet.innerText;

    return value;
}

function getElementNumberValueByID(id){
    const elemenet = document.getElementById(id);
    const value = parseFloat(elemenet.innerText);

    return value;
}



function getInputValueByID(id){
    const inputField =  document.getElementById(id);
    const value  = inputField.value;


    inputField.value = "";

    return value;
}

function setElementValueByID(id , value){
    const elemenet = document.getElementById(id);
    elemenet.innerText = value;
}

let count = 0;

function displayTableRow(name , price , amount , Totall){
    let tableBody = document.getElementById("table-body");
    let tr = document.createElement("tr");
    tr.innerHTML=`
            <th> ${count} </th>
            <td> ${name} </td>
            <td> ${price} </td>
            <td> ${amount} </td>
            <td> ${Totall} </td>
    `
    tableBody.appendChild(tr);
}


// add to cart coffe js:
// document.getElementById("coffe-js").addEventListener("click" , function(){

//     const name  =  getElementValueByID("coffe-js-name");
//     const price  = getElementNumberValueByID("coffe-js-price");
//     const amount = getElementNumberValueByID("coffe-js-amount");
//     const Totall = price * amount;

//     count = count + 1;
//     displayTableRow(name , price , amount , Totall);

//     document.getElementById("coffe-js").setAttribute("disabled" ,true);

// });

document.getElementById("card-section").addEventListener("click", function(event){

   if(event.target !== document.getElementById("vue-js-btn")){
    const name  = event.target.parentNode.children[0].innerText;  
    const price  = event.target.parentNode.children[2].children[0].innerText;
    const amount  = event.target.parentNode.children[3].children[0].innerText;
    const Totall = price * amount;

    count = count + 1;
    displayTableRow(name , price , amount , Totall);

    event.target.setAttribute("disabled" ,true);
   }

});

// for vue js:
document.getElementById("vue-js-btn").addEventListener("click" , function(){

    const name  =  getElementValueByID("vue-js-name");
    const price  =  getInputValueByID("vue-js-price");
    const amount =  getInputValueByID("vue-js-amount");

    const Totall = price * amount;

    count = count + 1;
    displayTableRow(name , price , amount , Totall);

    document.getElementById("vue-js-btn").setAttribute("disabled" ,true);

});


