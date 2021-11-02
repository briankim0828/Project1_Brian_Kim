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
  display(){
    fill(this.r,this.g,this.b,this.o);
    rect(this.x,this.y,this.w,this.h,5);
    push();
    translate(this.x,this.y);
    for(let i = 5;i<this.w-4;i++){
      if(i%10 == 0){
        for(let j = 5; j<(-this.h)-4; j++){
          if (j%15 == 0){
            fill(255,255,0,150);
            noStroke();
            rectMode(CENTER);
            rect(i,-j,5,5);
          }
        }
      }
    }
    pop();
  }
}

class Mountain{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

class Road{
  constructor(x,y,h){
    this.x = x;
    this.y = y;
    this.h = h;
  }
  display(){
    fill(125);
    rect(this.x,this.y,width+50,this.h);
    push();
    translate(this.x,this.y);
    noStroke();
    for (let i = this.x; i<width+50; i+=70){
      fill(240,255,255,190);
      rectMode(CENTER);
      rect(i,(this.h)/2,50,8,3);
    }
    pop();
  }
}

class Water{
  consturctor(){
    
  }
  display(){
    
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
}


building_1 = new Building(-10,600,87,-200,11, 29, 59,250);
building_2 = new Building(80,600,87,-125,6, 18, 38,250);
building_3 = new Building(170,600,145,-100,11, 28, 56,250);
building_4 = new Building(320,600,88,-260,14, 33, 64,250);
building_5 = new Building(410,600,78,-130,11, 29, 59,250);
building_6 = new Building(490,600,98,-80,6, 18, 38,250);
building_7 = new Building(590,600,69,-100,11, 28, 56,250);
building_8 = new Building(660,600,77,-165,14, 33, 64,250);
building_9 = new Building(740,600,70,-130,11, 29, 59,250);

road = new Road(-10,603,40);

sky = new Sky(145,80,63,250,240,57,9,250);

function setup() {
  createCanvas(800,800);
  background(20);
}

function draw() {
  sky.display();
  building_1.display();
  building_2.display();
  building_3.display();
  building_4.display();
  building_5.display();
  building_6.display();
  building_7.display();
  building_8.display();
  building_9.display();
  road.display();
  
}