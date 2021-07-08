 var gameState = 1;

 var score = 0;


function preload(){
  coinImage = loadImage("coin.png")
  sadAngle = loadImage("sadangle.png")
  bgImagestart = loadImage("1stbg.jpg")
  cloudImage = loadImage("cloud.png");
  hpAngle = loadImage("happyAngle.png");
  qmak = loadImage("questionMark.png")
  bolt1 = loadImage("boltboi.png")
  foreB = loadImage("fireball.png")
  baaa = loadImage("batboi.png")
  boop = loadImage("bullet.png")
  ay = loadImage("gotte.jpg")
  bamm = loadImage("bam.png")
  boiii = loadImage("plz.jpg")
}

function setup() {
  createCanvas(1500,1000);
  //coin = createSprite(400, 200, 50, 50);
  //coin.addImage("coinboi",coinImage);

 // sadAngles = createSprite(600, 200, 50, 50);
  //sadAngles.addImage("angleeeee", sadAngle);


  Angleboi = new Group();
  Angleboi2 = new Group();
  Angleboi3 = new Group();
  qmakk = new Group();
  ayyy = new Group();
  sssa = new Group();
  rgdfs = new Group();
  bre = new Group();
  boi = new Group();
  goo = new Group();

  enemy1 = new Group();
}

