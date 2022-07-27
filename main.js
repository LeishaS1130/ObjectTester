console.log("ml5 version is",ml5.version)

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'/>";
    });
}

//initializing the model here and storing inside a variable called classifier

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9PyWC1xD6/model.json",modelLoaded);

function modelLoaded(){
    console.log("yayyyy im happy model is loaded");
}

function check() {
    img=document.getElementById('captured_img');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=(results[0].confidence*100).toFixed(1)+"%";
    }
}