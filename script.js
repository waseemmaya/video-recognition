function drawImge() {
  console.log("drawImge: ");
  var video = document.querySelector("#webCamera");
  var canvas = document.querySelector("#videoCanvas");
  var ctx = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  var faceArea = 150;

  let a = Math.round(Math.random() * 4);
  console.log("a: ", a);

  var pX = canvas.width / a - faceArea / a;
  var pY = canvas.height / a - faceArea / a;

  // var pX = canvas.width / 2 - faceArea / 2;
  // var pY = canvas.height / 2 - faceArea / 2;

  ctx.rect(pX, pY, faceArea, faceArea);
  ctx.lineWidth = "6";
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.stroke();

  setTimeout(drawImge, 100);
}

function play() {
  console.log("play");
  var video = document.querySelector("#webCamera");
  video.onplay = function () {
    console.log("onPlay");
    setTimeout(drawImge, 100);
  };
}
