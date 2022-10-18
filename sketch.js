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
function setup(){
createCanvas(600,600);
background(200);
fill(0,0,0);
textSize(50);
text("Click to protect", 100,150); 
text("the humanity!", 100,200);

}

function draw() {
  
}

function mousePressed(){
  if (servants[0]){
  background(random(200,255));
  randomIndex = int(random(servants.length));
  text(servants[randomIndex].name, 200, 200);
  servants.splice(randomIndex,1);
} else{
  background(random(200,250));
  text("Lostbelt Completed!", 80, 300);
}
}