window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('ready');
});

SmoothScroll({

    animationTime: 800,
    stepSize: 75,


    accelerationDelta: 30,
    accelerationMax: 2,


    keyboardSupport: true,
    arrowScroll: 50,


    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    touchpadSupport: true,
});