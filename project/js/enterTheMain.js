var greetVideo = document.createElement('video')
var btnBreakInto = document.getElementById('breakInto')

greetVideo.src = '../img/greetGround.mp4'
greetVideo.style.width = '100%'
greetVideo.style.position = 'absolute'
greetVideo.style.top = '0'

greetVideo.setAttribute('autoplay', true)
greetVideo.setAttribute('loop', true)
greetVideo.setAttribute('preload', 'auto')

document.body.prepend(greetVideo)
document.addEventListener('click', () => {
    if(greetVideo.paused) {
        greetVideo.play();
    }
})

btnBreakInto.addEventListener('click', () => {
    window.location.href = '../lesson1.html'
})