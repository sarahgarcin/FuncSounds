const imgContainer = document.getElementById("images-container");
const videoContainer = document.getElementById("videos-container");
const txtContainer = document.getElementById("texts-container");

function changeBackground(color) {
  document.body.style.background = color;
}

// tout est en pixels
function addImage(file, top, left, width) {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = file;
  figure.appendChild(img);
  figure.style.top = top + "px";
  figure.style.left = left + "px";
  figure.style.width = width + "px";

  imgContainer.appendChild(figure);
}

function addVideo(file, top, left, width, mute) {
  const video = document.createElement("video");
  // Set attributes for autoplay and loop
  video.autoplay = true;
  video.loop = true;
  video.controls = false;
  video.muted = mute || true;
  const source = document.createElement("source");
  source.src = file;
  source.type = "video/mp4";
  video.appendChild(source);

  video.style.top = top + "px";
  video.style.left = left + "px";
  video.style.width = width + "px";

  videoContainer.appendChild(video);
}

function addText(text, fontsize, top, left, color, font) {
  let p = document.createElement("p");
  p.innerHTML = text;
  p.style.top = top + "px";
  p.style.left = left + "px";
  p.style.fontSize = fontsize + "px";
  p.style.color = color;
  p.style.fontFamily = font || "Adelphe, serif";

  txtContainer.appendChild(p);
}

function messyEffect(elements, min, max) {
  for (let a = 0; a < elements.length; a++) {
    let el = document.querySelectorAll(elements[a]);
    for (let i = 0; i < el.length; i++) {
      let rotation = random(min, max);
      el[i].style.transform = "rotate(" + rotation + "deg)";
    }
  }
}
