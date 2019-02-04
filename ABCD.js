var div  = document.createElement("DIV");
div.setAttribute("id","ispis");

document.write(div);

var komentar = document.createComment(" ovo je komentar");
document.getElementById('ispis') .appendChild(komentar);