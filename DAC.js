class Vozilo {
    constructor() {
        this.distance = 0;
    }
    getDistance() {
        return this.distance;
    }
    moveFor(n) {
        this.distance += n;
        console.log("Vozilo je pomereno za", n, "kilometara.")
    } 
}

class Letelica extends Vozilo {
    constructor(){ super();}
}

class Plovilo extends Vozilo {
    constructor() {
        super();
        this.course = "N";
    }
    getCourse() {
        return this.course;
    }
    setCourse(c) {
        if (c == "N" || c == "S" || c == "E" || c == "W") {
            this.course = c;
        }
    }
}

class Avion extends Letelica {
    constructor(){ super();}
}

class Helikopter extends Letelica {
    constructor(){ super();}
    moveFor(n) {
        if (n<=500) {
            super.moveFor(n);
        }
    }
}
class Putnici extends Vozilo {
    
}

var hel = new Helikopter();
hel.moveFor(600);
hel.moveFor(40);
hel.moveFor(500);
console.log( hel.getDistance());
var avi = new Avion();
avi.moveFor(600);
avi.moveFor(40);
avi.moveFor(500);
console.log(avi.getDistance());