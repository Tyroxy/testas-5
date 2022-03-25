/*

TTarpinis OOP uždavinys

Sukurti klasę Vaisius, kuris turi:
savybę dydis rand 5 - 25;
savybę id rand 1000000 - 9999999
savybę prakastas false
Sukurti metodą prakasti(), kuris savybe prakastas keistų į true.
Sukurti klasę Krepšys, kuri turi statinę savybe vaisiai, kuri
yra masyvas.
Klasėje Krepšys sukurkite statinį metodą pripildyti(),
kuris savybę vaisiai užpildytų 20-timi Vaisius objektų ir
išrūšiuotų juos pagal vaisiaus dydį nuo didžiausio iki
mažiausio.
Klasėje Krepšys sukurti statinį metodą isimti(), kuris iš
vaisiai masyvo išimtų (ištrintų iš masyvo) pirmą (didžiausią)
vaisių ir jį grąžintų. Išėmus tarkim kelis vaisius ir vėl
paleidus metodą papildyti(), jis turi padaryti tai ką sako
metodo pavadinimas- papildyti iki pilno (20 elementų), o ne
perrašyti visus vaisius iš naujo (tai galima stebėti pagal
vaisių id).
Išorėje (globale) sukurti kintamąjį grauztukai kuris yra Map
tipo objektas. Iš krepšelio išimti vaisiai turi būti pridedami į
šį objektą. Kaip raiktus naudoti Vaisius objekto id savybę.
Prieš patalpinant vaisių į grauztukai objektą, vaisius turi būti
“prakąstas”, Vaisius objekte paleidžiant prakasti() metodą.
*/


const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Vaisius {

    constructor() {
        this.dydis = this.rand(5, 25);
        this.id = this.rand(1000000, 9999999)
        this.prakastas = false;
    }

    prakasti(vaisius) {
        if (vaisius.prakastas) {
            this.prakastas = true;
        }
        
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}



class Krepsys {

    static vaisiai = [];

    static pripildyti(){
         
        if (this.vaisiai.length === 0) {
            for (let i = 0; i < 20; i++) {
             this.vaisiai.push(new Vaisius());
        }
            this.vaisiai.sort((a, b) => b.dydis - a.dydis);
        } else {
            this.papildyti();
      }
    }

    static isimti() {
        const did = this.vaisiai[0];
        this.vaisiai.shift();

        did.prakasti();
        return did;

      }
    
    static papildyti() {
        while (this.vaisiai.length < 20) {
            this.vaisiai.push(new Vaisius());
        }
    }

}

Krepsys.pripildyti();

console.log(new Vaisius());

console.log(Krepsys.vaisiai);


