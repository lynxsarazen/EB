/*var niz = [prvi, drugi, treci, cetvrti, peti]
var prvi = {
    fullName: "Grgur Beli",
    yearOfBirth: 1955
}
var drugi = {
    fullName: "Kale Gospodar",
    yearOfBirth: 1988
}
var treci = {
    fullName: "Lane Moje",
    yearOfBirth: 1977
}
var cetvrti = {
    fullName: "Ist River",
    yearOfBirth: 1947
}
var peti = {
    fullName: "Den Zen",
    yearOfBirth:1989
}
for (var = i
*/


var niz = [
    {
        fullName: "Grgur Beli",
        yearOfBirth: 1955
    },
    {
        fullName: "Kale Gospodar",
        yearOfBirth: 1988
    },
    {
        fullName: "Lane Moje",
        yearOfBirth: 1977
    },
    {
        fullName: "Ist River",
        yearOfBirth: 1947
    },
    {
        fullName: "Den Zen",
        yearOfBirth: 1989
    }
];
for (let i = 0; i < niz.length; i++) {
    var fName = niz[i].fullName.split(' ');
    niz[i].firstName = fName[0];
    niz[i].lastName = fName[1];
    
    for (var index in array) {
        console.log(niz[index]);
  //moze i sa funkcijom umesto for
    function extractFirstAndLastName(niz) {
    var fName = niz[i].fullName.split(' ');
    niz[i].firstName = fName[0];
    niz[i].lastName = fName[1];
}

};
// i ovo se doda 
function extractFirstAndLastName(array)
for (var index in array) {
    console.log(niz[index]);
};
    //svojstvo/property moze da se doda i sa tackom ali i sa uglastom zagradom

