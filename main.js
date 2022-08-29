var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    speak();
    Webcam.attach(camera);
}

function speak() {
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").ariaValueMax;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_data);

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    image_quality: 90
});
camera=document.getElementById("camera");
