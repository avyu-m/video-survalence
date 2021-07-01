var video=""

status=""
function setup(){
canvas=createCanvas(500,300);
canvas.center();
video=createCapture(500,300)
video.hide()
}
function draw(){
    image(video,0,0,500,300);
}

function play(){
    objectdetecter=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting objects"
}

function modelloaded(){
    console.log(modelloaded)
 
    

}