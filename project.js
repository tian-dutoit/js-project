$(document).ready(function(){


  let laser = document.getElementsByTagName('audio')[0];
  let neutron = document.getElementsByTagName('audio')[1];
  let piano = document.getElementsByTagName('audio')[2];
  let bomb = document.getElementsByTagName('audio')[3];
  let game = document.getElementsByTagName('audio')[4];
  let boopboop = document.getElementsByTagName('audio')[5];
  let distbass = document.getElementsByTagName('audio')[6];



  var pingQ = function(){
    laser.play();
  };
  $('#q').click(pingQ);

  var pingW = function(){
    neutron.play();
  };
  $('#w').click(pingW);

  var pingE = function(){
    piano.play();
  };
  $('#e').click(pingE);

  var pingR = function(){
    bomb.play();
  };
  $('#r').click(pingR);

  var pingT = function(){
    game.play();
  };
  $('#t').click(pingT);

  var pingY = function(){
    boopboop.play();
  };
  $('#y').click(pingY);

  var pingU = function(){
    distbass.play();
  };
  $('#u').click(pingU);



});
