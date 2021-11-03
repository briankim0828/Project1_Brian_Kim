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
  }
  display(window){
    fill(this.r,this.g,this.b,this.o);
    rect(this.x,this.y,this.w,this.h,2);
    push();
    translate(this.x,this.y);
    for(let i = 5;i<this.w-4;i++){
      if(i%10 == 0){
        for(let j = 5; j<(-this.h)-4; j++){
          if (j%15 == 0){
            noStroke();
            if (window == 1){
              fill(255,255,0,220);
            } else {
              fill(255, 254, 179,220);
            }
            rectMode(CENTER);
            rect(i,-j,6,6);
          }
        }
      }
    }
    pop();
  }
}

class Person{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display(){
    fill(0);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h,10);
    ellipseMode(CENTER);
    ellipse(this.x,this.y-(this.w*2-5),this.w/2,this.w/2);
    rectMode(CORNER);
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
    for (let i = this.x; i<width+50; i+=70){
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
  constructor(r1,g1,b1,o1,r2,g2,b2,o2){
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
    let interA = lerpColor(from,to,0.2);
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
    if (time == "night"){
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

back_building_1 = new Building(40,580,70,-220,6, 18, 38,190);
back_building_2 = new Building(120,580,120,-170,6, 18, 38,190);
back_building_3 = new Building(250,580,100,-190,6, 18, 38,190);
back_building_4 = new Building(350,580,95,-160,6, 18, 38,190);
back_building_5 = new Building(455,580,80,-200,6, 18, 38,190);
back_building_6 = new Building(540,580,100,-180,6, 18, 38,190);
back_building_7 = new Building(680,580,90,-170,6, 18, 38,190);


road = new Road(-10,601,40);

sky = new Sky(145,80,63,250,240,57,9,250);

water = new Water(0,645,39, 86, 168);

fence = new Fence(0,770,20,50,50);

main_person = new Person(400,750,15,40);




function setup() {
  createCanvas(800,800);
  background(20);
}

function draw() {
  water.display();
  fence.display();
  if (mouseIsPressed){
    rectMode(CENTER);
  }
  let timecount = millis();
  if(timecount>5000&&timecount<15000){
    sky.update("night");
  } else if(timecount>15000){
    sky.update("day");
  }
  
  sky.display();
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
}
