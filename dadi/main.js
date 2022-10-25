"use strict";

alert("sto tirando i dadi...");

const dadoGiocatore = Math.floor(Math.random() * 6);
const dadoCpu = Math.floor(Math.random() * 6);

console.log(`il tuo dado è risultato ${dadoGiocatore}, il tuo avversario ha fatto ${dadoCpu}`);

if(dadoGiocatore > dadoCpu){
    alert(`Hai vinto, campione !`);
}else if(dadoGiocatore === dadoCpu){
    alert(`Pareggio`);
}else{
    alert(`Hai perso, riprova, asino`);
}


