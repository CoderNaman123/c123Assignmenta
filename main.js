
function setup()
{
    video = createCapture(VIDEO);
    video.size(350,350);
    video.position(200,180);
    
    canvas= createCanvas(300,300);
    canvas.position(760, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("Model is loaded");
}

function gotPoses(results)
{
  if(results.length>0)
  {
     console.log(results);
  }
}