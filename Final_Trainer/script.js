// Initialize the Image Classifier method with MobileNet
// Image analyzer
const classAnalyzer = ml5.featureExtractor('MobileNet', modelLoaded);
const orderAnalyzer = ml5.featureExtractor('MobileNet', modelLoaded);
const vulAnalyzer = ml5.featureExtractor('MobileNet', modelLoaded);
const dietAnalyzer = ml5.featureExtractor('MobileNet', modelLoaded);
const alignAnalyzer = ml5.featureExtractor('MobileNet', modelLoaded);
const aggrAnalyzer = ml5.featureExtractor('MobileNet', modelLoaded);
//Regression
const classification = classAnalyzer.regression();
const order = orderAnalyzer.regression();
const vulnerabilities = vulAnalyzer.regression();
const diet = dietAnalyzer.regression();
const alignment = alignAnalyzer.regression();
const aggression = aggrAnalyzer.regression();
//
let trainBut; //Button to train classifier
let saveBut; // Button to save json
//Image vars
let banshee1
let banshee2
let banshee3
let banshee4
let banshee5
let banshee6
//
let bigfoot1
let bigfoot2
let bigfoot3
let bigfoot4
let bigfoot5
let bigfoot6
//
let demon1
let demon2
let demon3
let demon4
let demon5
let demon6
//
let ghost1
let ghost2
let ghost3
let ghost4
let ghost5
let ghost6
//
let hellhound1
let hellhound2
let hellhound3
let hellhound4
let hellhound5
let hellhound6
//
let jackalope1
let jackalope2
let jackalope3
let jackalope4
let jackalope5
let jackalope6
//
let mothman1
let mothman2
let mothman3
let mothman4
let mothman5
let mothman6
//
let selkie1
let selkie2
let selkie3
let selkie4
let selkie5
let selkie6
//
let skeleton1
let skeleton2
let vampire1
let vampire2
let zombie1
let zombie2
//
let werewolf1
let werewolf2
let werewolf3
let werewolf4
let werewolf5
let werewolf6
//
let predictImg

// When the model is loaded
function modelLoaded() {
  //
  classification.addImage(banshee1,3)
  classification.addImage(bigfoot1,1)
  classification.addImage(demon1,4)
  classification.addImage(ghost1,5)
  classification.addImage(hellhound1,4)
  classification.addImage(jackalope1,2)
  classification.addImage(mothman1,3)
  classification.addImage(selkie1,2)
  classification.addImage(zombie1,5)
  classification.addImage(werewolf1,1)
  //
  order.addImage(banshee2,3)
  order.addImage(bigfoot2,1)
  order.addImage(demon2,4)
  order.addImage(ghost2,3)
  order.addImage(hellhound2,5)
  order.addImage(jackalope2,5)
  order.addImage(mothman2,1)
  order.addImage(selkie2,2)
  order.addImage(vampire1,4)
  order.addImage(werewolf2,2)
  //
  vulnerabilities.addImage(banshee3, 5)
  vulnerabilities.addImage(bigfoot3, 1)
  vulnerabilities.addImage(demon3, 3)
  vulnerabilities.addImage(ghost3, 4)
  vulnerabilities.addImage(hellhound3, 4)
  vulnerabilities.addImage(jackalope3, 2)
  vulnerabilities.addImage(mothman3, 2)
  vulnerabilities.addImage(selkie3, 3)
  vulnerabilities.addImage(vampire2, 1)
  vulnerabilities.addImage(werewolf3, 5)
  //
  diet.addImage(banshee4, 4)
  diet.addImage(bigfoot4, 2)
  diet.addImage(demon4, 2)
  diet.addImage(ghost4, 4)
  diet.addImage(hellhound4, 1)
  diet.addImage(jackalope4, 3)
  diet.addImage(jackalope1, 3)
  diet.addImage(mothman4, 1)
  diet.addImage(selkie4, 2)
  diet.addImage(skeleton1,1)
  diet.addImage(werewolf4, 2)
  //
  alignment.addImage(banshee5, 1)
  alignment.addImage(bigfoot5, 1)
  alignment.addImage(demon5, 3)
  alignment.addImage(ghost5, 2)
  alignment.addImage(hellhound5, 3)
  alignment.addImage(jackalope5, 1)
  alignment.addImage(mothman5, 1)
  alignment.addImage(selkie5, 1)
  alignment.addImage(zombie2, 3)
  alignment.addImage(werewolf5,2)
  //
  aggression.addImage(banshee6, 6)
  aggression.addImage(banshee1, 6)
  aggression.addImage(bigfoot6, 5)
  aggression.addImage(bigfoot1, 5)
  aggression.addImage(demon6, 7)
  aggression.addImage(demon1, 7)
  aggression.addImage(ghost6, 2)
  aggression.addImage(ghost1, 2)
  aggression.addImage(hellhound6, 10)
  aggression.addImage(hellhound1, 10)
  aggression.addImage(jackalope6, 1)
  aggression.addImage(jackalope1, 1)
  aggression.addImage(mothman6, 4)
  aggression.addImage(mothman1, 4)
  aggression.addImage(selkie6, 3)
  aggression.addImage(selkie1, 3)
  aggression.addImage(skeleton2, 8)
  aggression.addImage(zombie1, 8)
  aggression.addImage(werewolf6, 9)
  aggression.addImage(werewolf1, 9)

  //
  console.log(modelLoaded);
  console.log('Model Loaded!');
}


