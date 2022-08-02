var elFormBtn = document.querySelectorAll(".btn");
var elFormInput = document.querySelectorAll(".input");
var elTextAnswer = document.querySelectorAll(".text-answer");

console.log(elFormBtn);
console.log(elFormInput);
console.log(elTextAnswer);


elFormBtn[0].addEventListener("click", (event) => {
   event.preventDefault();
   let input = elFormInput[0].value.trim();

   if(input >= 16 && input < 45) {
    elTextAnswer[0].textContent = "Siz musobaqada qatnasha olasiz";
   }
   else if(input == 15) {
    elTextAnswer[1].textContent = "Iltimos bir yildan keyin keling";
   }
   else if(input == 14) {
    elTextAnswer[1].textContent = "Iltimos ikki yildan keyin keling";
   }
   else if(input == 13) {
    elTextAnswer[1].textContent = "Iltimos uch yildan keyin keling";
   }
   else if(input == 12) {
    elTextAnswer[1].textContent = "Iltimos to'rt yildan keyin keling";
   }
   else if(input == 11) {
    elTextAnswer[1].textContent = "Iltimos besh yildan keyin keling";
   }
   else if(input > 0 && input <= 10) {
    elTextAnswer[1].textContent = "Iltimos siz hali musobaqada qatnashishga ancha kichkinasiz";
   }
   else if(isNaN(input)) {
    elTextAnswer[1].textContent = "Iltimos raqam kiriting";
   }
   else if(input >= 45) {
    elTextAnswer[1].textContent = "Kechirasiz sizning yoshingiz qatnashishga kattalik qiladi";
   }
   else if(input < 0){
    elTextAnswer[1].textContent = "Iltimos musbat son kiriting";
   }
   
   elFormInput[0].value = "";
});

elFormBtn[1].addEventListener("click", (event) => {
    event.preventDefault()
    elTextAnswer[0].textContent = "";
    elTextAnswer[1].textContent = "";
});




elFormBtn[2].addEventListener("click", (event) => {
    event.preventDefault();
    let input = elFormInput[1].value.trim();
 
    if(input >= 50000 && input < 100000) {
     elTextAnswer[2].textContent = "Tabiriklayman siz sayohatga Madridga borasiz";
    }
    else if(input >= 100000 && input < 150000) {
        elTextAnswer[2].textContent = "Tabiriklayman siz sayohatga Berlinga borasiz";
    }
    else if(input >= 150000 && input < 200000) {
        elTextAnswer[2].textContent = "Tabiriklayman siz sayohatga Zagrebga borasiz";
    }
    else if(input >= 200000) {
        elTextAnswer[2].textContent = "Tabiriklayman siz sayohatga Shveytsariyaga borasiz";
    }
    else if(input > 0 && input < 100000) {
        elTextAnswer[3].textContent = "Kechirasiz bizda bu narxlarda sayohat qilish imkoniyati yo'q";
    }
    else if(input < 0) {
        elTextAnswer[3].textContent = "Iltimos musbat son kiriting";
    }
    else if(isNaN(input)) {
        elTextAnswer[3].textContent = "iltimos raqam kiriting";
    }
    
    elFormInput[1].value = "";
 });
 
 elFormBtn[3].addEventListener("click", (event) => {
     event.preventDefault()
     elTextAnswer[2].textContent = "";
     elTextAnswer[3].textContent = "";
 });
 
 

// elFormBtn[1].addEventListener("submit", reset1);
// elFormBtn[2].addEventListener("submit", answer2);
// elFormBtn[3].addEventListener("submit", reset1);
