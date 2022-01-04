function preload(){
    
    bg = loadImage("background.png");
    bg2 = loadImage("background2.png")
    am = loadImage("amok.png");
    ak = loadImage("akuma.png");
    yo = loadImage("yoyo.png");
    music = loadSound("miraculous.mp3");
}

function setup(){
    var canvas = createCanvas(600,600);
    
    yoyo = createSprite(mouseX,mouseY,50,50);
    yoyo.addImage("yoyo",yo)
    
    score = 0;
    
    

    akums = new Group();
    amoks = new Group();
}

function draw(){
    background(bg)
    stroke(3)
    line(mouseX,mouseY,480,400)
    music.play();

    yoyo.x = mouseX;
    yoyo.y = mouseY;

    if(akums.isTouching(yoyo)){
        akums.destroyEach();
        score = score + 1;
    }
    if(amoks.isTouching(yoyo)){
        amoks.destroyEach();
        score = score + 1;
    }

    spawnAkuma();
    spawnAmok();

    fill("red")
    textSize(30);
    text("Score:"+score,450,50)

    drawSprites();
}
function spawnAkuma(){
    if(frameCount%30 === 0){
        var akuma = createSprite(random(100,300),50,50,50)
        akuma.addImage("ak",ak)
        akuma.scale = 0.08;
        akuma.velocityY = 5;
        akums.add(akuma);
    }
}
function spawnAmok(){
    if(frameCount%30 === 0){
        var amok = createSprite(random(100,300),550,50,50)
        amok.addImage("am",am)
        amok.scale = 0.08;
        amok.velocityY = -5;
        amoks.add(amok);
    }
}