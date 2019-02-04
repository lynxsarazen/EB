class Person {
    constructor(name) {
        this.name = "Marko";
    }
}
printPerson() {
    console.log(this.name);
}
class Athlete extends Person {
    constructor(name, sport) {
        super(name);
        this.sport = sport;
    }

    printAthlete() {
        console.log(this.name, this.sport)
    }
}
// novi objekat
var atleta = new Athlete("Ivana", "skok u dalj");
atleta.printPerson();
atleta.printAthlete();
// super kaze pozovi konstruktor roditeljske klase

/*napisi klasu racunarska periferija koja ima metodu za iskljuc i ukljuc
definisi 2 izvedene klase sa dodatnim poljima i metodom za ispis polja zajedno sa onim iz roditeljske
napraviti vise objekata izvedenih klasa i testirati
*/

class racunarskaPeriferija {

    constructor(name) {
      this.propA = propA;
      this.propB = propB;
    }
    print.racunarskaPeriferija(){
        console.log(this.propA, this.propB)
    }
    class CDROM extends racunarskaPeriferija {
        constructor(propA, propB, propC){
            super(propA, propB);
            this.propC = propC;
        }
        print.CDROM(){
            console.log(this.propA, this.propB, this.propC)
        }
    
    class skener extends CDROM {
        constructor(propA, propB, propC, propD) {
            super(propA, propB, propC);
            this.propD = propD;
        }
        print.skener() {
            console.log(this.propA, this.propB, this.propC, this.propD)
        }
    }
}
    }