// p5.js + BRFv4 face tracker (via handsfree.js)
//
// We're using a specific version of handsfree.js
// that has the (commercial, trial) BRFv4 tracker baked in:
// https://unpkg.com/handsfree@4.0.3/dist/handsfree.js
// more information about the BRFv4 tracker is at: 
// https://github.com/Tastenkunst/brfv4_javascript_examples

var myHandsfree;
var bg;
var bg1;
var bg2;
var count = 0; 

function preload(){
bg = loadImage(
    "https://cdn.glitch.com/8985d70c-7ff1-4874-be2c-ec8029a10545%2Fbg1.png?v=1604184058052"
  );
bg1 = loadImage(
    "https://cdn.glitch.com/8985d70c-7ff1-4874-be2c-ec8029a10545%2Fbg2.png?v=1604184795422"
  );
bg2= loadImage(
    "https://cdn.glitch.com/8985d70c-7ff1-4874-be2c-ec8029a10545%2Fbg3.png?v=1604185045346"
  );
}
//---------------------------------------------
function setup() {
  //2048 × 2732
  createCanvas(window.innerWidth, window.innerHeight);
if (height/width < 1.43){
bg.resize(2048/2732*height,height);
bg1.resize(2048/2732*height,height);
bg2.resize(2048/2732*height,height);  } else{
  
  bg.resize(width, 2732/2048*width);
bg1.resize(width, 2732/2048*width);
bg2.resize(width, 2732/2048*width);
  
}
  var myConfig = {
    hideCursor: true
  };
  myHandsfree = new Handsfree(myConfig);
  myHandsfree.start();
}

  

