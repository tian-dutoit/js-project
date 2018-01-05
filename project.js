$(document).ready(function(){


  let laser = document.getElementsByTagName('audio')[0];
  let neutron = document.getElementsByTagName('audio')[1];
  let piano = document.getElementsByTagName('audio')[2];
  let bomb = document.getElementsByTagName('audio')[3];
  let game = document.getElementsByTagName('audio')[4];
  let boopboop = document.getElementsByTagName('audio')[5];
  let distbass = document.getElementsByTagName('audio')[6];

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


$(document).keydown(function (e) {
  if (e.which === 81) {
    pingQ();
  }
  else if(e.which === 87){
    pingW();
  }
  else if(e.which === 69){
    pingE();
  }
  else if(e.which === 82){
    pingR();
  }
  else if(e.which === 84){
    pingT();
  }
  else if(e.which === 89){
    pingY();
  }
  else if(e.which === 85){
    pingU();
  }
})
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
