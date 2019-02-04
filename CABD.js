class Vreme {
    constructor(hours, minutes) {
        this.hours = hours;
        this.minutes = minutes;
    }
    getHours() {
        return this.hours;
    }
    getMinutes() {
        return this.minutes;
    }
    setHours(hours) {
        this.hours = hours;
    }
    setMinutes(minutes) {
        this.minutes = minutes;
    }
    isRoundClock() {
        if (this.minutes == 0 || this.minutes == "00") {
            return true;
        }
        else {
            return false;
        }
    }
    isAm() {
        if (this.hours >= 0 && this.hours < 12) {
            return true;
        }
        else {
            return false;
        }
    }
    isPm() {
        if (this.hours >= 12 && this.hours < 24) {
            return true;
        }
        else {
            return false;
        }
    }
    printTime() {
        if (this.hours < 0 || this.minutes < 0) {
            return console.log('Warning! Must enter number larger than 0!');
        }
        else {
            console.log(`${this.hours < 10 ? "0" : ""}${this.hours}:${this.minutes < 10 ? "0" : ""}${this.minutes}`);
        }
    }
}

var vreme1 = new Vreme(8, 5);

vreme1.printTime();
console.log('Is round clock:', vreme1.isRoundClock());
console.log('Is AM:', vreme1.isAm());
console.log('Is PM:', vreme1.isPm());

//postavljanje novog sata i minuta
vreme1.setHours(22);
vreme1.setMinutes(48);
console.log('New seted hours:', vreme1.getHours());
console.log('New seted minutes', vreme1.getMinutes());
vreme1.printTime();