//---------------------------------------------
function draw() {
  var scribble = new Scribble();  
  
  background(247, 182, 111);
  imageMode( CENTER );
  image(bg,width/2,height/2 + random(-2,2));
  image(bg1,width/2,height/2 + + random(-1,1));
  image(bg2,width/2,height/2);
  push();
  if (width <640){
    
  }else{
      translate(width/2,0);
      if(height>480){
    scale(height/480);
  }
    translate(-300,0);
      
  }


  if (myHandsfree.isTracking) {
    if (myHandsfree.pose.length > 0) {

      var face0 = myHandsfree.pose[0].face;
      var nDataPieces = face0.vertices.length;

      fill(255, 0, 0);
      noStroke();
      
      if (nDataPieces >=94){
        //72,78
        // avg 74, 76 and 62, 60
        let x72 =face0.vertices[72]; 
        let y72 =face0.vertices[73];
        let x78 =face0.vertices[78];
        let y78 =face0.vertices[79];
        // 84, 90 
        let x84 =face0.vertices[84]; 
        let y84 =face0.vertices[85];
        let x90 =face0.vertices[90];
        let y90 =face0.vertices[91];
        fill(194, 106, 43);
        
         beginShape();
        stroke(194, 106, 43);
        
        curveVertex(face0.vertices[0], face0.vertices[1]);
        curveVertex(face0.vertices[0], face0.vertices[1]);
        curveVertex(face0.vertices[38], (face0.vertices[1]+face0.vertices[33])/2-dist(x72,y72,x78,y78)*2);
        curveVertex(face0.vertices[54], 
                    (face0.vertices[1]+face0.vertices[33])/2 - dist(x72,y72,x78,y78)*2.5);
        curveVertex(face0.vertices[48], (face0.vertices[1]+face0.vertices[33])/2-dist(x84,y84,x90,y90)*2);
        curveVertex((face0.vertices[32]), face0.vertices[33]);
        curveVertex((face0.vertices[32]), face0.vertices[33]);
        curveVertex((face0.vertices[32]), face0.vertices[33]);
        
        //curveVertex(face0.vertices[0], face0.vertices[1]);
        endShape(CLOSE);
        beginShape();
        noStroke();
       
        
        for(let i = 0; i < 33; i+=2){
         /* if ((i >= 8) &&(i <= 26)){
            curveVertex(face0.vertices[i], face0.vertices[17] );
          }else{*/
            curveVertex(face0.vertices[i], face0.vertices[i+1]);
          //}
      
      
        }
        curveVertex((face0.vertices[32]), face0.vertices[33]);
        curveVertex((face0.vertices[32]), face0.vertices[33]);
        
        endShape(CLOSE);
        fill(0);/*
        beginShape();
        curveVertex((face0.vertices[0]), face0.vertices[1]);
        curveVertex((face0.vertices[2]), face0.vertices[3]);
        curveVertex((face0.vertices[4]), face0.vertices[5]);
        curveVertex((face0.vertices[6]), face0.vertices[7]);
        curveVertex((face0.vertices[8]), face0.vertices[9]);
  
        curveVertex( face0.vertices[8] - .75*dist(face0.vertices[0], face0.vertices[1], face0.vertices[54], face0.vertices[55]),
                     face0.vertices[9]);
        curveVertex( face0.vertices[6] - dist(face0.vertices[0], face0.vertices[1], face0.vertices[54], face0.vertices[55]),
                     face0.vertices[7]);
        curveVertex(face0.vertices[4] - dist(face0.vertices[0], face0.vertices[1], face0.vertices[54], face0.vertices[55]),
                     face0.vertices[5]);
        curveVertex(face0.vertices[2] - .75*dist(face0.vertices[0], face0.vertices[1], face0.vertices[54], face0.vertices[55]),
                     face0.vertices[3]);
        endShape(CLOSE);*/
        
        //scribble.scribbleFilling( xCoords, yCoords, gap, angle );
        strokeWeight(1);
        stroke(64, 74, 143);
        let xCoords =[face0.vertices[0], face0.vertices[2], face0.vertices[4],face0.vertices[6],face0.vertices[8],
                      face0.vertices[8] - .75*dist(face0.vertices[0], face0.vertices[1], face0.vertices[54], face0.vertices[55]),
                      face0.vertices[6] - dist(face0.vertices[0], face0.vertices[1], face0.vertices[54], face0.vertices[55]),
                      face0.vertices[4] - dist(face0.vertices[0], face0.vertices[1], face0.vertices[54], face0.vertices[55]),
                      face0.vertices[2] - .75*dist(face0.vertices[0], face0.vertices[1], face0.vertices[54], face0.vertices[55]),
                      face0.vertices[0]
                     ]
        let yCoords = [face0.vertices[1],face0.vertices[3],face0.vertices[5],face0.vertices[7],face0.vertices[9],
                       face0.vertices[9],face0.vertices[7],face0.vertices[5],face0.vertices[3], face0.vertices[1]]
          
        scribble.scribbleFilling( xCoords, yCoords,  random(5, 10), random(0, 360));
        strokeWeight(1);
        stroke(64, 74, 143);
        xCoords =[face0.vertices[32], face0.vertices[30], face0.vertices[28],face0.vertices[26],face0.vertices[24],
                      face0.vertices[24] + .75*dist(face0.vertices[32], face0.vertices[33], face0.vertices[54], face0.vertices[55]),
                      face0.vertices[26] + dist(face0.vertices[32], face0.vertices[33], face0.vertices[54], face0.vertices[55]),
                      face0.vertices[28] + dist(face0.vertices[32], face0.vertices[33], face0.vertices[54], face0.vertices[55]),
                      face0.vertices[30] + .75*dist(face0.vertices[32], face0.vertices[33], face0.vertices[54], face0.vertices[55]),
                      face0.vertices[32]
                     ]
        yCoords = [face0.vertices[33],face0.vertices[31],face0.vertices[29],face0.vertices[27],face0.vertices[25],
                       face0.vertices[25],face0.vertices[27],face0.vertices[29],face0.vertices[31], face0.vertices[33]]
          
        scribble.scribbleFilling( xCoords, yCoords,  random(5, 10), random(0, 360));
        noStroke();
        /*let x72 =face0.vertices[72]; 
        let y72 =face0.vertices[73];
        let x78 =face0.vertices[78];
        let y78 =face0.vertices[79];*/
        fill(98, 109, 189);
        scribble.scribbleEllipse( (x78 +x72)/2, (y78+y72)/2, dist(x72,y72,x78,y78)*2, dist(x72,y72,x78,y78)*2);
        fill(64, 74, 143);
        scribble.scribbleEllipse( (x78 +x72)/2, (y78+y72)/2, dist(x72,y72,x78,y78), dist(x72,y72,x78,y78));
        fill(98, 109, 189);
        scribble.scribbleEllipse( (x90 +x84)/2, (y90+y84)/2, dist(x84,y84,x90,y90)*2, dist(x84,y84,x90,y90)*2);
        fill(64, 74, 143);
        scribble.scribbleEllipse( (x90+x84)/2, (y90+y84)/2, dist(x84,y84,x90,y90), dist(x84,y84,x90,y90));
        //54, 14 and 16
        
        let x54 =face0.vertices[54]; 
        let y54 =face0.vertices[55];
        let mx14_16 =(face0.vertices[14] + face0.vertices[16])/2;
        let my14_16 =(face0.vertices[15]+ face0.vertices[17])/2;
        let radi = abs(face0.vertices[16] - face0.vertices[14]) ;
        let distan = 1.3*dist(mx14_16, my14_16, x54, y54);
        
        
        beginShape();
     for(let i = 96; i < 119; i+=2){
       curveVertex(face0.vertices[i], face0.vertices[i+1]);
     }
      //curveVertex(face0.vertices[96], face0.vertices[97]);
      endShape(CLOSE);
        fill(41, 48, 92);
          beginShape();
     for(let i = 120; i < 135; i+=2){
       curveVertex(face0.vertices[i], face0.vertices[i+1]);
     }
    
      //curveVertex(face0.vertices[120], face0.vertices[121]);
      endShape(CLOSE);
        
     
        
        //scribble.scribbleFilling([width / 4, width / 4, width / 4 * 3, width / 4 * 3], [height / 4, 3 * height / 4, 3 * height / 4, height / 4], random(5, 10), random(0, 360));
        noStroke();
        fill(191, 58, 54);
        rect(x54-radi/2,.92*(y54) ,radi,distan, radi/2);
        
        strokeWeight(1);
        stroke(143, 40, 37);
        scribble.scribbleRoundedRect( x54,(y54+my14_16)/2,radi,
                             distan, radi/2);
      }
      
      // Rotations of the head, in radians
      var rx = face0.rotationX; // pitch
      var ry = face0.rotationY; // yaw
      var rz = face0.rotationZ; // roll
      

    }
  
  
  
  //save(str(count))
    //count++;
  }
  pop();
}
//leave this stuff here and don't worry about it. It's just here to make this code editor recognize p5 functions
/* global alpha, blue, brightness, color, green, hue, lerpColor, lightness, red, saturation, p5.Color, Setting, background, clear, colorMode, fill, noFill, noStroke, stroke, erase, noErase, arc, ellipse, circle, line, point, quad, rect, square, triangle, ellipseMode, noSmooth, rectMode, smooth, strokeCap, strokeJoin, strokeWeight, bezier, bezierDetail, bezierPoint, bezierTangent, curve, curveDetail, curveTightness, curvePoint, curveTangent, beginContour, beginShape, bezierVertex, curveVertex, endContour, endShape, quadraticVertex, vertex, plane, box, sphere, cylinder, cone, ellipsoid, torus, loadModel, model, HALF_PI, PI, QUARTER_PI, TAU, TWO_PI, DEGREES, RADIANS, print, frameCount, deltaTime, focused, cursor, frameRate, noCursor, displayWidth, displayHeight, windowWidth, windowHeight, windowResized, width, height, fullscreen, pixelDensity, displayDensity, getURL, getURLPath, getURLParams, preload, setup, draw, remove, disableFriendlyErrors, noLoop, loop, isLooping, push, pop, redraw, p5, DOM, p5.Element, select, selectAll, removeElements, changed, input, createDiv, createP, createSpan, createImg, createA, createSlider, createButton, createCheckbox, createSelect, createRadio, createColorPicker, createInput, createFileInput, createVideo, createAudio, createCapture, createElement, p5.MediaElement, p5.File, p5.Graphics, createCanvas, resizeCanvas, noCanvas, createGraphics, blendMode, drawingContext, setAttributes, console, applyMatrix, resetMatrix, rotate, rotateX, rotateY, rotateZ, scale, shearX, shearY, translate, LocalStorage, storeItem, getItem, clearStorage, removeItem, createStringDict, createNumberDict, p5.TypedDict, p5.NumberDict, append, arrayCopy, concat, reverse, shorten, shuffle, sort, splice, subset, float, int, str, boolean, byte, char, unchar, hex, unhex, join, match, matchAll, nf, nfc, nfp, nfs, split, splitTokens, trim, deviceOrientation, accelerationX, accelerationY, accelerationZ, pAccelerationX, pAccelerationY, pAccelerationZ, rotationX, rotationY, rotationZ, pRotationX, pRotationY, pRotationZ, turnAxis, setMoveThreshold, setShakeThreshold, deviceMoved, deviceTurned, deviceShaken, Keyboard, keyIsPressed, key, keyCode, keyPressed, keyReleased, keyTyped, keyIsDown, Mouse, movedX, movedY, mouseX, mouseY, pmouseX, pmouseY, winMouseX, winMouseY, pwinMouseX, pwinMouseY, mouseButton, mouseIsPressed, mouseMoved, mouseDragged, mousePressed, mouseReleased, mouseClicked, doubleClicked, mouseWheel, requestPointerLock, exitPointerLock, touches, touchStarted, touchMoved, touchEnded, createImage, saveCanvas, saveFrames, p5.Image, loadImage, image, tint, noTint, imageMode, Pixels, pixels, blend, copy, filter, get, loadPixels, set, updatePixels, IO, loadJSON, loadStrings, loadTable, loadXML, loadBytes, httpGet, httpPost, httpDo, p5.XML, createWriter, p5.PrintWriter, save, saveJSON, saveStrings, saveTable, Table, p5.Table, p5.TableRow, day, hour, minute, millis, month, second, year, Math, abs, ceil, constrain, dist, exp, floor, lerp, log, mag, map, max, min, norm, pow, round, sq, sqrt, fract, Vector, createVector, p5.Vector, noise, noiseDetail, noiseSeed, randomSeed, random, randomGaussian, Trigonometry, acos, asin, atan, atan2, cos, sin, tan, degrees, radians, angleMode, textAlign, textLeading, textSize, textStyle, textWidth, textAscent, textDescent, loadFont, text, textFont, p5.Font, orbitControl, debugMode, noDebugMode, ambientLight, specularColor, directionalLight, pointLight, lights, lightFalloff, spotLight, noLights, Material, loadShader, createShader, shader, resetShader, normalMaterial, texture, textureMode, textureWrap, ambientMaterial, emissiveMaterial, specularMaterial, shininess, p5.Geometry, p5.Shader, camera, perspective, ortho, frustum, createCamera, p5.Camera, setCamera*/