function setup() {
  createCanvas(1695, 824);

  trainBut = createButton('Train');
  trainBut.position(440, 710);
  trainBut.mousePressed(trainClassifier);
  //Button to Load image
  saveBut = createButton('Save')
  saveBut.position(1290, 710)
  saveBut.mousePressed(saveClassifier);
  //
  background(220);
  rect(width / 40, height / 6, 550, 550);
  strokeWeight(2);
  line((width / 2) - 150, 0, (width / 2) - 150, height)
  //
  //Image vars
  banshee1= createImg('Banshee1.jpg')
  banshee2= createImg('Banshee2.jpg')
  banshee3= createImg('Banshee3.jpg')
  banshee4= createImg('Banshee4.jpg')
  banshee5= createImg('Banshee5.jpg')
  banshee6= createImg('Banshee6.jpg')
  //
  bigfoot1= createImg('Bigfoot.jpg')
  bigfoot2= createImg('Bigfoot2.jpg')
  bigfoot3= createImg('Bigfoot3.jpg')
  bigfoot4= createImg('Bigfoot4.jpg')
  bigfoot5= createImg('Bigfoot5.jpg')
  bigfoot6= createImg('Bigfoot6.jpg')
  //
  demon1= createImg('Demon1.jpg')
  demon2= createImg('Demon2.jpg')
  demon3= createImg('Demon3.jpg')
  demon4= createImg('Demon4.jpg')
  demon5= createImg('Demon5.jpg')
  demon6= createImg('Demon6.jpg')
  //
  ghost1= createImg('Ghost1.jpg')
  ghost2= createImg('Ghost2.jpg')
  ghost3= createImg('Ghost3.jpg')
  ghost4= createImg('Ghost4.jpg')
  ghost5= createImg('Ghost5.jpg')
  ghost6= createImg('Ghost6.jpg')
  //
  hellhound1= createImg('Hellhound1.jpg')
  hellhound2= createImg('Hellhound2.jpg')
  hellhound3= createImg('Hellhound3.jpg')
  hellhound4= createImg('Hellhound4.jpg')
  hellhound5= createImg('Hellhound5.jpg')
  hellhound6= createImg('Hellhound6.jpg')
  //
  jackalope1= createImg('Jackalope1.jpg')
  jackalope2= createImg('Jackalope2.jpg')
  jackalope3= createImg('Jackalope3.jpg')
  jackalope4= createImg('Jackalope4.jpg')
  jackalope5= createImg('Jackalope5.jpg')
  jackalope6= createImg('Jackalope6.jpg')
  //
  mothman1= createImg('Mothman1.jpg')
  mothman2= createImg('Mothman2.jpg')
  mothman3= createImg('Mothman3.jpg')
  mothman4= createImg('Mothman4.jpg')
  mothman5= createImg('Mothman5.jpg')
  mothman6= createImg('Mothman6.jpg')
  //
  selkie1= createImg('Selkie1.jpg')
  selkie2= createImg('Selkie2.jpg')
  selkie3= createImg('Selkie3.jpg')
  selkie4= createImg('Selkie4.jpg')
  selkie5= createImg('Selkie5.jpg')
  selkie6= createImg('Selkie6.jpg')
  //
  skeleton1= createImg('Skeleton2.jpg')
  skeleton2=createImg('Skeleton1.jpg')
  vampire1= createImg('Vampire1.jpg')
  vampire2= createImg('Vampire3.jpg')
  zombie1= createImg('Zombie1.jpg')
  zombie2= createImg('Zombie2.jpg')
  //
  werewolf1= createImg('Werewolf1.jpg')
  werewolf2= createImg('Werewolf2.jpg')
  werewolf3= createImg('Werewolf3.jpg')
  werewolf4= createImg('Werewolf4.jpg')
  werewolf5= createImg('Werewolf5.jpg')
  werewolf6= createImg('Werewolf6.jpg')

  predictimg=createImg('Test 1.jpg')
};

function draw() {

}
// Function to save the image
function trainClassifier() {

  classification.train(function(lossValue) {
    if (lossValue == null) {
      console.log('Class Training Complete');
      classification.predict(predictimg,function(err, result) {
console.log(result);
});
    } else {
      console.log("Class Loss=" + lossValue);
    }
  });
  //
  order.train(function(lossValue) {
    if (lossValue == null) {
      console.log('Order Training Complete');
      order.predict(predictimg,function(err, result) {
console.log(result);
});
    } else {
      console.log("Order Loss=" + lossValue);
    }
  });
  //
  vulnerabilities.train(function(lossValue) {
    if (lossValue == null) {
      console.log('Vulnerabilities Training Complete');
      vulnerabilities.predict(predictimg,function(err, result) {
console.log(result);
});
    } else {
      console.log("Vulnerabilities Loss=" + lossValue);
    }
  });
  //
  diet.train(function(lossValue) {
    if (lossValue == null) {
      console.log('Diet Training Complete');
      diet.predict(predictimg,function(err, result) {
console.log(result);
});
    } else {
      console.log("Diet Loss=" + lossValue);
    }
  });
  //
  alignment.train(function(lossValue) {
    if (lossValue == null) {
      console.log('Alignment Training Complete');
      alignment.predict(predictimg,function(err, result) {
console.log(result);
});
    } else {
      console.log("Alignment Loss=" + lossValue);
    }
  });
  //
  aggression.train(function(lossValue) {
    if (lossValue == null) {
      console.log('Agression Training Complete');
      aggression.predict(predictimg,function(err, result) {
console.log(result);
});
    } else {
      console.log("Agression Loss=" + lossValue);
    }
  });
}

function saveClassifier() {
  classification.save();
  order.save();
  vulnerabilities.save();
  diet.save();
  alignment.save();
  aggression.save();

}
