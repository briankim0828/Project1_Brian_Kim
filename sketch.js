class Building{
  constructor(x,y,w,h,r,g,b,o){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.o = o;
    this.window_opacity_yellow = 0;
    this.window_opacity_blue = 255;
  }
  display(windowVariety){
    fill(this.r,this.g,this.b,this.o); //building color
    rect(this.x,this.y,this.w,this.h,2); //draw the body of the building
    push();
    translate(this.x,this.y);
    for(let i = 5;i<this.w-4;i++){ //for loop for the windows to fit in the shape perimeter
      if(i%10 == 0&&(i==10||i==30||i==40||i==60||i==80||i==90||i==100||i==120||i==130||i==140)){
        for(let j = 5; j<(-this.h)-4; j++){
          if (j%15 == 0){
            strokeWeight(1);
            stroke(255);
            if (windowVariety == 1){//two colors depending on the paramter of the display function
              fill(255,255,0,this.window_opacity_yellow);
            } else {
              fill(255, 254, 179,this.window_opacity_yellow);
            }
            rectMode(CENTER);
            rect(i,-j,6,6);
            fill (174, 221, 245,this.window_opacity_blue);
            rect(i,-j,6,6);
          }
        }
      }
    }
    pop();
  }
  update(on){
    if (on){
      this.window_opacity_yellow++;
      this.window_opacity_blue-=2;
      if (this.window_opacity_yellow>255){
        this.window_opacity_yellow = 255;
      }
      if (this.window_opacity_blue<0){
        this.window_opacity_blue = 0;
      }
    } else {
      this.window_opacity_yellow-=2;
      this.window_opacity_blue++;
      if (this.window_opacity_yellow<0){
        this.window_opacity_yellow = 0;
      }
      if (this.window_opacity_blue>255){
        this.window_opacity_blue = 255; 
      }
    }
  }
}

class Person{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.initial = x;
  }
  display(main){
    noStroke();
    if (main){
      fill(128, 29, 11);
    } else {
      fill(0);
    }
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h,10);
    ellipseMode(CENTER);
    ellipse(this.x,this.y-(this.w*2-5),this.w*0.6);
    rectMode(CORNER);
  }
  update(speed){
    if (this.initial<400){
      this.x+=speed;
      if (this.x > 810){ 
        this.x = -20;
      }
    } else if (this.initial>400){
      this.x-=speed;
      if (this.x < -10){
        this.x = 820;
      }
    }
  }
}

class Car {
  constructor(x,y,color,speed){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
  }
  display(on){
    rectMode(CENTER);
    fill(this.color);
    rect(this.x,this.y,40,16,10);
    ellipseMode(CENTER);
    stroke(0);
    fill(200);
    ellipse(this.x-9,this.y+7,12);
    ellipse(this.x+9,this.y+7,12);
    if (this.y < 615){
      fill(174, 221, 245,100);
      beginShape();
      vertex(this.x-12,this.y-8);
      vertex(this.x-8,this.y-20);
      vertex(this.x+5,this.y-20);
      vertex(this.x+12,this.y-8);
      endShape(CLOSE);
    } else {
      fill(174, 221, 245,100);
      beginShape();
      vertex(this.x-12,this.y-8);
      vertex(this.x-5,this.y-20);
      vertex(this.x+8,this.y-20);
      vertex(this.x+12,this.y-8);
      endShape(CLOSE);
    }
    if (on){
      if (this.y < 615){
        noStroke();
        fill(255, 255, 79,100);
        beginShape();
        vertex(this.x+20,this.y-2);
        vertex(this.x+50,this.y+16);
        vertex(this.x+30,this.y+16);
        vertex(this.x+20,this.y+2);
        endShape(CLOSE);
      } else {
        noStroke();
        fill(255, 255, 79,100);
        beginShape();
        vertex(this.x-20,this.y-2);
        vertex(this.x-50,this.y+16);
        vertex(this.x-30,this.y+16);
        vertex(this.x-20,this.y+2);
        endShape(CLOSE);
      }
    }
  }
  update(){
    if (this.y < 615){
      this.x+=this.speed;
      if (this.x > 830){
        this.x = -30;
      }
    } else {
      this.x-=this.speed;
      if (this.x < -30){
        this.x = 830;
      }
    }
  }
}

