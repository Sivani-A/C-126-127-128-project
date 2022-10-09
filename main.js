var music_1=""
var music_2=""
var leftx=0
var lefty=0
var rightx=0
var righty=0

function preload(){
music_1="music.mp3"
music_1="music2.mp3"
}

function setup(){
    canvas=createCanvas(450,450)
    canvas.position(450,170)
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotposes);
}

function modeLoaded(){
    console.log("PoseNet is initialized")
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
        leftx=results[0].pose.leftWrist.x;
        console.log(leftx);
        lefty=results[0].pose.leftWrist.y;
        rightx=results[0].pose.rightWrist.x;
        righty=results[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video,0,0,450,450)
    fill("red");
    stroke("red");
    circle(leftx,lefty,20)
    circle(rightx, righty,20)
}