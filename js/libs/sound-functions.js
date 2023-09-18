const main = document.getElementsByTagName("main")[0];

// jouer un sample
//playSample(fichier à lire, nombre de fois qu'il doit jouer en boucle [deault=1], interval in seconds, volume[default=1, de 0 à 1], pitch[default=1, de 0.3 à 3])
function playSample(file, gain, pitch, loop, interval) {
  let URL = file;
  // valeurs par défaut
  let numLoops = loop !== undefined ? loop : 1;
  let playbackTime = interval !== undefined ? interval : 0;
  let audioGain = gain !== undefined ? gain : 1;
  let audioPitch = pitch !== undefined ? pitch : 1;

  if (displayText) {
    let id = slugify(file);
    let textToDisplay =
      "function: playSample - file: " +
      URL +
      " - loop: " +
      numLoops +
      " - gain: " +
      audioGain +
      "- pitch: " +
      audioPitch +
      " - interval: " +
      playbackTime;

    displayDebugText(textToDisplay, id);
  }

  function playLoopedAudio(audio, loopsLeft) {
    if (loopsLeft <= 0) {
      // document.getElementById(id).remove();
      return;
    }

    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
      playLoopedAudio(audio, loopsLeft - 1);
    }, playbackTime * 1000);
  }

  let audio = new Audio(URL);
  audio.volume = audioGain;
  audio.playbackRate = audioPitch;

  playLoopedAudio(audio, numLoops);
}

function playNote(wave, note, audioGain, duration, loop, tempo) {
  // Default values
  let oscillatorType = wave !== undefined ? wave : "sine";
  let frequency = note !== undefined ? note : 440;
  let amplitude = audioGain !== undefined ? audioGain : 1;
  let audioDuration = duration !== undefined ? duration : 1;
  let numLoops = loop !== undefined ? loop : 1;
  let beatsPerMinute = tempo !== undefined ? tempo : 40;
  let secondsPerBeat = 60 / beatsPerMinute;

  if (displayText) {
    let textToDisplay =
      "function: playNote - wave: " +
      wave +
      " - note: " +
      frequency +
      "- gain: " +
      amplitude +
      " - duration: " +
      audioDuration +
      " - loop: " +
      numLoops +
      " - tempo: " +
      beatsPerMinute;
    let id =
      wave + frequency + amplitude + audioDuration + numLoops + beatsPerMinute;

    displayDebugText(textToDisplay, id);
  }

  // Create web audio api context
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  if (loop !== undefined && tempo !== undefined) {
    for (let i = 0; i < numLoops; i++) {
      const beatTime =
        audioCtx.currentTime + i * secondsPerBeat * audioDuration;
      playOscillator(
        audioCtx,
        oscillatorType,
        beatTime,
        audioDuration,
        amplitude,
        frequency
      );
    }
  } else {
    playOscillator(
      audioCtx,
      oscillatorType,
      audioCtx.currentTime,
      audioDuration,
      amplitude,
      frequency
    ); // Start the oscillator now
  }
}

function playMelody(wave, melody, rythms, audioGain, loop, tempo) {
  // Default values
  let oscillatorType = wave !== undefined ? wave : "sine";
  let amplitude = audioGain !== undefined ? audioGain : 1;
  let numLoops = loop !== undefined ? loop : 1;
  let beatsPerMinute = tempo !== undefined ? tempo : 40;
  let secondsPerBeat = 60 / beatsPerMinute;

  if (melody.length !== rythms.length) {
    console.error("Melody lenght and rythms lenght do not match");
    return;
  }

  if (displayText) {
    let id =
      wave + melody[0] + rythms[0] + amplitude + numLoops + beatsPerMinute;

    let textToDisplay =
      "function: playMelody - wave: " +
      wave +
      " - notes: " +
      melody +
      " - rythmes: " +
      rythms +
      "- gain: " +
      amplitude +
      " - loop: " +
      numLoops +
      " - tempo: " +
      tempo;

    displayDebugText(textToDisplay, id);
  }

  // Create web audio api context
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  let currentTime = audioCtx.currentTime;

  if (loop === undefined || tempo === undefined) {
    console.error("Loop or Tempo not defined, Can not play melody");
    return;
  }

  const melodyDuration =
    rythms.reduce((acc, current) => {
      acc += current;
      return acc;
    }, 0) * secondsPerBeat;

  console.log("Duration: ", melodyDuration);

  for (let j = 0; j < numLoops; j++) {
    for (let i = 0; i < melody.length; i++) {
      const frequency = melody[i];
      const rythm = rythms[i];

      console.log(currentTime);

      playOscillator(
        audioCtx,
        oscillatorType,
        currentTime,
        rythm * secondsPerBeat,
        amplitude,
        frequency
      );

      currentTime += secondsPerBeat * rythm;
    }
  }
}

// Play a predefine oscilator
function playOscillator(
  audioCtx,
  oscillatorType,
  startTime,
  audioDuration,
  amplitude,
  frequency
) {
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  oscillator.type = oscillatorType;
  oscillator.frequency.value = frequency;
  gain.gain.value = amplitude;

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + audioDuration);
  oscillator.onended = () => {
    oscillator.disconnect();
    gain.disconnect();
  };
}

// retourne un nombre aléatoire entre minimum et maximum
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// retourne un nombre aléatoire entre plusieurs chiffres listés (merci RB)
function shuffle(list) {
  if (!Array.isArray(list)) {
    list = list.split(",");
  }
  let val = list[Math.floor(Math.random() * list.length)];
  return val;
}

function displayDebugText(textToDisplay, id) {
  let displaySample = document.createElement("p");
  displaySample.classList.add("info");
  displaySample.setAttribute("id", id);
  displaySample.innerHTML = textToDisplay;
  main.prepend(displaySample);
}

// Slugify a string
function slugify(str) {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]/g, "") // Remove non-word characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
    .trim(); // Trim any leading/trailing whitespace
}
