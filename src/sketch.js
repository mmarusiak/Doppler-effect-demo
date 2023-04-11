const frequencysource = new fsource(200, 200, 2, 50, 30);
const frequencyobserver = new fobserver (250, 200, 10, 0);
let wavefslider, wavevslider, ovxslider, ovyslider;

function setup() {
  createCanvas(400, 400);
  
  wavefslider = createSlider(1, 100);
  wavefslider.position(200, 20)
  wavefslider.value(frequencysource.f);
  
  wavevslider = createSlider(1, 100);
  wavevslider.position(200, 40)
  wavevslider.value(frequencysource.fv);
  
  ovxslider = createSlider(-50, 50);
  ovxslider.position(200, 60)
  ovxslider.value(frequencyobserver.vx);
  
  ovyslider = createSlider(-50, 50);
  ovyslider.position(200, 80)
  ovyslider.value(frequencyobserver.vy);
  
  let resetbtn = createButton("Reset observer");
  resetbtn.position(150, 380)
  resetbtn.mouseClicked(resetobserver)
}


function draw() {
  getvalues();
  background(40);
  frequencysource.render();
  frequencyobserver.render();
  fill(255)
  text("f = " + frequencysource.f, 10, 30)
  text("Wave's v = " + frequencysource.fv, 10, 50)
  text("Observer's v on x = " + frequencyobserver.vx, 10, 70)
  text("Observer's v on y = " + frequencyobserver.vy, 10, 90)
}

function getvalues(){
  frequencysource.f = wavefslider.value();
  frequencysource.fv = wavevslider.value();
  frequencyobserver.vx = ovxslider.value();
  frequencyobserver.vy = ovyslider.value();
}

function resetobserver(){
  frequencyobserver.reset();
}
