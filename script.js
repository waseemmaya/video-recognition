function drawImge() {
  console.log("drawImge: ");
  var video = document.querySelector("#webCamera");
  var canvas = document.querySelector("#videoCanvas");
  var ctx = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  var faceArea = 300;
  var pX = canvas.width / 2 - faceArea / 2;
  var pY = canvas.height / 2 - faceArea / 2;

  ctx.rect(pX, pY, faceArea, faceArea);
  ctx.lineWidth = "6";
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.stroke();

  setTimeout(drawImge, 100);
}

var video = document.querySelector("#webCamera");
video.onplay = function () {
  setTimeout(drawImge, 300);
};
