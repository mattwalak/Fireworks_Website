let button;
function setup() {
  createCanvas(1000, 1000);
  background(0);
  button = createButton('click me');
  button.position(0, 0);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(255);
  background(val);

  sendMessage();
}