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
    this.window_opacity = 0;
  }
  display(window){
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
            if (window == 1){//two colors depending on the paramter of the display function
              fill(255,255,0,this.window_opacity);
            } else {
              fill(255, 254, 179,this.window_opacity);
            }
            rectMode(CENTER);
            rect(i,-j,6,6);
          }
        }
      }
    }
    pop();
  }
  update(on){
    if (on){
      this.window_opacity++;
      if (this.window_opacity>255){
        this.window_opacity = 255;
      }
    } else {
      this.window_opacity--;
      if (this.window_opacity<0){
        this.window_opacity = 0;
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
  display(){
    fill(0);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h,10);
    ellipseMode(CENTER);
    ellipse(this.x,this.y-(this.w*2-5),this.w/2,this.w/2);
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
  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
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

sky = new Sky(145,80,63,250,240,42,31,250);

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


stars = new Stars(0);

let scenecount = 1;

let timecount = 0;


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
  
  main_person.display();
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
}
