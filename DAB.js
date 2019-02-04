/*napisi klasu racunarska periferija koja ima metodu za iskljuc i ukljuc
definisi 2 izvedene klase sa dodatnim poljima i metodom za ispis polja zajedno sa onim iz roditeljske
napraviti vise objekata izvedenih klasa i testirati
*/

class RacunarskaPeriferija {

    constructor(name) {
      this.isActive = false;
      this.name = name;
      
    }
  

       turnOn() {
           this.isActive = true;
       }
       turnOff() {
           this.isActive = false;
               }
               getDescription() {
                   return "This device is turned " +(this.isActive ? "on": "off") + "." + this.name;
               }
      class Mouse extends          


   /*class CDROM extends racunarskaPeriferija {
    constructor(propA, propB, propC){
        super(propA, propB);
        this.propC = propC;
    }
    printCDROM(){
        console.log(this.propA, this.propB, this.propC)
    }
}
class Skener extends CDROM {
    constructor(propA, propB, propC, propD) {
        super(propA, propB, propC);
        this.propD = propD;
    }
    printSkener() {
        console.log(this.propA, this.propB, this.propC, this.propD)
    }
}
    */