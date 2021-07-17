function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

img = "";
status = "";

function preload(){
    img = loadImage('WhatsApp Image 2021-07-11 at 14.27.26.jpeg');
}



function modelLoaded(){
    console.log("Model loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}



function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("LAPTOP", 150, 70);
    noFill();
    stroke("#FF0000");
    rect(130, 40, 350, 350);



    fill("#FF0000");
    text("Meghaminx" , 60, 190);
    noFill();
    stroke("#FF0000");
    rect( 50, 200, 80, 60 );
}



function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}