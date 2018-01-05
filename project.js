$(document).ready(function(){





//creats and deletes a new element to allow you to play a sound again before it has finished playing.
  var playSound = function(){
    var click= document.createElement("audio");
    click.src = "sounds/" + source;
    click.addEventListener("ended", function () {
      document.removeChild(this);
    }, false);
    click.play();
  };

//switch for keypress
  $(document).keydown(function (e){
    switch(e.which){
      case 81: source = "laser.wav";
               playSound(); //q
      break;
      case 87: source = "neutron.wav";
               playSound(); //w
      break;
      case 69: source = "combteeth.mp3";
               playSound(); //e
      break;
      case 82: source = "arcade.mp3";
               playSound(); //r
      break;
      case 84: source = "scifi.mp3";
               playSound(); //t
      break;
      case 89: source = "meow.mp3";
               playSound(); //y
      break;
      case 85: source = "spray.mp3";
               playSound(); //u
      break;
      case 73: source = "drum.mp3";
               playSound(); //i
      break;
      case 79: source = "wood.mp3";
               playSound(); //o
      break;
      case 80: source = "doorbell.mp3";
               playSound(); //p
      break;
      case 65: source = "recorder.mp3";
               playSound(); //a
      break;
      case 83: source = "fret.mp3";
               playSound(); //s
      break;
      case 68: source = "vibrate.mp3";
               playSound(); //d
      break;
      case 70: source = "handbrake.mp3";
               playSound(); //f
      break;
      case 71: source = "airhorn.mp3";
               playSound(); //g
      break;
      case 72: source = "whistle.mp3";
               playSound(); //h
      break;
      case 74: source = "coinslot.mp3";
               playSound(); //j
      break;
      case 75: source = "woosh.mp3";
               playSound(); //k
      break;
      case 76: source = "descend.mp3";
               playSound(); //l
      break;
      case 186: source = "elephant.mp3";
               playSound(); //;
      break;
      case 90: source = "trill.mp3";
               playSound(); //z
      break;
      case 88: source = "yawn.mp3";
               playSound(); //x
      break;
      case 67: source = "burp.mp3";
               playSound(); //c
      break;
      case 86: source = "distbass.wav";
               playSound(); //v
      break;
      case 66: source = "buffalo.mp3";
               playSound(); //b
      break;
      case 78: source = "boopboop.wav";
               playSound(); //n
      break;
      case 77: source = "moo.mp3";
               playSound(); //m
      break;
      case 188: source = "bomb.wav";
               playSound(); //,
      break;
      case 190: source = "game.wav";
               playSound(); //.
      break;
      case 191: source = "piano.wav";
               playSound(); // /
      break;
    }
  });

  //switch for button click
  $('button').click(function () {
    switch ($(this).attr('id')) {
      case 'q': source = "laser.wav";
               playSound(); //q
      break;
      case 'w': source = "neutron.wav";
               playSound(); //w
      break;
      case 'e': source = "combteeth.mp3";
               playSound(); //e
      break;
      case 'r': source = "arcade.mp3";
               playSound(); //r
      break;
      case 't': source = "scifi.mp3";
               playSound(); //t
      break;
      case 'y': source = "meow.mp3";
               playSound(); //y
      break;
      case 'u': source = "spray.mp3";
               playSound(); //u
      break;
      case 'i': source = "drum.mp3";
               playSound(); //i
      break;
      case 'o': source = "wood.mp3";
               playSound(); //o
      break;
      case 'p': source = "doorbell.mp3";
               playSound(); //p
      break;
      case 'a': source = "recorder.mp3";
               playSound(); //a
      break;
      case 's': source = "fret.mp3";
               playSound(); //s
      break;
      case 'd': source = "vibrate.mp3";
               playSound(); //d
      break;
      case 'f': source = "handbrake.mp3";
               playSound(); //f
      break;
      case 'g': source = "airhorn.mp3";
               playSound(); //g
      break;
      case 'h': source = "whistle.mp3";
               playSound(); //h
      break;
      case 'j': source = "coinslot.mp3";
               playSound(); //j
      break;
      case 'k': source = "woosh.mp3";
               playSound(); //k
      break;
      case 'l': source = "descend.mp3";
               playSound(); //l
      break;
      case ';': source = "elephant.mp3";
               playSound(); //;
      break;
      case 'z': source = "trill.mp3";
               playSound(); //z
      break;
      case 'x': source = "yawn.mp3";
               playSound(); //x
      break;
      case 'c': source = "burp.mp3";
               playSound(); //c
      break;
      case 'v': source = "distbass.wav";
               playSound(); //v
      break;
      case 'b': source = "buffalo.mp3";
               playSound(); //b
      break;
      case 'n': source = "boopboop.wav";
               playSound(); //n
      break;
      case 'm': source = "moo.mp3";
               playSound(); //m
      break;
      case ',': source = "bomb.wav";
               playSound(); //,
      break;
      case '.': source = "game.wav";
               playSound(); //.
      break;
      case '/': source = "piano.wav";
               playSound(); // /
      break;
    }
  });

});
