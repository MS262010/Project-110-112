prediction="";

Webcam.set({
    height:300,
    width:350,
    image_format:'jpg',
    jpg_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML=" <img id='captured_gesture' src= '"+data_uri+"'>";
    });
    }
    console.log('ml5 version:',ml5.version);

    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NblU7HvNG/model.json',modelLoaded);
    function modelLoaded(){
        console.log("Model Loaded!");
    }

    function check(){
        img=document.getElementById("captured_gesture");
        classifier.classify(img,gotResult);
    }

    function gotResult(error,results){
     if(error)
     { console.error(error);}
     
    else{
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML=results[0].label;
      prediction=results[0].label;

    if(prediction=="Amazing"){
        document.getElementById("update_emoji").innerHTML="&#128076;";
    }
    if(prediction=="Best"){
        document.getElementById("update_emoji").innerHTML="&#128077;";
    }
    if(prediction=="Victory"){
        document.getElementById("update_emoji").innerHTML="&#9996;";
    }
    if(prediction=="Fail"){
        document.getElementById("update_emoji").innerHTML="&#128078;";
    }
    if(prediction=="I Love You"){
        document.getElementById("update_emoji").innerHTML="&#129311;";
    }
}}