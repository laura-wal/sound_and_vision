// //console.log('hello');
// math code for pie....

 $( document ).ready(function() {

var styleChars = function () {
  var myText = document.getElementById("myText");
  
  for(var i=0; i<myText.childNodes.length; i++) {
    var toBeStyled = myText.childNodes[i];
    
    if (toBeStyled.className == "styleChars") {
      var chars = toBeStyled.firstChild.nodeValue.split("");
      
      var nodeStr = "";
      for (var j=0; j<chars.length; j++) {
        nodeStr += '<span class="c_' + chars[j] + '">' + chars[j] + '</span>';
      };
      
      toBeStyled.innerHTML = nodeStr;
    }
  };
  
};

window.onload = styleChars;


//sound code below =----------------


      console.log("hello")

      soundManager.onload= function(){
          soundManager.createSound({
            id:'mySound1',
            url:'audiofiles/204456__nhumphrey__blaster-04.wav'
            });

          soundManager.createSound({
            id:'mySound2',
            url:'audiofiles/39469__the-bizniss__thwack-3.wav'
            });


           soundManager.createSound({
            id:'mySound3',
            url:'audiofiles/55572__noisecollector__tractorbeamloophighfreq.wav'
            });

          soundManager.createSound({
            id:'mySound4',
            url:'audiofiles/95802__robinhood76__01670-electric-future-blast.wav'
            });

           soundManager.createSound({
            id:'mySound5',
            url:'audiofiles/125109__oddworld__sfx-trio-dtmf-01.wav'
            });

          soundManager.createSound({
            id:'mySound6',
            url:'audiofiles/164102__bmaczero__laser.wav'
            });

           soundManager.createSound({
            id:'mySound7',
            url:'audiofiles/184538__altemark__claves4.wav'
            });

          soundManager.createSound({
            id:'mySound8',
            url:'audiofiles/195959__alienxxx__space-gun-011.wav'
            });

           soundManager.createSound({
            id:'mySound9',
            url:'audiofiles/221560__alaskarobotics__laser-shot.wav'
            });

          soundManager.createSound({
            id:'mySound10',
            url:'audiofiles/254849__myoss__str-slap-02.wav'
            });



        $('.c_0').on('mouseenter', function(){
            console.log("hello")
          var mySound = soundManager.createSound({
            url: 'audiofiles/204456__nhumphrey__blaster-04.wav' 
         });
          $(this).css('backgroundColor', 'red')
          mySound.play();
        });

         $('.c_1').on('mouseenter', function(){
            console.log("hello")
          var mySound = soundManager.createSound({
            url: 'audiofiles/39469__the-bizniss__thwack-3.wav'   
         });
          $(this).css('backgroundColor', 'orange') 
          mySound.play();
        });

         $('.c_2').on('mouseenter', function(){
            console.log("hello")
          var mySound = soundManager.createSound({
            url: 'audiofiles/55572__noisecollector__tractorbeamloophighfreq.wav' 
         });
          $(this).css('backgroundColor', 'yellow')
          mySound.play();
        });

         $('.c_3').on('mouseenter', function(){
            console.log("hello")
          var mySound = soundManager.createSound({
            url: 'audiofiles/95802__robinhood76__01670-electric-future-blast.wav'
         });
          $(this).css('backgroundColor', 'green')
          mySound.play();
        });

         $('.c_4').on('mouseenter', function(){
            console.log("hello")
          var mySound = soundManager.createSound({
            url: 'audiofiles/125109__oddworld__sfx-trio-dtmf-01.wav'
         });
          $(this).css('backgroundColor', 'blue')
          mySound.play();
        });

         $('.c_5').on('mouseenter', function(){
            console.log("hello")
          var mySound = soundManager.createSound({
            url: 'audiofiles/164102__bmaczero__laser.wav' 
         });
          $(this).css('backgroundColor', 'indigo')
          mySound.play();
        });

        $('.c_6').on('mouseenter', function(){
            console.log("hello")
          var mySound = soundManager.createSound({
            url: 'audiofiles/184538__altemark__claves4.wav' 
         });
          $(this).css('backgroundColor', 'violet')
          mySound.play();
        });

         $('.c_7').on('mouseenter', function(){
            console.log("hello")
          var mySound = soundManager.createSound({
            url: 'audiofiles/195959__alienxxx__space-gun-011.wav' 
         });
        $(this).css('backgroundColor', 'navy')
          mySound.play();
        });


      $('.c_8').on('mouseenter', function(){
            console.log("hello")
          var mySound = soundManager.createSound({
            url: 'audiofiles/221560__alaskarobotics__laser-shot.wav' 
         });
          $(this).css('backgroundColor', 'fuchsia')
          mySound.play();
        });

         $('.c_9').on('mouseenter', function(){
            var mySound = soundManager.createSound({
            url: 'audiofiles/254849__myoss__str-slap-02.wav' 
         });
          $(this).css('backgroundColor', 'lime')
          mySound.play();

        });

    }

//  $('c_9').on('mouseenter', function(){ $(this).css(backgroundColor, 'red')
  //})



 });