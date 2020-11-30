function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XSSyDy5Og/model.json', model_loaded);
}

function model_loaded() {
    console.log('Model Loaded!');
}

function draw() {
image(video, 0, 0, 300, 300);
classifier.classify(video, got_result);
}


function got_result(error, result) {
    if (error)
    console.error(error);
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = (result[0].confidence*100).toFixed(2)+"%";
    }
} 