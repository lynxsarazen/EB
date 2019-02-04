// kad pravimo funkciju 
function myFuncton()                                    
{ 

var ime = document.forms["RegForm"]["Unesite Ime:"];               
var prezime = document.forms["RegForm"]["Unesite Prezime:"]; 
var telefon = document.forms["RegForm"]["Unesite telefon"];  
var imeprezime =  document.forms["RegForm"]["Unesite ime i prezime"];  
var email = document.forms["RegForm"]["EMail"];
var brracun = document.forms["RegForm"]["Racun"];  


if (ime.value == "")                                  
{ 
    window.alert("Unesite ime"); 
    name.focus(); 
    return false; 
} 

if (prezime.value == "")                               
{ 
    window.alert("Unesite prezime"); 
    name.focus(); 
    return false; 
} 
   
if (email.value == "")                                   
{ 
    window.alert("Unesite pravu e-mail adresu"); 
    email.focus(); 
    return false; 
} 

if (email.value.indexOf("@", 0) < 0)                 
{ 
    window.alert("Unesite pravu e-mail adresu"); 
    email.focus(); 
    return false; 
} 

if (email.value.indexOf(".", 0) < 0)                 
{ 
    window.alert("Unesite pravu e-mail adresu"); 
    email.focus(); 
    return false; 
} 

if (telefon.value == "")                           
{ 
    window.alert("Unesite vas telefon"); 
    phone.focus(); 
    return false; 
} 

if (imeprezime.value == "")                        
{ 
    window.alert("Unesite ime i prezime"); 
    password.focus(); 
    return false; 
} 

if (brracun.value == "")                  
{ 
    alert("Unesite broj racuna"); 
    what.focus(); 
    return false; 
} 

return true; 
}