function fill() {
    var niz = [];
    for (i = 0; i < 10; i++) {
        niz[i] = [];

        for (j = 0; j < 10; j++) {
            niz[i][j] = i * j; 
            console.log(niz);
        }
    }
}
var tablica = fill()   