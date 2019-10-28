//Load MobileNets

const classAnalyzer = ml5.featureExtractor('MobileNet', classAnalyzerlLoaded);
const orderAnalyzer = ml5.featureExtractor('MobileNet', orderAnalyzerLoaded);
const vulAnalyzer = ml5.featureExtractor('MobileNet', vulAnalyzerLoaded);
const dietAnalyzer = ml5.featureExtractor('MobileNet', dietAnalyzerLoaded);
const alignAnalyzer = ml5.featureExtractor('MobileNet', alignAnalyzerLoaded);
const aggrAnalyzer = ml5.featureExtractor('MobileNet', aggrAnalyzerLoaded);

//Regression

const classification = classAnalyzer.regression();
const order = orderAnalyzer.regression();
const vulnerabilities = vulAnalyzer.regression();
const diet = dietAnalyzer.regression();
const alignment = alignAnalyzer.regression();
const aggression = aggrAnalyzer.regression();

//Load MobileNet Callbacks

function classAnalyzerlLoaded() {
  classification.load('1classification/model.json', classModelLoaded)
  console.log('Class Analyzer Loaded!');
}

function orderAnalyzerLoaded() {
  order.load('2order/model.json', orderModelLoaded)
  console.log('Order Analyzer Loaded!');
}

function vulAnalyzerLoaded() {
  vulnerabilities.load('3vulnerabilities/model.json', vulModelLoaded)
  console.log('Vulnerability Analyzer Loaded!');
}

function dietAnalyzerLoaded() {
  diet.load('4diet/model.json', dietModelLoaded)
  console.log('Diet Analyzer Loaded!');
}

function alignAnalyzerLoaded() {
  alignment.load('5alignment/model.json', alignModelLoaded)
  console.log('Alignment sAnalyzer Loaded!');
}

function aggrAnalyzerLoaded() {
  aggression.load('6aggression/model.json', aggrModelLoaded)
  console.log('Aggression Analyzer Loaded!');
}

//Load custom Models

function classModelLoaded() {
  console.log('Class Model is ready!!!');

}

function orderModelLoaded() {
  console.log('Order Model is ready!!!');

}

function vulModelLoaded() {
  console.log('Vulnerability Model is ready!!!');

}

function dietModelLoaded() {
  console.log('Diet Model is ready!!!');

}

function alignModelLoaded() {
  console.log('Alignment Model is ready!!!');

}

function aggrModelLoaded() {
  console.log('Aggression Model is ready!!!');
  indicator = true;

}

// blank imagge variable
let img;
// Drawing Space
let mX;
let mY;
let canvasX1;
let canvasX2;
let canvasY1;
let canvasY2;
// Inputs
let nameIn; //Name the image
let nameLoad //Load the image with this name
//Placeholders
let monName;
let monLoad;
// Buttons
let savImg;
let genMon;
let loadMon;
//
let indicator = false;// indicates whether or not all the models are loaded


function setup() {
  createCanvas(1695, 824);

  //Input for monster Name
  nameIn = createInput();
  nameIn.position(250, 115);

  //Loads this file as an image
  nameLoad = createInput();
  nameLoad.position(950, 115)

  //Button to Save image & run Classifier
  savImg = createButton('Save Image');
  savImg.position(440, 710);
  savImg.mousePressed(saveimg);

  //Button to Load image
  loadMon = createButton('Load Monster')
  loadMon.position(1050, 710)
  loadMon.mousePressed(loadMonster);

  //Button that actually classifies the images
  genMon = createButton('Generate Monster Traits');
  genMon.position(850, 710);
  genMon.mousePressed(classifyImg);
  // Button to clear 'Canvas'
  clBut = createButton('Clear');
  clBut.position(380, 710);
  clBut.mousePressed(clearSpace);

  //
  background(220);
  // Drawing space
  rect(width / 40, height / 6, 550, 550);
  strokeWeight(2);
  line((width / 2) - 150, 0, (width / 2) - 150, height)
  fill(255)

};

