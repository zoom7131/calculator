class Kalkulator {
    constructor(wczesniejszaOperacjaText, aktualnaOperacjaText){
        this.wczesniejszaOperacjaText = wczesniejszaOperacjaText
        this.aktualnaOperacjaText = aktualnaOperacjaText
        this.wyczysc()
    }
    
    wyczysc(){
        this.aktualnaOperacja = ''
        this.wczesniejszaOperacja = '' 
        this.operator = undefined

    }

    usun() {
        this.aktualnaOperacja = this.aktualnaOperacja.toString().slice(0, -1)

    }

    dodajNumer(numer) {
        if (numer === '.' && this.aktualnaOperacja.includes('.')) return
        this.aktualnaOperacja = this.aktualnaOperacja.toString() + numer.toString()

    }

    wybierzOperator(operator){
        if (this.aktualnaOperacja === '') return
        if (this.wczesniejszaOperacja !== ''){
            this.oblicz()
        }
        this.operator = operator
        this.wczesniejszyaOperacja = this.aktualnaOperacja
        this.aktualnaOperacja = ''
    }

    oblicz(){
        let obliczenie
        const wczesniej = parseFloat(this.wczesniejszaOperacja)
        const aktualnie = parseFloat(this.aktualnaOperacja)
        if (isNaN(wczesniej) || isNaN(aktualnie)) return
        switch (this.operator){
            case '+':
                obliczanie = wczesniej + aktualnie
                break
            case '-':
                obliczanie = wczesniej - aktualnie
                break
            case '*':
                obliczanie = wczesniej * aktualnie
                break
            case '/':
                obliczanie = wczesniej / aktualnie
                break
            default:
                return
        }
        this.aktualnaOperacja = obliczenie
        this.operator = undefined
        this.wczesniejszaOperacja = ''
    }

    wyswietlNumery(numer){
        const numerCiagu = numer.toString()
        const calkowiteLiczby = parseFloat(numerCiagu.split('.')[0])
        const dziesietneLiczby = numerCiagu.split('.')[1]
        let wyswietlCalkowite
        if(isNaN(calkowiteLiczby)){
            wyswietlCalkowite = ''
        } else{
            wyswietlCalkowite = calkowiteLiczby.toLocaleString('en', {
            maksymalneCyfryUlamkowe: 0})
        }
        if (dziesietneLiczby != null){
            return `${wyswietlCalkowite}.${dziesietneLiczby}`
        } else {
          return wyswietlCalkowite

        }
    }

    aktualizujWyswietlacz(){
        this.aktualnaOperacjaText.innerText = 
        this.wyswietlNumery(this.aktualnaOperacja)
        if(this.operator != null){
            this.wczesniejszaOperacjaText.innerText = 
            `${this.wyswietlNumery(this.wczesniejszaOperacja)} ${this.operator}`
        }else{
            this.wczesniejszaOperacjaText.innerText = ''
        }
    }    
}








const numerButtons = document.querySelectorAll('[data-numer]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const rownasieButton= document.querySelector('[data-rownasie]')
const usunButton = document.querySelector('[data-usun]')
const wyczyscButton = document.querySelector('[data-wyczysc]')
const wczesniejszaOperacjaText = document.querySelector('[data-wczesniejsza-operacja]')
const aktualnaOperacjaText = document.querySelector('[data-aktualna-operacja]')


const kalkulator = new Kalkulator(wczesniejszaOperacjaText, aktualnaOperacjaText)

numerButtons.forEach(button => {
    button.addEventListener('click', () => {
        kalkulator.dodajNumer(button.innerText)
        kalkulator.aktualizujWyswietlacz()
    })

})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        kalkulator.wybierzOperator(button.innerText)
        kalkulator.aktualizujWyswietlacz()
    })

})

rownasieButton.addEventListener('click', button => {
    kalkulator.oblicz()
    kalkulator.aktualizujWyswietlacz()
})

wyczyscButton.addEventListener('click', button => {
    kalkulator.wyczysc()
    kalkulator.aktualizujWyswietlacz()
})

usunButton.addEventListener('click', button => {
    kalkulator.usun()
    kalkulator.aktualizujWyswietlacz()
})