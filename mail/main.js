"use strict";

const mailList = ["nicolo@gmail.com", "abc@gmail.com", "antonio@gmail.com", "margherita@gmail.com"];

const userMail = prompt("Inserisci la tua mail per verifcare se puoi accedere");

let mailConfirmed = false;

for (let i = 0; i < mailList.length; i++) {
    const element = mailList[i];
    if (element === userMail) {
        mailConfirmed = true;
    }
}

if(mailConfirmed === true){
    alert("La tua mail è presente nella lista, puoi accedere");
}else{
    alert("la tua mail non è presente nella lista, non puoi accedere");
}