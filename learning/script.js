function revealMessage(){

    document.getElementById("hiddenMessage").style.display = 'block';


    /*
    The line above accesses the document, calls on the html by its ID, then accesses
    its properties of style and display, and setting it to be visible 

    */ 

}


function countDown(){

    let currentText = document.getElementById("countDownButton").innerHTML;
    // innerHTML just gets the inner value of countDownButton   
    // use parseInt to get the number part of the string

    let currentVal = parseInt(currentText); 
    let newVal = 0; // initialize to zero first, will be updated if meet if statement


    if(currentVal > 0){
        newVal = currentVal - 1;
    }



    let clickText = currentVal === 2 ? 'more click' : 'more clicks'; // adjusting for singular when click amount hits 1
    document.getElementById("countDownButton").innerHTML = newVal + ' ' + clickText;


    // updates the countdown button so that on new click it updates from the newVal.

    if(currentVal == 1){
    

        window.open("https://www.google.com");
        document.getElementById("countDownButton").disabled = true; // disable to stop further clicks 
    }   

}



    