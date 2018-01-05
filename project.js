$(document).ready(function(){


  let laser = document.getElementsByTagName('audio')[0];
  let neutron = document.getElementsByTagName('audio')[1];
  let piano = document.getElementsByTagName('audio')[2];
  let bomb = document.getElementsByTagName('audio')[3];
  let game = document.getElementsByTagName('audio')[4];
  let boopboop = document.getElementsByTagName('audio')[5];
  let distbass = document.getElementsByTagName('audio')[6];
  let  = document.getElementsByTagName('audio')[7];
  let  = document.getElementsByTagName('audio')[8];
  let  = document.getElementsByTagName('audio')[9];
  let  = document.getElementsByTagName('audio')[10];
  let  = document.getElementsByTagName('audio')[11];
  let  = document.getElementsByTagName('audio')[12];
  let  = document.getElementsByTagName('audio')[13];
  let  = document.getElementsByTagName('audio')[14];
  let  = document.getElementsByTagName('audio')[15];
  let  = document.getElementsByTagName('audio')[16];
  let  = document.getElementsByTagName('audio')[17];
  let  = document.getElementsByTagName('audio')[18];
  let  = document.getElementsByTagName('audio')[19];
  let  = document.getElementsByTagName('audio')[20];
  let  = document.getElementsByTagName('audio')[21];
  let  = document.getElementsByTagName('audio')[22];
  let  = document.getElementsByTagName('audio')[23];
  let  = document.getElementsByTagName('audio')[24];
  let  = document.getElementsByTagName('audio')[25];
  let  = document.getElementsByTagName('audio')[26];
  let  = document.getElementsByTagName('audio')[27];
  let  = document.getElementsByTagName('audio')[28];
  let  = document.getElementsByTagName('audio')[29];
  let  = document.getElementsByTagName('audio')[30];

///switch


//var selection = 0;
$(document).keydown(function (e){
  switch(e.which){
    case 81: laser.play(); //q
    break;
    case 87: neutron.play(); //w
    break;
    case 69: neutron.play(); //e
    break;
    case 82: neutron.play(); //r
    break;
    case 84: neutron.play(); //t
    break;
    case 89: neutron.play(); //y
    break;
    case 85: neutron.play(); //u
    break;
    case 73: neutron.play(); //i
    break;
    case 79: neutron.play(); //o
    break;
    case 80: neutron.play(); //p
    break;
    case 65: neutron.play(); //a
    break;
    case 83: neutron.play(); //s
    break;
    case 68: neutron.play(); //d
    break;
    case 70: neutron.play(); //f
    break;
    case 71: neutron.play(); //g
    break;
    case 72: neutron.play(); //h
    break;
    case 74: neutron.play(); //j
    break;
    case 75: neutron.play(); //k
    break;
    case 76: neutron.play(); //l
    break;
    case 186: neutron.play(); //;
    break;
    case 90: neutron.play(); //z
    break;
    case 88: neutron.play(); //x
    break;
    case 67: neutron.play(); //c
    break;
    case 86: neutron.play(); //v
    break;
    case 66: neutron.play(); //b
    break;
    case 78: neutron.play(); //n
    break;
    case 77: neutron.play(); //m
    break;
    case 188: neutron.play(); //,
    break;
    case 190: neutron.play(); //.
    break;
    case 191: neutron.play(); // /
    break;
  }
});


$('button').click(function () {
    switch ($(this).attr('id')) {
      case 'q': laser.play(); //q
      break;
      case 'w': neutron.play(); //w
      break;
      case 'e': neutron.play(); //e
      break;
      case 'r': neutron.play(); //r
      break;
      case 't': neutron.play(); //t
      break;
      case 'y': neutron.play(); //y
      break;
      case 'u': neutron.play(); //u
      break;
      case 'i': neutron.play(); //i
      break;
      case 'o': neutron.play(); //o
      break;
      case 'p': neutron.play(); //p
      break;
      case 'a': neutron.play(); //a
      break;
      case 's': neutron.play(); //s
      break;
      case 'd': neutron.play(); //d
      break;
      case 'f': neutron.play(); //f
      break;
      case 'g': neutron.play(); //g
      break;
      case 'h': neutron.play(); //h
      break;
      case 'j': neutron.play(); //j
      break;
      case 'k': neutron.play(); //k
      break;
      case 'l': neutron.play(); //l
      break;
      case ';': neutron.play(); //;
      break;
      case 'z': neutron.play(); //z
      break;
      case 'x': neutron.play(); //x
      break;
      case 'c': neutron.play(); //c
      break;
      case 'v': neutron.play(); //v
      break;
      case 'b': neutron.play(); //b
      break;
      case 'n': neutron.play(); //n
      break;
      case 'm': neutron.play(); //m
      break;
      case ',': neutron.play(); //,
      break;
      case '.': neutron.play(); //.
      break;
      case '/': neutron.play(); // /
      break;
    }
});


  // var pingQ = function(){
  //   laser.play();
  // };
  // $('#q').click(pingQ);
  //
  //
  // var pingW = function(){
  //   neutron.play();
  // };
  // $('#w').click(pingW);
  //
  // var pingE = function(){
  //   piano.play();
  // };
  // $('#e').click(pingE);
  //
  // var pingR = function(){
  //   bomb.play();
  // };
  // $('#r').click(pingR);
  //
  // var pingT = function(){
  //   game.play();
  // };
  // $('#t').click(pingT);
  //
  // var pingY = function(){
  //   boopboop.play();
  // };
  // $('#y').click(pingY);
  //
  // var pingU = function(){
  //   distbass.play();
  // };
  // $('#u').click(pingU);
  //


});
