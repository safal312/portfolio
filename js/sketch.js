function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('canvasContainer');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// drawing only at specific frames, giving a very organic texture in bg
function draw() {
  stroke(100);
  line(pmouseX, pmouseY, mouseX, mouseY);
}