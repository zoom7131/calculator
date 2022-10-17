class kalkulator {
    constructor(poprzedniaOperacjaText, aktualnaOperacjaText){
        this.poprzedniaOperacjaText = poprzedniaOperacjaText
        this.aktualnaOperacjaText = aktualnaOperacjaText
        this.wyczysc()
    }
    
    wyczysc(){
        this.aktualnaOperacja = ''
        this.poprzedniaOperacja = '' 
        this.operator = undefined

    }

    usun() {

    }

    dodajNumer(numer) {
        this.aktualnaOperacja = numer

    }

    wybierzOperator(operator){

    }

    oblicz(){

    }

    aktualizujWyswietlacz(){
        this.aktualnaOperacjaText.innerText = this.aktualnaOperacja
    }


}








const numerButtons = document.querySelectorAll('[data-numer}')
const operacjaButtons = document.querySelectorAll('[data-operator]')
const rownasieButton= document.querySelectorAll('[data-rownasie]')
const usunButton = document.querySelectorAll('[data-usun]')
const wyczyscButton = document.querySelectorAll('[data-wyczysc]')
const poprzedniaOperacjaText = document.querySelectorAll('[data-poprzednia-operacja]')
const aktualnaOperacjaText = document.querySelectorAll('[data-aktualna-operacja]')


const kalkulator = new kalkulator(poprzedniaOperacjaText, aktualnaOperacjaText)

numerButtons.forEach(button => {
    button.addEventListener('click', () => {
        kalkulator.dodajNumer(button.innerText)
        kalkulator.aktualizujWyswietlacz()
    })
})