function draw() {
  textSize(20)
    text('Name your Monster!',245,100)
  if (indicator == true) { //if the indicator is false, the models are not done loading. Subsequently, the labels will be Red instead of Green
    // Labels
    fill(0, 179, 0)
    text('Class:', 1450, 140)
    text('Order:', 1450, 220)
    text('Vulnerability:', 1450, 300)
    text('Diet:', 1450, 380)
    text('Alignment:', 1450, 460)
    text('Aggression:', 1450, 540)
    textSize(28)
    text('Models are Ready', 1000, 50)
  } else {
    fill(236, 58, 58)
    text('Class', 1450, 140)
    text('Order', 1450, 220)
    text('Vulnerability', 1450, 300)
    text('Diet', 1450, 380)
    text('Alignment', 1450, 460)
    text('Aggression', 1450, 540)

  }

  // Variables for the drawing Space

  mX = mouseX;
  mY = mouseY;
  canvasX1 = width / 40;
  canvasX2 = (width / 40) + 547;
  canvasY1 = height / 6;
  canvasY2 = (height / 6) + 547;
  noStroke();
  fill(255);

// While the mouse is in the square and the mouse is being pressed, the "Pen" will be able to draw
  if (mX > canvasX1 + 3) {
    if (mX < canvasX2) {
      if (mY > canvasY1 + 3) {
        if (mY < canvasY2) {
          fill(0)
          //ellipse(mouseX,mouseY,10,10);
          if (mouseIsPressed) {
            ellipse(mX, mY, 5, 5);
          }

        }
      }
    }
  }
fill(0)

}
// Function to save the image
function saveimg() {
  let monsterDrawing = get(canvasX1, canvasY1, 550, 550);
  monName = nameIn.value();
  save(monsterDrawing, monName + ".jpg");
  console.log('Image Saved')
}

//Function that makes a prediction of the image that has been loaded
function classifyImg() {
  fill(220)
  rect(1400,0,width,height)
  fill(0)
  textSize(15)

  classification.predict(img, function(err, results) {
    let resRound = round(results.value) //Regression value is rounded off
    console.log(results);
    switch (resRound) { // switch, case conditional for different values
      case 1:
        cl = "Beast";
        break;
      case 2:
        cl = "Fae";
        break;
      case 3:
        cl = "Harbinger";
        break;
      case 4:
        cl = "Fiend";
        break;
      case 5:
        cl = "Undead";
    }
    text(cl, 1500, 180) // Text is printed on screen
  });

  order.predict(img, function(err, results) {
    let resRound = round(results.value)
    console.log(results);
    switch (resRound) {
      case 1:
        or = "Cryptid";
        break;
      case 2:
        or = "Shapeshifter";
        break;
      case 3:
        or = "Spirit";
        break;
      case 4:
        or = "Humanoid";
        break;
      case 5:
        or = "Elemental";
    }
    text(or, 1500, 260)
  });

  vulnerabilities.predict(img, function(err, results) {
    let resRound = round(results.value)
    console.log(results);
    switch (resRound) {
      case 1:
        vl = "Decapitation";
        break;
      case 2:
        vl = "N/A";
        break;
      case 3:
        vl = "Silver";
        break;
      case 4:
        vl = "Salt";
        break;
      case 5:
        vl = "Iron";
    }
    text(vl, 1500, 340)
  });

  diet.predict(img, function(err, results) {
    let resRound = round(results.value)
    console.log(results);
    switch (resRound) {
      case 1:
        dt = "Carnivore";
        break;
      case 2:
        dt = "Omnivore";
        break;
      case 3:
        dt = "Herbivore";
        break;
      case 4:
        dt = "N/A";
    }
    text(dt, 1500, 420)
  });

  alignment.predict(img, function(err, results) {
    let resRound = round(results.value)
    console.log(results);
    switch (resRound) {
      case 1:
        ali = "Neutral";
        break;
      case 2:
        ali = "Circumstantial";
        break;
      case 3:
        ali = "Evil";
        break;
    }
    text(ali, 1500, 500)
  });

  aggression.predict(img, function(err, results) {
    let resRound = round(results.value)
    console.log(results);
    text(resRound, 1500, 580)
  });

}

// Function to Clear Canvas
function clearSpace() {
  fill(255)
  rect(width / 40, height / 6, 550, 550)

}
// FUnction to load the monster
function loadMonster() {
  monLoad = nameLoad.value() //Load file with name in the text box
  img = createImg('images/'+ monLoad + ".jpg") //Loads images from a folder named files
  img.position(750, height / 6)
}
