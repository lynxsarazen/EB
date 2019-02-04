//kolacici se koriste samo ako idemo na isti domen, brisu se 
var d = new Date ();
d.setTime(d.getTime() + (5*24*60*60*1000));
var cookie ="lecturer=Ucha;expires=" + d.toUTCString();
document.cookie = cookie;

