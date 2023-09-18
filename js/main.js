let displayText = true;

// launch init fuction
init();

async function init() {
  return new Promise((resolve) => {
    document.body.addEventListener("keydown", handleKeyDown);
    console.log("Welcome to funcsounds");
    resolve("init-done");
  });
}

function handleKeyDown(e) {
  if (e.key == "n") {
    playNote("sine", 200, 0.81, 0.2, 10, 30);
    changeBackground(shuffle("aquamarine, pink, yellow, brown, chartreuse"));
    addVideo(
      "images/station.mp4",
      random(100, 500),
      random(100, 500),
      200,
      true
    );
  }

  if (e.key == "b") {
    playSample("samples/over_3.mp3", 1, 1);
    addImage("images/chamber-of-ecstasy.png", 0, 0, 1280);
  }

  if (e.key == "v") {
    playMelody("sawtooth", [100, 200, 100, 200, 150, 200], 0.1, 0.1);
    addText("YOUPI", 100, random(0, 800), random(0, 1280), "black");
    messyEffect(["p", "figure"], -5, 5);
  }

  if (e.key == "a") {
    playSample("samples/over_3.mp3", 1, 1);
    addText(
      "TUUUUUUT",
      40,
      random(0, 800),
      random(0, 1280),
      shuffle("aquamarine, lightblue, yellow, blue, pink, magenta")
    );
  }

  if (e.key == "z") {
    playSample("samples/over_4.mp3", 1, 1);
    addText(
      shuffle("il, revient, olala"),
      80,
      random(0, 800),
      random(0, 1280),
      "black"
    );
  }

  if (e.key == "e") {
    playNote("triangle", 100, 0.5, 1);
  }

  if (e.key == "t") {
    playNote("sine", 120, 0.5, 1, 3, 50);
  }

  if (e.key == "y") {
    playNote("sine", 50, 1, 3);
    messyEffect(["p", "figure"], -15, 15);
  }

  if (e.key == "u") {
    playMelody("sine", [440, 523.25, 659.26], 0.5, 0.6);
  }

  if (e.key == "i") {
    playMelody("triangle", [100, 150, 100, 150, 120, 150], 0.4, 0.2);
  }

  if (e.key == "o") {
    playNote("triangle", 400, 0.1, 0.2, 60, 10);
  }

  if (e.key == "p") {
    playNote("sine", random(50, 120), 1, 0.5);
  }

  if (e.key == "q") {
    playMelody(
      "triangle",
      [
        shuffle("100,150,120"),
        shuffle("100,150,120"),
        shuffle("100,150,120"),
        shuffle("100,150,120"),
        shuffle("100,150,120"),
        shuffle("100,150,120"),
      ],
      0.4,
      0.2
    );
  }

  if (e.key == "l") {
    playNote(shuffle("triangle, sine, sawtooth, square"), 172, 0.9, 0.4);
  }

  if (e.key == "m") {
    playNote(shuffle("triangle, sine, sawtooth, square"), 172, 0.6, 0.4);
  }

  // functions visuelles

  if (e.key == "w") {
    addImage(
      shuffle(
        "images/bush_02.png, images/flower_01.png, images/flower_02.png, images/grasses_01.png, images/plant_01.png, images/plant_02.png"
      ),
      random(0, 800),
      random(0, 1280),
      random(100, 400)
    );
  }

  if (e.key == "x") {
    changeBackground(
      shuffle("aquamarine, lightblue, yellow, blue, pink, magenta")
    );
  }

  if (e.key == "c") {
    addImage(
      shuffle(
        "images/birds.png, images/chamber-of-ecstasy.png, images/clouds02.png, images/ring.png"
      ),
      random(0, 800),
      random(0, 1280),
      random(100, 400)
    );
  }
}
