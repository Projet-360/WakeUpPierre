
//  GRAINED
var options = {
  "animate": true,
  "patternWidth": 400,
  "patternHeight": 400,
  "grainOpacity": 1,
  "grainDensity": 1,
  "grainWidth": 1.5,
  "grainHeight": 1.5
}
grained("#legrain", options);

var animationStart = function() { 

    // ANIMATION CLASS
    const SecondContainer = document.querySelector('#secondContainer')
    const typeWriterSelect = document.querySelector('#typewriter')
    const boxSelect = document.querySelector('.box')
  
    createSecondContainer = () => {
      SecondContainer.style.opacity = '1';
      typeWriterSelect.style.fontSize = '38px'
      boxSelect.style.filter = 'blur(.5px)'
      SecondContainer.innerHTML = `
        <img src="./background-rotation2.png" alt="">
      `
    }
    setTimeout( createSecondContainer, 36500);
  
    destroySecondContainer = () => {
      SecondContainer.style.opacity = '0';
      typeWriterSelect.style.fontSize = '20px'
      boxSelect.style.filter = 'blur(1.5px)'
    }
    setTimeout( destroySecondContainer, 44000);

  
    //  TYPEWRITER
    const typewriter = new Typewriter('#typewriter', {
    });

    typeWriter = () => {
      typewriter.typeString('Wake up, Pierre ...')
      .pauseFor(1500)
      .typeString('<br>Comtazic has you !')
      .pauseFor(3500)
      .typeString('<br>Follow the white rabbit')
      .pauseFor(4000)
      .typeString('<br>Knock, knock, Pierre')
      .deleteChars(6)
      .typeString('You are the chosen one !!')
      .pauseFor(4000)
      .deleteChars(104)
      .typeString('I hope to get the red pill')
      .pauseFor(2000)
      .typeString('<br>Bye, Bye')
      .pauseFor(1000)
      .start()
    }
    setTimeout( typeWriter, 10000);


    // PRELOADER DESTROY
    destroyPreloader = () => {
      let preloader = document.querySelector('.preloader')
      preloader.remove()
    }
    setTimeout( destroyPreloader, 10000);

    // AUDIO
    var source = "./audio.mp3"
    var audio = document.createElement("audio");

    audio.load()

    setTimeout(() => {
        audio.play(); 
    }, 1000)

    audio.src = source;
}

const starter = document.querySelector('.starter')
starter.addEventListener('click', animationStart , false);