class Road{
  constructor(x,y,h){
    this.x = x;
    this.y = y;
    this.h = h;
  }
  display(){
    fill(40);
    rect(this.x,this.y,width+50,this.h);
    push();
    translate(this.x,this.y);
    noStroke();
    for (let i = this.x; i<width+50; i+=70){ // white separation line in the middle
      fill(220,220,220,190);
      rectMode(CENTER);
      rect(i,(this.h)/2,50,8,3);
    }
    pop();
  }
}

class Water{
  constructor(x,y,r,g,b){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  display(){
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,width,height-this.y);
  }
}
  
class Sky{
  constructor(r1,g1,b1,o1,r2,g2,b2,o2){ //rgb 1&2 corresponds to the color values of the gradient from top to bottom
    this.r1 = r1;
    this.g1 = g1;
    this.b1 = b1;
    this.o1 = o1;
    this.r2 = r2;
    this.g2 = g2;
    this.b2 = b2;
    this.o2 = o2;
  }
  display(){
    let from = color(this.r1,this.g1,this.b1,this.o1);
    let to = color(this.r2,this.g2,this.b2,this.o2);
    let interA = lerpColor(from,to,0.2); //multiple gradients of color interpolated between rgb1 and 2
    let interB = lerpColor(from,to,0.35);
    let interC = lerpColor(from,to,0.5);
    let interD = lerpColor(from,to,0.65);
    let interE = lerpColor(from,to,0.8);
    let interF = lerpColor(from,to,0.95);
    noStroke();
    fill(interA);
    rect(0,0,width,107);
    fill(interB);
    rect(0,107,width,107);
    fill(interC);
    rect(0,214,width,107);
    fill(interD);
    rect(0,321,width,107);
    fill(interE);
    rect(0,428,width,107);
    fill(interF);
    rect(0,535,width,107);
    stroke(0);
  }
  update(time){
    if (time == "night"){ //update rgb values to match each colors for the skybox each time of day
      if(this.r1!=0){
        this.r1 -= 1;
      }
      if(this.g1!=0){
        this.g1 -= 1;
      }
      if(this.b1!=0){
        this.b1 -= 1;
      }
      if(this.r2!=0){
        this.r2 -= 1;
      }
      if(this.g2!=0){
        this.g2 -= 1;
      }
      if(this.b2!=0){
        this.b2 -= 1;
      }
      if (this.r1==0&&this.g1==0&&this.b1==0&&//
          this.r2==0&&this.g2==0&&this.b2==0){
        return (true);
      }
    } else if (time == "day"){
      if(this.r1!=212){
        this.r1 += 1;
      }
      if(this.g1!=228){
        this.g1 += 1;
      }
      if(this.b1!=255){
        this.b1 += 1;
      }
      if(this.r2!=79){
        this.r2 += 1;
      }
      if(this.g2!=144){
        this.g2 += 1;
      }
      if(this.b2!=255){
        this.b2 += 1;
      }
      if (this.r1==212&&this.g1==228&&this.b1==255&&//
          this.r2==79&&this.g2==144&&this.b2==255){
        return (true);
      }
    } else if (time == "sunset"){
      if(this.r1!=145){
        this.r1 -= 1;
      }
      if(this.g1!=80){
        this.g1 -= 1;
      }
      if(this.b1!=63){
        this.b1 -= 1;
      }
      if(this.r2!=240){
        this.r2 += 1;
      }
      if(this.g2!=42){
        this.g2 -= 1;
      }
      if(this.b2!=31){
        this.b2 -= 1;
      }
      if (this.r1==145&&this.g1==80&&this.b1==63&&//
          this.r2==240&&this.g2==42&&this.b2==31){
        return (true);
      }
    }
  }
}

class Stars{
  constructor(opacity){
    this.opacity = opacity;
  }
  display(){
    for (let i = 0; i<width+200; i+=200){
      for (let j = 0; j<height*3/4; j+=200){
        push();
        translate(i,j);
        noStroke();
        ellipseMode(CENTER);
        fill(255,255,255,this.opacity);
        ellipse(1,5,2);
        ellipse(100,20,2);
        ellipse(70,140,2);
        ellipse(30,118,2);
        ellipse(47,10,2);
        ellipse(180,10,2);
        pop();
      }
    }
  }
  update(on){ //updates opacity so stars can fade in and out depending on the time of day
    if(on){
      this.opacity+=2; 
      if (this.opacity > 255){
        this.opacity = 255;
      }
    } else {
      this.opacity-=1;
      if (this.opacity < 0){
        this.opacity = 0;
      }
    }
  }
}

