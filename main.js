var minutes = 25;
var seconds = "00";
var finalizado = false;
var click = new Audio("click.mp3");
var finish = new Audio("bell.mp3");

function template(){ //inicializamos la funcion en el body 
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){
    click.play();

    minutes = 24;
    seconds = 59;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000); //60000 ms equivalen a 60 seg
    var seconds_interval = setInterval(secondsTimer, 1000); //1000 ms equivalen a 1 seg

    function minutesTimer(){
        minutes -= 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer(){
        seconds -= 1;
        document.getElementById("seconds").innerHTML = seconds;

        if(seconds <= 00){
            if(minutes <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                finalizado = true;
                finish.play();
            }
            seconds = 60;
        }
    }
}

function modalOpening(){
    $("#modal").iziModal({
        title: 'Felicidades!',
        headerColor: '#1c3b7e', 
        overlayColor: 'rgba(0, 0, 0, 0.7)',
        timeout: 3000,
        timeoutProgressbar: true,
        timeoutProgressbarColor: 'rgba(255, 255, 255, 0.5)',
        transitionIn: 'comingIn',
        transitionOut: 'comingOut',
    });

    $('#modal').iziModal('open');
}

$(document).ready(function(){
    finish.addEventListener('play', modalOpening);
})



