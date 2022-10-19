let servants = [{
  name :"Arjuna", 
  alignment : "lawful evil"
}, {
  name: "Karna",
  alignment: "lawful good"
} ,{
  name:"Kama", 
  alignment :"chaotic evil"
}, {
  name :"Oberon",
  alignment:"chaotic evil"
},{
  name: "Arcueid"
}
];

let randomIndex;
let Arcueid;
let Arjuna;
let Kama;
let Karna;
let Oberon;
let servant = [];

function preLoad(){
  for (let i = 0; i <= 5; i++){
   servant[i] = loadImage (`assets/servant_${i}.jpg`)
  }

}

function setup(){
createCanvas(1500,1500);
background(102,178,255);
fill(0,0,0);
textSize(50);
text("Click to protect", 500,150); 
text("the humanity!", 500,200);


}

function draw() {
  if (animating == true){
  image(servant[1], width/2, height/2);
  }
}

function mousePressed(){
  if (servants[0]){
    background(102,178,255);
  randomIndex = int(random(servants.length));
  text(servants[randomIndex].name, 200, 200);
  servants.splice(randomIndex,1);
} else{
  background(102,178,255);
  text("Lostbelt Completed!", 80, 300);
}
}