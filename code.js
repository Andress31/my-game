var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//barreiras
var barreira1 = createSprite(190,120,420,3);
var barreira2 = createSprite(190,260,420,3);

var mortes = 0 ;


var carro1 = createSprite(100,185,15,15);
var carro2 = createSprite(155,185,15,15);
var carro3 = createSprite(220,185,15,15);
var carro4 = createSprite(280,185,15,15);

var sam = createSprite(30,190,15,15);
carro1.velocityY = 3
carro2.velocityY = -3
carro3.velocityY = 3
carro4.velocityY = -3

carro1.shapeColor = 'pink';
carro2.shapeColor = 'blue';
carro3.shapeColor = 'red';
carro4.shapeColor = 'green';
sam.shapeColor = 'black';

function draw() {
  background("white");
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  fill("black")
textSize(25);
text("mortes: " +mortes,290,90);
  
  
  
  if(keyDown("right")){
  sam.x = sam.x + 3;
    
  }
 if(keyDown("left")){
  sam.x = sam.x + -3;
    
  }
 carro1.bounceOff(barreira1);
 carro1.bounceOff(barreira2);
 carro2.bounceOff(barreira1);
 carro2.bounceOff(barreira2);
 carro3.bounceOff(barreira1);
 carro3.bounceOff(barreira2);
 carro4.bounceOff(barreira1);
 carro4.bounceOff(barreira2);
 
 if(sam.isTouching(carro1)){
  sam.x = 20;
  mortes = mortes + 1
  }
 if(sam.isTouching(carro2)){
  sam.x = 20;
  mortes = mortes + 1
  }
 if(sam.isTouching(carro3)){
  sam.x = 20;
  mortes = mortes + 1
  }
 if(sam.isTouching(carro4)){
  sam.x = 20;
  mortes = mortes + 1
  }
 
 
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
