const input = document.querySelector("form input");     //get input element from form
counter = document.querySelector("form .counter");      //get counter element from form
maxLength = input.getAttribute("maxlength");            //get max length @16

input.onkeyup = ()=>{                                   //after every input typed in then...
    counter.innerText = maxLength - input.value.length; //change text of counter by decrementing by length of characters inserted
}