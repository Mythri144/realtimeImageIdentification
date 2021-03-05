//background-color: #edf4fc;

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(700, 445);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CNck3lcZb/model.json', modelLoaded);
}

function modelLoaded(){
    console.log('The model has loaded. ');
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("objectv").innerHTML = results[0].label;
        document.getElementById("accuracyv").innerHTML = results[0].confidence.toFixed(3);
    }
}