class Cloud{
  constructor(x,y,w,h,speed){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
  }
  display(){
    fill(255,255,255,100);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x,this.y,this.w,this.h);
    ellipse(this.x+10,this.y+10,this.w,this.h);
    ellipse(this.x-30,this.y+20,this.w,this.h);
    ellipse(this.x-18,this.y+5,this.w,this.h);
    stroke(0);
  }
  update(){
    this.x+=this.speed;
    if (this.x > 880){ 
        this.x = -80;
      }
  }
}

class Fence{
  constructor(x,y,r,g,b){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  display(){
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,width,height-this.y);
    push();
    translate(this.x,0); //only translated on the x axis because another let j for loop is not necessary and will mess up the fence for loop below
    for (let i = 0; i<width+50; i+=100){
      rect(i,this.y-25,100,10);
      rect(i+90,this.y-25,10,25);
    }
    pop();
  }
}

//values: Building(x,y,width,height,red,green,blue,opacity)
building_1 = new Building(-10,600,87,-200,11, 29, 59,250);
building_2 = new Building(80,600,87,-125,6, 18, 38,250);
building_3 = new Building(170,600,145,-100,11, 28, 56,250);
building_4 = new Building(320,600,88,-260,14, 33, 64,250);
building_5 = new Building(410,600,78,-130,11, 29, 59,250);
building_6 = new Building(490,600,98,-80,6, 18, 38,250);
building_7 = new Building(590,600,69,-100,11, 28, 56,250);
building_8 = new Building(660,600,77,-165,14, 33, 64,250);
building_9 = new Building(740,600,70,-130,11, 29, 59,250);

//buildings in the background
back_building_1 = new Building(40,580,70,-220,6, 18, 38,190);
back_building_2 = new Building(120,580,120,-170,6, 18, 38,190);
back_building_3 = new Building(250,580,100,-190,6, 18, 38,190);
back_building_4 = new Building(350,580,95,-160,6, 18, 38,190);
back_building_5 = new Building(455,580,80,-200,6, 18, 38,190);
back_building_6 = new Building(540,580,100,-180,6, 18, 38,190);
back_building_7 = new Building(680,580,90,-170,6, 18, 38,190);


road = new Road(-10,601,40);

let carXpos = [30,350,600,700,500,150,100];
let carYpos = [603,605,609,622,620,624,618];
let carColor = [100,20,240,80,160,200,140]
let carSpeed = [2,3,4]

car1 = new Car(carXpos[0],carYpos[0],carColor[0],carSpeed[1]);
car2 = new Car(carXpos[1],carYpos[1],carColor[1],carSpeed[0]);
car3 = new Car(carXpos[2],carYpos[2],carColor[2],carSpeed[2]);
car4 = new Car(carXpos[3],carYpos[3],carColor[3],carSpeed[1]);
car5 = new Car(carXpos[4],carYpos[4],carColor[4],carSpeed[0]);
car6 = new Car(carXpos[5],carYpos[5],carColor[5],carSpeed[2]);
car7 = new Car(carXpos[6],carYpos[6],carColor[6],carSpeed[1]);

sky = new Sky(145,80,63,250,240,42,31,250);

cloud1 = new Cloud(50,100,100,30,1.1);
cloud2 = new Cloud(-50,40,140,34,1.3);
cloud3 = new Cloud(-200,120,120,28,1.2)
cloud4 = new Cloud(300,150,135,38,0.9);
cloud5 = new Cloud(450,70,145,33,1)
cloud6 = new Cloud(600,90,110,32,1.3);
cloud7 = new Cloud(700,135,125,30,1.4);
cloud8 = new Cloud(400,300,80,30,1.8);

water = new Water(0,645,39, 86, 168);

fence = new Fence(0,770,20,50,50);

main_person = new Person(400,750,15,40);

ped1 = new Person(-20,775,15,40);
ped2 = new Person(50,760,15,40);
ped3 = new Person(100,767,15,40);
ped4 = new Person(180,770,15,40);
ped5 = new Person(260,760,15,40);
ped6 = new Person(380,764,15,40);

ped7 = new Person(420,758,15,40);
ped8 = new Person(500,780,15,40);
ped9 = new Person(550,773,15,40);
ped10 = new Person(610,762,15,40);
ped11 = new Person(630,764,15,40);
ped12 = new Person(850,783,15,40);

