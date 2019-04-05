const ctx = canvas.getContext("2d");
let cw = (canvas.width = window.innerWidth);
let ch = (canvas.height = window.innerHeight);
let iw, ih, IW, IH;

var img = new Image();
// this is just an example. Use whatever image you want
img.src =
  "https://images.unsplash.com/photo-1553116505-b22bf68174a1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ";

img.onload = function() {
  iw = img.width;
  ih = img.height;
  console.log();
  canvasCover();
};

function canvasCover() {
  // the ratio between the width and the height of the canvas
  let c_ratio = cw / ch;
  // the ratio between the width and the height of the image
  let i_ratio = iw / ih;

  if (c_ratio == i_ratio) {
    ctx.drawImage(img, 0, 0, cw, ch);
  }

  if (c_ratio > i_ratio) {
    let ratio = cw / iw;
    IW = cw;
    IH = ih * ratio;
    let offsetY = -(IH - ch) / 2; // to center the image
    ctx.drawImage(img, 0, offsetY, IW, IH);
  }

  if (c_ratio < i_ratio) {
    let ratio = ch / ih;
    IH = ch;
    IW = iw * ratio;
    let offsetX = -(IW - cw) / 2; // to center the image
    ctx.drawImage(img, offsetX, 0, IW, IH);
  }
}

function Init() {
  cw = canvas.width = window.innerWidth;
  ch = canvas.height = window.innerHeight;
  canvasCover();
}

window.setTimeout(function() {
  Init();
  window.addEventListener("resize", Init, false);
}, 15);
