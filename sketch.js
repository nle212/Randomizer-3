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
  name: "Arcueid",
  alignment:"chaotic evil"
}
];

let randomIndex;
let animating = false;
let Arcueid;
let Arjuna;
let Kama;
let Karna;
let Oberon;
let servant = [];


function preload(){
  for (let i = 1; i <= 5; i++){
   servant[i] = loadImage ('assets/servant_'+i+'.jpg')
 }
}

function setup(){
createCanvas(1500,700);
background(102,178,255);
fill(0,0,0);
textFont('Courier new');
textSize(50);
textStyle(BOLD);
text("Humanity is being threatened!", 280,300); 
createButton("Click here to protect the humanity!");
}

function draw() {
  if (animating == true){
  console.log(servant[1])
  image(servant[1], width/2, height/2);
  }
}

function randomizer(){
  animating = false;
  if (servants[0]){
    background(102,178,255);
  randomIndex = int(random(servants.length));
  text(servants[randomIndex].name, 500, 100);
  servants.splice(randomIndex,1);
} else{
  background(102,178,255);
  text("Lostbelt Completed!", 380, 300);
 }

}
function mousePressed(){
  animating = true;
  setTimeout (randomizer, 500);
  
}