ped13 = new Person(-110,778,15,40);
ped14 = new Person(-150,761,15,40);
ped15 = new Person(900,758,15,40);
ped16 = new Person(935,775,15,40);
ped17 = new Person(1000,770,15,40);


stars = new Stars(0);

let scenecount = 1;

let timecount = 0;

let nightMode = false; 


function setup() {
  createCanvas(800,800);
  background(20);
}

function draw() {
  water.display();
  fence.display();
  if (mouseIsPressed){//easter-egg like interactivity(looked interesting so I just kept it)
    rectMode(CENTER);
  }
  if(millis() - timecount > 5000){ //day & night cycle
    if (scenecount == 1){
      stars.update(true);
      back_building_1.update(true);
      back_building_2.update(true);
      back_building_3.update(true);
      back_building_4.update(true);
      back_building_5.update(true);
      back_building_6.update(true);
      back_building_7.update(true);
      building_1.update(true);
      building_2.update(true);
      building_3.update(true);
      building_4.update(true);
      building_5.update(true);
      building_6.update(true);
      building_7.update(true);
      building_8.update(true);
      building_9.update(true);
      if (sky.update("night")){
        scenecount++;
        timecount = millis();
        nightMode = true;
      }
    } else if (scenecount ==2){
      stars.update(false);
      back_building_1.update(false);
      back_building_2.update(false);
      back_building_3.update(false);
      back_building_4.update(false);
      back_building_5.update(false);
      back_building_6.update(false);
      back_building_7.update(false);
      building_1.update(false);
      building_2.update(false);
      building_3.update(false);
      building_4.update(false);
      building_5.update(false);
      building_6.update(false);
      building_7.update(false);
      building_8.update(false);
      building_9.update(false);
      if (sky.update("day")){
        scenecount++;
        timecount = millis();
        nightMode = false;
      }
    } else if (scenecount == 3){
      if (sky.update("sunset")){
        scenecount = 1;
        timecount = millis();
      }
    }
  }
  
  sky.display();
  stars.display();
  
  back_building_1.display(2);
  back_building_2.display(1);
  back_building_3.display(2);
  back_building_4.display(1);
  back_building_5.display(2);
  back_building_6.display(2);
  back_building_7.display(1);
  
  cloud1.update();
  cloud2.update();
  cloud3.update();
  cloud4.update();
  cloud5.update();
  cloud6.update();
  cloud7.update();
  cloud1.display();
  cloud2.display();
  cloud3.display();
  cloud4.display();
  cloud5.display();
  cloud6.display();
  cloud7.display();
  
  building_1.display(1);
  building_2.display(2);
  building_3.display(1);
  building_4.display(1);
  building_5.display(2);
  building_6.display(1);
  building_7.display(2);
  building_8.display(2);
  building_9.display(1);
  
  road.display();
  
  car1.update();
  car2.update();
  car3.update();
  car4.update();
  car5.update();
  car6.update();
  car7.update();
  car1.display(nightMode);
  car2.display(nightMode); 
  car3.display(nightMode); 
  car7.display(nightMode); 
  car5.display(nightMode); 
  car4.display(nightMode); 
  car6.display(nightMode);
  
  main_person.display(true);
  
  ped1.update(random(0.5,1.5));
  ped2.update(random(0.5,1.5));
  ped3.update(random(0.5,1.5));
  ped4.update(random(0.5,1.5));
  ped5.update(random(0.5,1.5));
  ped6.update(random(0.5,1.5));
  ped7.update(random(0.5,1.5));
  ped8.update(random(0.5,1.5));
  ped9.update(random(0.5,1.5));
  ped10.update(random(0.5,1.5));
  ped11.update(random(0.5,1.5));
  ped12.update(random(0.5,1.5));
  ped13.update(random(0.5,1.5));
  ped14.update(random(0.5,1.5));
  ped15.update(random(0.5,1.5));
  ped16.update(random(0.5,1.5));
  ped17.update(random(0.5,1.5));
  ped1.display();
  ped2.display();
  ped3.display();
  ped4.display();
  ped5.display();
  ped6.display();
  ped7.display();
  ped8.display();
  ped9.display();
  ped10.display();
  ped11.display();
  ped12.display();
  ped13.display();
  ped14.display();
  ped15.display();
  ped16.display();
  ped17.display();
}
