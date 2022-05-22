const testWrapper = document.querySelector("#testwrapper");
const testArea =  document.querySelector("#mytext");
const originText = document.querySelector('#origin-text');
const text = document.querySelector("#poop").value;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const button = document.querySelector("#newbutton");
var timer = [0,0,0,0];
var interval;

var arr = ["Ishan","Shivam","a","Ishan","Shivam","a","Ishan","Shivam","a","kk"];
var temp;
function randomString(){
    
    temp = Math.random()*10;
    temp = Math.floor(temp);
    return arr[temp];
    

}


function leadingZero(time){

    if(time <=9){

        time = "0" + time;
    }
    return time;
}
function runTimer(){

let currentTime = leadingZero (timer[0]) + ":" + leadingZero (timer[1]) + ":" + leadingZero (timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100)  - (timer[0] * 60 ));
    timer[2] = Math.floor((timer[3]) - (timer[1] * 100) - (timer[0] * 6000))

}

function spellcheck(){
    

     let textEntered = testArea.value;
     let OriginTextMatch = text.substring(0 , textEntered.length);


     if(textEntered == text){
        testWrapper.style.borderColor ="#429890";
        
        clearInterval(interval);

        changeSentence();

     } else {

        if(textEntered == OriginTextMatch){

        testWrapper.style.borderColor ="#65CCF3";

     } else {

        testWrapper.style.borderColor = "#E95D0F";

        

     }
 
     
     }
     

}


function start(){

    let textEnteredLength = testArea.value.length;
    if(textEnteredLength===0){
        interval =  setInterval(runTimer , 10);
    }
  
    console.log(textEnteredLength);
}






function reset(){

clearInterval(interval);
    timer = [0,0,0,0];



    theTimer.innerHTML = "00:00:00";
testWrapper.style.borderColor = "#808080";
testArea.value = " ";
}





function changeSentence(){

     
    

    
     document.getElementById("poop").value = randomString();



     reset();



     }


   

testArea.addEventListener("keypress",   start ,    false );
testArea.addEventListener("keyup" , spellcheck  , false);
resetButton.addEventListener("click" , reset ,  false);
button.addEventListener("click" , changeSentence ,   false);
