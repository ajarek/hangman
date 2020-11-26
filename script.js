var karty = new Array(
	"Bez pracy nie ma kołaczy",
	"Jaka praca taka płaca",
	"pierwsze koty za płoty",
	"Cicha woda brzegi rwie",
	"Cicho jakby makiem zasiał",
	"Ciekawość to pierwszy stopień do piekła",
	"Ciemny jak tabaka w rogu",
	"Człowiek raz się rodzi i raz umiera",
	"Człowiek strzela Pan Bóg kule nosi",
	"Czyha jak diabeł na dobrą duszę",
	"Czym chata bogata tym rada",
	"Czym skorupka za młodu nasiąknie tym na starość trąci",
	"Pokorne cielę dwie matki ssie",
	"Póki w maju wiatr z północy ma się u nas zimno w nocy",
	"Praca tuczy bieda uczy",
	"Prawdziwa cnota krytyk się nie boi",
)
var haslo = karty[Math.floor(Math.random() * karty.length)]
haslo = haslo.toLocaleUpperCase();
var haslo1 = "";
var dlugosc = haslo.length;
const wypisz = document.querySelector('.wypisz')
const wynik = document.querySelector('.wynik')
const tablica = new Map;
let proba = 5
let img = document.querySelector('img');
for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}
window.onload=wypisz_haslo();
function wypisz_haslo() {
    document.getElementById('ukryte').innerHTML = haslo1;
        
}
String.prototype.ustawZnak = function (key, value) {
    return this.substr(0, value) + key + this.substr(value + 1)
}
const koniecGry  =()=>{ 
    if(proba<=0){
        document.getElementById('ukryte').innerHTML =`KONIEC GRY <br/>hasło to: <br/>${haslo}<br/><button onclick="location.reload()" class="reset" >JESZCZE RAZ?</button>`;
        proba=5
    }
}
const wygrana =()=>{
    document.getElementById('ukryte').innerHTML =`BAWO WYGRAŁEŚ!<br/><br/><button onclick="location.reload()" class="reset" >JESZCZE RAZ?</button>`;
}
window.addEventListener('keypress', (e) => {
   
    var trafione =false
    let litera = e.key;
    litera =litera.toLocaleUpperCase();
    for (let i = 0; i < haslo.length; i++) {
       
        if (haslo.charAt(i) === litera) {
             tablica.set(i, litera);
            tablica.forEach(function (key, value) {
                haslo1 = haslo1.ustawZnak(key, value)
                document.getElementById('ukryte').innerHTML = haslo1
                trafione=true
            })   
        } 
          }
    if(trafione===false){
        proba--
wynik.innerHTML =`Ilość prób: ${proba} `
koniecGry()

    }
    if(haslo===haslo1){
        wygrana();
    }
});
img.addEventListener('click',()=>{
    
    img.setAttribute('src','logo2.PNG')
})