function draw() {
  background("lightblue");
  
  if(gameState === 1){
    cloud = createSprite(200, 100, 60, 60)
    cloud.addImage("clouddddd", cloudImage)

    cloud2 = createSprite(975, 100, 60, 60)
    cloud2.addImage("cloooosd", cloudImage);

    happyAngle = createSprite(300, 700, 60, 60)
    happyAngle.addImage("asdasd", hpAngle);
    happyAngle.scale = 1.4;
    Angleboi.add(happyAngle);


   

    textSize(45)
    fill("purple");
    text("Why hello there,", 725, 300)
    textSize(45)
    fill("purple");
    text("Nice to meet you!", 725, 400);
    textSize(45)
    fill("purple");
    text("I am an angel,", 725, 500);
    textSize(45)
    fill("purple");
    text("To guide you on", 725, 600)
    textSize(45)
    fill("purple");
    text("Your adventures:)", 725, 700)

    textSize(30)
    fill("black");
    text("(Press e to proceed)", 775, 900);
  
    if(keyDown(69) && gameState === 1){
      console.log("SDdasad")

      gameState = 2
      Angleboi.destroyEach();
    }
 
 
    
    }

    if(gameState === 2){
      //console.log("YAY");
  sadAngles = createSprite(300, 700, 60, 60);
  sadAngles.addImage("DASDASD", sadAngle);
Angleboi2.add(sadAngles);

  textSize(45)
  fill("purple")
  text("We are in a bit of a", 725, 300);
  textSize(45)
  fill("purple")
  text("precarious situation...", 725, 400)
  textSize(45)
  fill("purple")
  text("A mysterious monster", 725, 500)
  textSize(45)
  fill("purple")
  text("stole my riches", 725, 600);
  textSize(45)
  fill("purple")
  text("I am recruiting you", 725, 700)
  textSize(45)
  fill("purple")
  text("To help me out...", 725, 800);
  textSize(30)
  fill("black")
  text("(Press f to proceed)", 775, 900)

  if(keyDown(70) && gameState === 2){
    console.log("SDdasad")

    gameState = 3
    //Angleboi2.destroyEach();
  }
    }

    if(gameState === 3){
      fill("purple")
      textSize(45)
      text("*Sigh*, I guess we", 725, 300);
      fill("purple")
      textSize(45)
      text("Have to work it out, huh?", 675, 400)
      fill("purple")
      textSize(45)
      text("I can't do much now,", 725, 500);
      fill("purple")
      textSize(45)
      text("But I'm sure you can:)", 725, 600)
      fill("black")
      textSize(30);
    text("(Press e to proceed)", 775, 900);
      
      
      if(keyDown(69) && gameState === 3){
        console.log("SDdasad")
    
        gameState = 4
        Angleboi2.destroyEach();
      }
    }

    if(gameState === 4){
      queMark = createSprite(225, 700, 60, 60);
      queMark.addImage("ASDASDASDASD", qmak);
      queMark.scale = 0.7;
      qmakk.add(queMark);

      hapAngel = createSprite(950, 700, 60, 60);
      hapAngel.addImage("ASDASDARJIFJDSF", hpAngle)
      Angleboi3.add(hapAngel)


      //type "Need Help? Walk throught this tutorial or something:)"
      textSize(50)
      fill("black")
      text("Tutorial Time!", 450, 300)
      textSize(50)
      fill("black")
      text("Press g to skip the whole", 450, 400)
      textSize(50)
      fill("black")
      text("Tutorial at anytime:)", 450, 500);


      

      fill("black")
      textSize(30);
    text("(Press f to proceed)", 775, 900);
      
    if(keyDown(70) && gameState === 4){
      console.log("SDdasad")
  
      gameState = 5
      Angleboi3.destroyEach();
      qmakk.destroyEach();
    }

    }

    if(gameState === 5){
      fill("black")
      textSize(50)
    text("You are Raiden", 430, 300)
    radboi = createSprite(600, 500, 40, 40)
    radboi.addImage("AD:ASIUGOI&SCB", bolt1)
    ayyy.add(radboi);

    fill("black")
    textSize(50)
    text("Use the left, right and up arrow keys to move", 100, 800)

    fill("black")
    textSize(30);
  text("(Press e to proceed)", 775, 900);

  if(keyDown(69) && gameState === 5){
    gameState = 6
    ayyy.destroyEach();
  }
    }

    if(gameState === 6){

      baa = createSprite(300, 450, 100, 100)
      baa.addImage("ADOIHYSND", baaa)
      baa.scale = 1.5
      rgdfs.add(baa);
      //write something like "ooohh these are your enemies, make sure to avoid them or...!!"

   st = createSprite(800, 400, 100, 100)
   st.addImage("SDASDOHCC NIUWHI", boop)
   st.scale = 0.7;
   bre.add(st)

   fill("black")
textSize(55)
text("Avoid these enemies, or...", 300, 700)

fill("black")
textSize(30);
text("(Press f to proceed)", 775, 900);

      if(keyDown(70) && gameState === 6){
        gameState = 7
        
        rgdfs.destroyEach();
        bre.destroyEach();
        }
    }

    if(gameState === 7){
firebaa = createSprite(600, 350, 60, 60)
firebaa.addImage("asdasd", foreB)
sssa.add(firebaa);

fill("black")
textSize(45)
text("To attack enemies, press w", 350, 600)
fill("black")
textSize(45)
text("To launch your fireball", 350, 700)

fill("black")
textSize(30);
text("(Press e to proceed)", 775, 900);

if(keyDown(69) && gameState === 7){
gameState = 8
sssa.destroyEach();
}


    }

    if(gameState === 8){
      fill("black")
textSize(45)
text("You only have three lives.", 300, 400)
fill("black")
textSize(45)
text("Make them count", 370, 500)
baaaaa = createSprite(550, 700, 60, 60);
baaaaa.addImage("KHYGJBSAIBUNO", ay)
boi.add(baaaaa)

fill("black")
textSize(30);
text("(Press f to proceed)", 775, 900);

if(keyDown(70) && gameState === 8){
  gameState = 9
  boi.destroyEach();
  }
    }

    if(gameState === 9){
      fill("black")
      textSize(45)
      text("To Pass the level", 300, 400)

      textSize(45)
      text("You need to collect 100 coins", 300, 500)

      boom = createSprite(600, 700, 60, 60);
      boom.addImage("OUIHJHNIO", bamm)
      goo.add(boom);


fill("black")
textSize(30);
text("(Press e to proceed)", 775, 900);


if(keyDown(69) && gameState === 9){
  gameState = 10
  goo.destroyEach();


    }
  }
  

  if(gameState === 10){
    //START THE GAME

    background2 = createSprite(600, 500, 1200, 1000)
    background2.addImage("UHDFASFASDBLNBOUI", boiii)
    background2.scale = 3.5;

    line1 = createSprite(600, 730, 2000, 30)
    line1.visible = false

    dogGame = createSprite(1300, 700, 40, 40);
    dogGame.addImage("ADSASDdsgbyhkuhbrr", bolt1)
    dogGame.scale = 0.4;

    if(keyDown(87)){
      fireboiii = createSprite(dogGame.x-125, dogGame.y, 40, 40);
      fireboiii.addImage("IOUHHBVIISDFHIAWEU:PGEU", foreB)
      fireboiii.velocityX = -3;
      fireboiii.scale = 0.4;
    }
    spawnenemy1();

  }
    drawSprites();
    createEdgeSprites();
  }

  function spawnenemy1(){
    if(frameCount%250 === 0){
      ene1 = createSprite(300, 300, 50, 50);

      ene1.addImage("moneyImages", boop);
      ene1.velocityX = 3;
      ene1.lifetime = 60
      enemy1.add(ene1);
    
    }
    
  }
  



  


