let sizeX = window.innerWidth;
let sizeY = window.innerHeight;
let fontSize = Math.max(sizeX*sizeY/100000,12);
const frequencysource = new fsource(sizeX/2, sizeY/2, 2, 50, 30, 10);
const frequencyobserver = new fobserver (sizeX/3*2, sizeY/2, 10, 0);
let wavefslider, wavevslider, ovxslider, ovyslider, svxslider, svyslider;

function setup() {
  createCanvas(sizeX, sizeY);
  
  setsliders();
  setcontrolbuttons();
}


function draw() {
  getvalues();
  background(33,33,33);
  frequencysource.render();
  frequencyobserver.render();
  
  drawtexts();
}

// setting up UI, there is for sure prettier way to set UI up

function getvalues(){
  frequencysource.f = wavefslider.value();
  frequencysource.fv = wavevslider.value();
  frequencyobserver.vx = ovxslider.value();
  frequencyobserver.vy = ovyslider.value();
  frequencysource.vx = svxslider.value();
  frequencysource.vy = svyslider.value();
}

function resetobserver(){
  frequencyobserver.reset();
}

function resetsource(){
  frequencysource.reset();
}


function setsliders(){
  wavefslider = createSlider(1, 100);
  wavefslider.position(200, 20)
  wavefslider.value(frequencysource.f);
  
  wavevslider = createSlider(1, 100);
  wavevslider.position(200, 20 + fontSize * 1.5)
  wavevslider.value(frequencysource.fv);
  
  ovxslider = createSlider(-50, 50);
  ovxslider.position(200, 20 + fontSize * 3)
  ovxslider.value(frequencyobserver.vx);
  
  ovyslider = createSlider(-50, 50);
  ovyslider.position(200, 20 + fontSize * 4.5)
  ovyslider.value(frequencyobserver.vy);
  
  svxslider = createSlider(-50, 50);
  svxslider.position(200, 20 + fontSize * 6)
  svxslider.value(frequencysource.vy);
  
  svyslider = createSlider(-50, 50);
  svyslider.position(200, 20 + fontSize * 7.5)
  svyslider.value(frequencysource.vy);
}


function setcontrolbuttons(){
  let resetbtno = createButton("Reset observer");
  resetbtno.position(sizeX/3, sizeY - 25)
  resetbtno.mouseClicked(resetobserver)
  let resetbtns = createButton("Reset source");
  resetbtns.position(sizeX/3*2, sizeY - 25)
  resetbtns.mouseClicked(resetsource)
}

function drawtexts(){
  if(sizeX == undefined || sizeY == undefined) return;
  fill(255);
  textSize(fontSize);
  text("f = " + frequencysource.f, 10, 30)
  text("Wave's v = " + frequencysource.fv, 10, 30 + 1.5 * fontSize)
  text("Observer's v on x = " + frequencyobserver.vx, 10, 30 + 3 * fontSize)
  text("Observer's v on y = " + frequencyobserver.vy, 10, 30 + 4.5 * fontSize)
  text("Source's v on x = " + frequencysource.vx, 10, 30 + 6 * fontSize)
  text("Source's v on y = " + frequencysource.vy, 10, 30 + 7.5 * fontSize)
}