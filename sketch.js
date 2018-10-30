var dices =[0,0,0,0]
var results=[0,0,0,0,0,0]
var less
var sum
var cl
var rz
var scelta=0
var scelta_rz=0
var forza
var destrezza
var costituzione
var intelligenza
var saggezza
var carisma
var ct=0
var img
var img1
var nome
var race

  var thisarch=0

function preload(){
  img3=loadImage("./assets/button1.png")
  img2=loadImage("./assets/targa.png")
  img1=loadImage("./assets/button.png")
  img=loadImage("./assets/targona5.png")
  cl=loadJSON("./assets/classi.json")
  rz=loadTable("./assets/race.csv","csv","header")
}

function setup(){
  background(200)

  createCanvas(windowWidth,windowHeight)
  cart=image(img2,windowWidth/2-25,200,500,500)
  cart2=image(img2,windowWidth/2-225,200,180,500)
    cart=image(img2,windowWidth/2-25,200,500,500)
    cart2=image(img2,windowWidth/2-75,260,50,400)
    // lancia()
    // scegliclasse()
    // sceglirazza()
}
function draw() {

       cart2=image(img2,windowWidth/2-475,200,180,500)
  titolo=image(img,windowWidth/2-500,-25,1000,250)
  for(o=0;o<4;o++){bottone=image(img1,windowWidth/2-450+o*250,150,150,100)}
  fill(250,230,0)

  textSize(20)
    fill(250,230,0)
      textStyle('bold')
      textAlign(CENTER)
  text("use buttons\n to set\n class,race\n & skills",windowWidth/2-370,380)
  textSize(40)
  text("D&D 5E Charachter Generator",width/2,140)

      textAlign(LEFT)
textSize(30)
textStyle('bold')

  // rect(0,0,windowWidth/4,150)
  //
  //   rect(windowWidth/4,0,windowWidth/4,150)
  //
  //     rect(windowWidth/2,0,windowWidth/2,150)


}

function mouseReleased() {

if(ct==0 && mouseX>windowWidth/2-450 &&mouseX<windowWidth/2-300 ){lancia()}
else if(mouseX>windowWidth/2-200 &&mouseX<windowWidth/2-50 ){scegliclasse()}
else if(mouseX>windowWidth/2+50 &&mouseX<windowWidth/2+200 ){sceglirazza()}
else if(mouseX>windowWidth/2+300 &&mouseX<windowWidth/2+450 ){setSkill()}
// console.log(ct)
//
//     console.log(forza)
 }

function scegliclasse(){


        cart=image(img2,windowWidth/2-25,200,500,500)
  //sistema le caratteristiche
  //var scelta=0
  textSize(30)
   if(scelta==11){scelta=0}
    else if(mouseX>windowWidth/2-200 &&mouseX<windowWidth/2-50){scelta++}
   cart2=image(img2,windowWidth/2-225,200,180,500)

  nome=cl.classe[scelta].nome
  text("class: "+nome,windowWidth/2+100,350)
  forza=results[cl.classe[scelta].for]
  text('for:'+forza,windowWidth/2-175,350)

  destrezza=results[cl.classe[scelta].des]
  text('des:'+destrezza,windowWidth/2-175,400)

  costituzione=results[cl.classe[scelta].cos]
  text('cos:'+costituzione,windowWidth/2-175,450)

  intelligenza=results[cl.classe[scelta].int]
  text('int:'+intelligenza,windowWidth/2-175,500)

  saggezza=results[cl.classe[scelta].sag]
  text('sag:'+saggezza,windowWidth/2-175,550)

  carisma=results[cl.classe[scelta].car]
  text('car:'+carisma,windowWidth/2-175,600)
console.log(cl.classe[scelta])
sceglirazza()
  //ù
  // set class skills & archetype
  // console.log(cl.classe[scelta].abilità[round(random(1,everyskill))].skill)
}


function setSkill(){

        cart=image(img2,windowWidth/2-25,200,500,500)
textSize(20)
  var everyskill=cl.classe[scelta].abilità.length-2
  var everyarch=cl.classe[scelta].archetipo.length-1

if(thisarch!=everyarch){  for(j=0;j<cl.classe[scelta].abilità[0].num_skill;j++) {
    var thisSkill=round(1+Math.random()*everyskill)
    text(cl.classe[scelta].abilità[thisSkill].skill,windowWidth/2+75,510+j*30)
    text(cl.classe[scelta].abilità[thisSkill].car,windowWidth/2+250,510+j*30)
  }}
    if(thisarch==everyarch){thisarch=0}
    else{thisarch++}


    console.log(everyarch)

    console.log(thisarch)

    text(cl.classe[scelta].archetipo[thisarch].arch,windowWidth/2+75,450)
    text("archetype:",windowWidth/2+75,420)
      text("skills:",windowWidth/2+75,480)
    // sceglirazza()
    //

         text("race: "+race[scelta_rz]['razza'],windowWidth/2+75,390)
textSize(30)
     text("class: "+nome,windowWidth/2+100,350)

    // // console.log(cl.classe[scelta].archetipo[thisarch].arch)
}

//setrace
function sceglirazza()
 {race=rz.getObject()

         cart=image(img2,windowWidth/2-25,200,500,500)
         text("class: "+nome,windowWidth/2+100,350)

  if(scelta_rz!=14&& mouseX>windowWidth/2+50 &&mouseX<windowWidth/2+200){scelta_rz++}
  else{scelta_rz=0}
    cart2=image(img2,windowWidth/2-75,260,50,400)
  // for(var r.log(race[scelta]['razza'])
  textSize(20)
    text("race: "+race[scelta_rz]['razza'],windowWidth/2+75,420)
    text(race[scelta_rz]['for'],windowWidth/2-65,350)
    text(race[scelta_rz]['des'],windowWidth/2-65,400)
    text(race[scelta_rz]['cos'],windowWidth/2-65,450)
    text(race[scelta_rz]['int'],windowWidth/2-65,500)
    text(race[scelta_rz]['sag'],windowWidth/2-65,550)
    text(race[scelta_rz]['car'],windowWidth/2-65,590)

console.log(scelta_rz)
}

//generate stats
  function lancia(){
    textSize(20)
        for(h=0;h<6;h++){
          for(i=0;i<dices.length;i++){
          dices[i]=round(random(1,6))
          //text(dices[i],100+20*i,100+h*20,20)
          less=Math.min(...dices)
          sum= dices[0]+dices[1]+dices[2]+dices[3]-less

          results[h]=sum
          }
      //  text(sum,250,100+h*20,20)
      //
      // text('car:'+results[h],windowWidth/2-425,350+h*50)

               results.sort(function(a, b){return b-a})
            //
             scegliclasse()

  }console.log(results)}
  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }
