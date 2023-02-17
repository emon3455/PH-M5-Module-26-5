function getElementValueByID(id){
    const elemenet = document.getElementById(id);
    const value = elemenet.innerText;

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
